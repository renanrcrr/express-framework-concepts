/**
 * Author: Renan Rodrigues (Software Engineer)
 * Goal: Study and knowledge
 */

const app = require('express')();
const bodyParser = require('body-parser');

const greeting = require('./greetingMiddleware');
const userApi = require('./api/user');

//It import the function and send the app
require('./api/product')(app, 'with param');

app.post('/user', userApi.save);
app.get('/user', userApi.get);

/**
 * All text in the body request will be interpreted
 * Resulted of text() function is a middleware function 
 */
app.use(bodyParser.text());

/**
* All json in the body request will be interpreted
* Resulted of json() function is a middleware function
*/
app.use(bodyParser.json());

/**
* All data in the body request from a form will be interpreted 
* Resulted of urlencoder() function is a middleware function
*/
app.use(bodyParser.urlencoded({ extended: true }));

/*
* It understands greeting as a middleware function even without the http (req,res)
*/
app.use(greeting("Webteam"));

/*
* Middleware function
* Express uses chain of responsibility design pattern
* So, the calling position of a middleware matters
*/
app.use((req, res, next) => {
    console.log("First operation");
    next();
});

/**
 * Get data from req.query
 * localhost:3000/clients/report?status=true&year=2022 
 */
app.get('/clients/report', (req, res) => {
    res.send(`Report's client status = ${req.query.status} / ano = ${req.query.year}`);
});

app.post('/body', (req, res) => {
    //It sends all text interpreted via parserBody (text or json)
    //res.send(req.body);
    res.send(req.body);
});

/**
 * Get data from req.params
 * localhost:3000/clients/3
 */
app.get('/clients/:id', (req, res) => {
    res.send(`Client ${req.params.id} selected.`);
});


// Without next is not possible to run next middleware in runtime
app.get('/heydata', (req, res, next) => {
    console.log("Second operation");
    res.json({
        company: "Image Direct",
        city: "Traralgon"
    })
    next();
});

app.use((req, res) => {
    console.log("Third operation");
});

app.listen(3000, () => {
    console.log("Running...");
});