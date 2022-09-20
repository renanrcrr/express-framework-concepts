# Express application to demonstrate important concepts

This repository contains a small [Express](https://expressjs.com/) application 
to demonstrate important concepts about that fast and minimalist web framework for Node.js

## Concept 1 : Chain of Responsibility Design Pattern 

The chain of responsibility design pattern implemented in the framework shows that the order of calls 
to middleware functions really matters and when the third parameter (by convention next) responsible 
for allowing later functions to be executed, the execution is interrupted.

## Concept 2 : BodyParser

According to the documentation, the bodyParser object exposes several factories to create middleware. All middleware will populate req.body property with parsed body when Content-Type request header matches type option or empty object ({}) if there is no body to parse, Content-Type doesn't match or an error occurred.

In this way, the project presents three examples of returns for middleware functions, among them text(), json() and urlencoded() that are the most used in projects.

## Concept 3 : Get Data via Request

The application presents two ways of obtaining data via URL. The first, which is more specific, uses the query attribute of the request and the second, more general, uses the params attribute of the request as well.

## Concept 4 : Import and Export

Different ways of importing and exporting have been developed in the application. On the one hand, direct import of a function, while on the other hand, import sending the app object from the framework internally during execution.

Furthermore, implementations of function exports through objects or directly can be evidenced.
