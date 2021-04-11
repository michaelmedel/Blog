const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});

let id = '605dc13ff3b9ad9b4ded78a3';

BlogPost.findByIdAndDelete(id, (error, blogpost) => {
    console.log(error,blogpost)
});

