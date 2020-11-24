const mongoose = require('mongoose')

const Blog = mongoose.model('Blog', {
    title:{
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    snippet:{
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    body:{
        type: String,
        required: true,
        trim: true,
        lowercase: true
    }
})

module.exports = Blog