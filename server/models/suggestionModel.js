var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var suggestionSchema = new Schema({
	name       : { type: String, required: false },
	suggestion : { type: String, required: true },
	type       : { type: String, required: true },
	difficulty : { type: String, required: true },
	isApproved : { type: Boolean, required: true },
	email      : { type: String, required: false }
});

module.exports = mongoose.model('Suggestion', suggestionSchema);
