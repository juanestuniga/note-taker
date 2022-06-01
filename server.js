// Dependencies
const express = require('express');

// Creating an express server
const app = express();


// PORT
const PORT = process.env.PORT || 3001;

// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// Parse incoming JSON data
app.use(express.json());

app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// Point Server to series of routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Listener
app.listen(PORT, function () {
    console.log(`API is ready on ${PORT}!`);
});