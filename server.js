//require dependencies
const express = require('express');
const path = require('path');
const logger = require('morgan');
const favicon = require ('serve-favicon');

//initialize app
const app = express();

//configure settings
require('dotenv').config();
require('./config/database');

//mount middleware
app.use(express.json());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'build')));
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));

//mount routes
app.use('/api/users', require('./routes/api/users'));

//catch-all route
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

//tell app to listen
const port = process.env.PORT || 3001;
app.listen(port, function() {
    console.log(`Express app is listening on port: ${port}`);
})
