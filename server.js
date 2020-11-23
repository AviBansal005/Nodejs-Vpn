const puppeteer = require('puppeteer');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Bodyparser
// app.set('/css',express.static(__dirname+'public/main.css'))
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.port || 5000;

// Routes 
app.use('/', require('./index'));


app.listen(PORT);
