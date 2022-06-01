var express = require('express');
var app = express();
var path = require('path');
var fs = require("fs");

// Routes
var apiRoutes = require('./routes/apiRoutes');
var htmlRoutes = require('./routes/htmlRoutes');

// PORT
var PORT = process.env.PORT || 5500;

// Parse data
app.use(express.urlencoded({ extended: true }));

// Parse data
app.use(express.json());


app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// Listener
app.listen(PORT, function () {
    console.log(`API is ready on ${PORT}!`);
});