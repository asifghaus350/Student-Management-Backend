 
//const express = require('express');
//const app = express();
const http = require('http');
//const db = require('./db');
// Define the port the server will listen on
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
    res.statusCode = 200;

    // Check the URL path and respond accordingly

    if (req.url === '/') {
        res.setHeader('content-type', 'text/plain');
        res.end('Hello Frnds ,Welcome to the my homepage! \n');
    } else if (req.url === '/about') {
        res.setHeader('content-type', 'text/plain');
        res.end('This is the about page for asifghaus.\n');
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Page not found(404) or Error.\n');
    }
});

// Make the server listen on the defined port
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});



/*
const http = require('http');

// Define the port the server will listen on
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
    // Set the response header with status and content type
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    // Send a response to the client
    res.end('Hello, world!\n');
});

// Make the server listen on the defined port
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

*/