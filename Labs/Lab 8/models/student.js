const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
    firstName: String,
    lastName: String
})

module.exports = mongoose.model("Students", personSchema);