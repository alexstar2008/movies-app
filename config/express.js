'use strict';
const express = require('express');
const bodyParser =require('body-parser');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');

const router = require('../routes/index');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(compression());
app.use(helmet());

app.use('/api', router);

app.use((err,req,res,next)=>{
    if(err){
        res.json(err);
    }
});

module.exports = app;