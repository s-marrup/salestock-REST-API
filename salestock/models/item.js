var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true
	},
	description: {
		type: String,
		default: ''
	},
	category: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	size_list: {
		type: [String],
		default: []
	},
	color_list: {
		type: [String],
		default: []
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

var item = module.exports = mongoose.model('Item', itemSchema);