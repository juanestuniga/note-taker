const express = require('express');
const app = express();
const path = require('path');
const fs = require("fs");

// PORT
const PORT = process.env.PORT || 5500;

// Parse data
app.use(express.urlencoded({ extended: true }));

// Parse data
app.use(express.json());

// Point Server to routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);




// Listener
app.listen(PORT, function () {
    console.log(`API is ready on ${PORT}!`);
});