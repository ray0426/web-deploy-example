const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Creating a schema, sort of like working with an ORM
const nameSchema = new Schema({
  name : {
    type: String,
    required: [true, 'Name field is required.']
  }
})

// Creating a table within database with the defined schema
const Name = mongoose.model('name', nameSchema)

// Exporting table for querying and mutating
module.exports = Name;
