const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogPost = new Schema({
  title: String,
  time_stamp: String,
  author: String,
  description: String,
  content: String,
  cover_image_src: String
})

exports.BlogPost = mongoose.model("post", BlogPost);