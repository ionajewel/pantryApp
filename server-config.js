var express = require('express');
var bodyParser = require('body-parser');
var db = require('./app/config');
var PantryItem = require('./app/models/pantryItem');

var app = express();

app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send(200);
});

app.get('/pantryItems', (req, res) => {
  PantryItem.find({}).exec((err, items) => {
    res.send(items);
  });
});

app.post('/pantryItems', (req, res) => {
  var newItem = req.body.item;
  PantryItem.findOne({name: newItem.name, brand: newItem.brand})
    .exec((err, item) => {
      if (!item) {
        var newPantryItem = new PantryItem({
          name: newItem.name,
          brand: newItem.brand,
          quantity: newItem.quantity,
          units: newItem.units,
        });
        newPantryItem.save((err, itemData) => {
          if (err) {
            res.status(500).send(err);
          } else {
            res.status(201).send(itemData);
          }
        });
      } else {
        res.send(item);
      }
    });
});

module.exports = app;