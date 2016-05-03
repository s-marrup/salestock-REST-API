var itemModel = require('../models/item');

/* Repositories */
module.exports.list = function(callback, limit) {
	itemModel.find(callback).where('is_active').equals(true).limit(limit);
};
module.exports.listByParameter = function(param, callback, limit) {
	var query = itemModel.find({ is_active: true });

	if (param.size_list != undefined) {
		query.where('size_list').in(param.size_list);
	}
	
	if (param.color_list != undefined) {
		query.where('color_list').in(param.color_list);
	}

	if (param.price_start_from != undefined || param.price_up_to != undefined) {
		query.where('price');
		if (param.price_start_from != undefined) {
			query.gt(param.price_start_from);
		}
		if (param.price_up_to != undefined) {
			query.lt(param.price_up_to);
		}
	}
	query.limit(limit).exec(callback);
};
module.exports.createItem = function(item, callback) {
	itemModel.create(item, callback);
};
module.exports.updateItem = function(id, item, options, callback) {
	var condition = {_id: id};
	var update = {
		name: item.name,
		description: item.description,
		category: item.category,
		price: item.price,
		size_list: item.size_list,
		color_list: item.color_list,
		is_active: item.is_active
	};
	itemModel.findOneAndUpdate(condition, update, options, callback);
};
module.exports.deleteItem = function(id, callback) {
	var condition = {_id: id};
	itemModel.remove(condition, callback);
};