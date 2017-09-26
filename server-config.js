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

app.post('/pantryItems', (req, res) => {
  console.log(req.body);

  PantryItem.findOne({name: req.name})
    .exec((err, item) => {
      if (!item) {
        var newItem = new PantryItem({
          name: req.body.name,
          brand: req.body.brand,
          quantity: req.body.quantity,
          units: req.body.units,
          expiration: req.body.expiration
        });
        newItem.save((err, newUser) => {
          if (err) {
            res.status(500).send(err);
          }
        });
      } else {
        console.log('Item already exists');
        res.send(item);
      }
    });
});

module.exports = app;