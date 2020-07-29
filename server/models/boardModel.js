var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var boardSchema = new Schema({
	title   : { type: String, required: true },
	type    : { type: String, required: true },
	pieces  : { type: Schema.Types.Array, required: true },
	email   : { type: String, required: false },
	starred : { type: Boolean, required: false }
});

module.exports = mongoose.model('Board', boardSchema);
