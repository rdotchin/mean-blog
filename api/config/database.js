const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect('mongodb://localhost/blog');

//show mongoose errors
db.on('error', console.log.bind(console, 'connection error'));

db.once('open', function() {
    console.log('database connected');
});

// Export the database
module.exports = db;