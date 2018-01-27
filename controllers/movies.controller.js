'use strict';
const Movie = require('../models/Movie');

function getMovies(req, res, next) {
    Movie.find({}, function (err, movies) {
        if (err) {
            return next(err);
        }
        res.send(movies);
    });
}

function addMovie(req, res, next) {
    const { name, year, format, actors } = req.body;
    const movie = new Movie({
        name,
        year,
        format,
        actors
    });
    movie.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Movie was saved');
    });
}

function removeMovie(req, res, next) {
    const movieId = req.params.id;
    Movie.findByIdAndRemove(movieId, function (err, movie) {
        if (err) {
            return next(err);
        }
        res.send(`Movie ${movie.name} was removed`);
    });
}

function uploadListOfMovies(req, res, next) {
    const fileContent = req.file.buffer.toString();
    const moviesParagraphs = fileContent.split(/\n{2,}/g).slice(0, -1);
    const movies = moviesParagraphs.map((movieParagraph) => {
        return {
            name: movieParagraph.match(/Title:\s{1,}(.+)/)[1],
            year: movieParagraph.match(/Year:\s*(\d+)/)[1],
            format: movieParagraph.match(/Format:\s*(.+)/)[1],
            actors: movieParagraph.match(/Stars:\s*(.+)/)[1].split(/,{1}\s*/)
        };
    });
    Movie.insertMany(movies, function (err, data) {
        if (err) {
            return next(err);
        }
        res.send(`${data.length} movies was inserted`);
    });
}

const moviesController = {
    getMovies,
    addMovie,
    removeMovie,
    uploadListOfMovies
}

module.exports = moviesController;