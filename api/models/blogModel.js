const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create Schema
var blogSchema = new Schema({
    title:  String,
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs:  Number
    }
});

// Create a model
var Blog = mongoose.model('Blog', blogSchema);

// export the model
module.exports = Blog;