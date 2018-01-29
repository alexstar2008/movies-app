## Intro

This is the back-end part of "Movie-app".

Live API [Heroku]: https://webby-movies-app.herokuapp.com/api/movies/

Tecnologies: Node + Express + Mongo(Mongoose) + Joi

Folder Structure:

  -controllers (api handlers)
  
  -models (mongoose models of movie)
  
  -router (api movie router)
  
  -config
  
    -validation (Joi validation scheme for movie)
    
    -db (db connection)
    
    -express ( basic app config with necessary middlewares)
    
    -config (server & db configs)

## Installation

1) Clone this repository: git clone https://github.com/alexstar2008/movies-app.git
1) Make sure that you have latest @node and @npm versions
2) Run "npm install" to install dependencies
3) Run "npm run serve" to start live-reload app

Other scripts can be found in "Available Scripts"

Enjoy:)

## Travis CI

To make intergation with Travis CI find '.travis.yml' in the repository.
Just change 'api_key' to your own Heroku key while configuraion

## Configuration

To change database server:
  Change server 'env' configuration of MONGO_STR to your own connection string
  
Note:
  Configure 'cors middleware' at 'config/express' to make some restriction if you need
  By default: access-control-allow-origin *


## Deploy to heroku

  Link: https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction

## Available Scripts

In the project directory, you can run:

### `npm start`

Enter to start node server

### `npm run serve`

Enter to start live-reload server based on @nodemon

