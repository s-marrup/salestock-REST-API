var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true
	},
	parent: {
		type: String,
		default: ''
	},
	is_active: {
		type: Boolean,
		default: true
	},
	created_date: {
		type: Date,
		default: Date.now
	}
});

var category = module.exports = mongoose.model('Category', categorySchema);