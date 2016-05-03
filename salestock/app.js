var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var categoryRoute = require('./routes/category-route');
var itemRoute = require('./routes/item-route');

var app = express();
app.use(bodyParser.json());

/* Connect to Mongoose */
mongoose.connect('mongodb://localhost/salestockDB');
var db = mongoose.connection;

/* Index */
app.get('/', function(req, res){
	res.send('Please use /api/category or /api/item. Available URLs :'
		+'\n1. /api/category/list (GET) - for listing all categories'
		+'\n2. /api/category/create (POST) - for creating a new category'
		+'\n3. /api/category/update/:_id (PUT) - for updating an existing category'
		+'\n4. /api/category/delete/:_id (DELETE) - for deleting an existing category'
		+'\n5. /api/item/list (GET) - for listing all items'
		+'\n6. /api/item/create (POST) - for creating a new item'
		+'\n7. /api/item/update/:_id (PUT) - for updating an existing item'
		+'\n8. /api/item/delete/:_id (DELETE) - for deleting an existing item'
		+'\n---'
		+'\n9. /api/item/search (POST) - for filtering based on item size, color, and price range'
	);
});

/* Use Routes */
app.use('/api/category', categoryRoute);
app.use('/api/item', itemRoute);

/* Start Server */
app.listen(3000);
console.log('Running on port 3000 ...')