const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
title : { type:  String, description: "Required Field", required: true },
blog : { type:  String, description: "Required Field", required: true },
writtenBy : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('Blog', BlogSchema);