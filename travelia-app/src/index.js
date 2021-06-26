const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// Db connection
const { mongoose } = require('./database');

// Settings 
app.set('port', process.env.PORT || 3001);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/places', require('./routes/place.routes'));
app.use('/api/orders', require('./routes/order.routes'));
app.use('/api/users', require('./routes/user.routes'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));;

// JWT Required
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(require('./controllers/authController'));

// Starting the server
async function init() {
  await app.listen(app.get('port'), () => {
    console.log(`✈️ Travelia`);
    console.log(`✔️ Server on port ${app.get('port')}`);
  });
}

init();
