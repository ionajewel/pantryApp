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
  PantryItem.findOne({name: newItem.name})
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
            res.status(201).send(itemData._id);
          }
        });
      } else {
        PantryItem.findOneAndUpdate({name: newItem.name}, {
          brand: newItem.brand,
          quanitity: newItem.quantity,
          units: newItem.units
        }).exec((err, item) => {
          res.send(newItem._id);
        });
      }
    });
});

app.delete('/pantryItems/:itemId', (req, res) => {
  var id = req.params.itemId.slice(1);
  PantryItem.remove({_id: id}, (err) => {
    if (!err) { console.log('Item deleted.'); }
  });
  res.sendStatus(202);
});

module.exports = app;