'use strict';
const router = require('express').Router();
const multer = require('multer');
const validator = require('express-validation');
var upload = multer({ storage: multer.memoryStorage() });

const moviesController = require('../controllers/movies.controller');
const moviesValidation = require('../config/validation/movies.validation');

router.get('/', moviesController.getMovies);
router.post('/', validator(moviesValidation.addMovie), moviesController.addMovie);
router.delete('/:id', validator(moviesValidation.removeMovie), moviesController.removeMovie);
router.post('/file', upload.single('movies'), moviesController.uploadListOfMovies);

module.exports = router;