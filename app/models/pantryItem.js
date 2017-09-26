var db = require('../config');
var mongoose = require('mongoose');

var pantryItemSchema = mongoose.Schema({
  name: String,
  brand: String,
  quantity: Number,
  units: String,
});

var PantryItem = mongoose.model('PantryItem', pantryItemSchema);

module.exports = PantryItem;