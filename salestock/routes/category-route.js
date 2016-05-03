var express = require('express');
var router = express.Router();

/* GET Repository and Util */
var categoryRepository = require('../repositories/category-repository');
var responseUtil = require('../utils/response-util');

/* Routes */
/* Route for Listing All Categories */
router.get('/list', function(req, res) {
	categoryRepository.list(function(err, categories) {
		responseUtil.getCommonResponse(err, res, categories);
	});
});

/* Route for Creating a New Record */
router.post('/create', function(req, res) {
	var param = req.body;
	
	categoryRepository.createCategory(param, function(err, category) {
		responseUtil.getCommonResponse(err, res, category);
	});
});

/* Route for Updating a Category */
router.put('/update/:_id', function(req, res) {
	var id = req.params._id;
	var param = req.body;

	categoryRepository.updateCategory(id, param, {}, function(err, category) {
		responseUtil.getCommonResponse(err, res, category);
	});
});

/* Route for Deleting a Category */
router.delete('/delete/:_id', function(req, res) {
	var id = req.params._id;
	
	categoryRepository.deleteCategory(id, function(err, category) {
		responseUtil.getCommonResponse(err, res, category);
	});
});
/* End of Routes */

module.exports = router;