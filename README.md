# challenge-nodejs-postgresql-rest-api

API REST to demonstrate knowledge in json web token and management of entity/relationship models with node.js and postgresql with sequelize

## first step

Clone the repository on your machine by opening a terminal and executing the next command

> `git clone https://github.com/julyanpatricio/challenge-nodejs-postgresql-rest-api.git`

## Dependencies installation

In the terminal, go to the project folder and enter the command

> `npm install`

## Configure .env with data from your postgresql database and secret for jwt

You need to set environment variables within an .env file in the project's base folder with the following syntax.

> `DB_USER=username`
>
> `DB_PASSWORD=password`
>
> `DB_HOST=localhost:5432`
>
> `DB_NAME=challenge_improvein`
>
> `TOKEN_SECRET=yourtextsecret`


## run the project

Finally, run the following command from the terminal while inside the project's base folder
> `npm start`

This will set up a server that you can access from [http://localhost:3001](http://localhost:3001) in your browser
