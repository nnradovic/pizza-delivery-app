const mongoose = require('mongoose');
const Schema = mongoose.Schema

const postSchema = new Schema({
    name : {
        type :String,
        required: true
    },
    price:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('Post', postSchema);