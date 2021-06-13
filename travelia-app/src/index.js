const express = require('express');
const morgan = require('morgan');

const { moongose } = require('./database');
const app = express();

// Settings
app.set('port', process.env.PORT || 5000);

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use(require('./routes'));

// Static files

// Start the server
app.listen(app.get('port'), () => {
  console.log("Server running");
});
