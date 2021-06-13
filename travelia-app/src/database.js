const mongoose = require('mongoose');

const databaseURI = 'mongodb://localhost/travelia-app';

mongoose.connect(databaseURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(db => console.log('MongoDB database is online!'))
    .catch(err => console.log(err));

module.exports = mongoose;