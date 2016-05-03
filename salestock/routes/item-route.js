var express = require('express');
var router = express.Router();

/* GET Repository and Util */
var itemRepository = require('../repositories/item-repository');
var responseUtil = require('../utils/response-util');

/* Routes */
/* Route for Listing All Items */
router.get('/list', function(req, res) {
	itemRepository.list(function(err, items) {
		responseUtil.getCommonResponse(err, res, items);
	});
});

/* Route for Listing Some Items Depends on Size, Color, and Price Range */
router.post('/search', function(req, res) {
	var param = req.body;
	
	itemRepository.listByParameter(param, function(err, items) {
		responseUtil.getCommonResponse(err, res, items);
	});
});

/* Route for Creating a New Record */
router.post('/create', function(req, res) {
	var param = req.body;
	
	itemRepository.createItem(param, function(err, item) {
		responseUtil.getCommonResponse(err, res, item);
	});
});

/* Route for Updating an Item */
router.put('/update/:_id', function(req, res) {
	var id = req.params._id;
	var param = req.body;
	
	itemRepository.updateItem(id, param, {}, function(err, item) {
		responseUtil.getCommonResponse(err, res, item);
	});
});

/* Route for Deleting an Item */
router.delete('/delete/:_id', function(req, res) {
	var id = req.params._id;
	
	itemRepository.deleteItem(id, function(err, item) {
		responseUtil.getCommonResponse(err, res, item);
	});
});
/* End of Routes */

module.exports = router;