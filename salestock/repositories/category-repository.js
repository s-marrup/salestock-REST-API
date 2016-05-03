var categoryModel = require('../models/category');

/* Repositories */
module.exports.list = function(callback, limit) {
	categoryModel.find(callback).where('is_active').equals(true).limit(limit);
};
module.exports.createCategory = function(category, callback) {
	categoryModel.create(category, callback);
};
module.exports.updateCategory = function(id, category, options, callback) {
	var condition = {_id: id};
	var update = {
		name: category.name,
		parent: category.parent,
		is_active: category.is_active
	};
	categoryModel.findOneAndUpdate(condition, update, options, callback);
};
module.exports.deleteCategory = function(id, callback) {
	var condition = {_id: id};
	categoryModel.remove(condition, callback);
};