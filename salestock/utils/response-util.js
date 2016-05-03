/* Common Method */
module.exports.getCommonResponse = function(err, response, result) {
	if (err) {
		response.json(err);
		/*throw err;*/
	} else {
		response.json(result);
	}
};