var mongoose = require('mongoose')

var Schema = mongoose.Schema

var suggestionSchema = new Schema({
  name: { type: String, required: false },
  suggestion: { type: String, required: true },
  date: { type: Schema.Types.Mixed, required: true }
})

module.exports = mongoose.model('Suggestion', suggestionSchema );