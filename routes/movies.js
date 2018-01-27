'use strict';
const router = require('express').Router();
const multer = require('multer');
var upload = multer({ storage: multer.memoryStorage() });

const moviesController = require('../controllers/movies.controller');


router.get('/', moviesController.getMovies);
router.post('/', moviesController.addMovie);
router.delete('/:id', moviesController.removeMovie);
router.post('/file', upload.single('movies'), moviesController.uploadListOfMovies);

module.exports = router;