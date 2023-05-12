//require dependencies
const express = require(express);
const path = require('path');
const logger = require('morgan');

//initialize app
const app = express();

//configure settings

//mount middleware

//mount routes

//catch-all route
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

//tell app to listen
const port = PROCESS.env.PORT || 3001;
app.listen(port, function() {
    console.log(`Express app is listening on port: ${port}`);
})
