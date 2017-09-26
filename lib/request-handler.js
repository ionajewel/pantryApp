var request = require('request');
var crypto = require('crypto');
var bcrypt = require('bcrypt-nodejs');
var util = require('../lib/utility');

var db = require('../app/config');
var User = require('../app/models/user');
var PantryItem = require('../app/models/pantryItem');



exports.renderIndex = function(req, res) {
  res.render('index');
};

exports.signupUserForm = function(req, res) {
  res.render('signup');
};

exports.loginUserForm = function(req, res) {
  res.render('login');
};

exports.logoutUser = function(req, res) {
  req.session.destroy(function() {
    res.redirect('/login');
  });
};

exports.fetchPantryItems = function(req, res) {
  PantryItem.find({}).exec(function(err, pantryItems) {
    res.status(200).send(pantryItems);
  });
};

exports.fetchList = function(req, res) {
  PantryItem.findAll({addToList: true}).exec(function(err, list) {
    res.status(200).send(list);
  });
};

exports.deletePantryItem = function(req, res) {
  //deletes a pantry item
};

exports.removeShoppingListItem = function(req, res) {
  //if possible implement an update for any pantry items that get checked off of the shopping list
};

exports.savePantryItem = function(req, res) {
  PantryItem.findOne({ name: req.body.name }).exec(function(err, found) {
    if (found) {
      res.status(200).send(found);
    } else {
      var newPantryItem = new PantryItem({
        name: req.body.name,
        brand: req.body.brand,
        quantity: req.body.quantity,
        units: req.body.units,
        usePerWeek: req.body.usePerWeek,
        refillWhenBelow: req.body.refillWhenBelow,
        refillAmt: req.body.refillAmt,
        expiration: req.body.expiration,
        addToList: req.body.addToList
      });
      newPantryItem.save(function(err, newPantryItem) {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(newPantryItem);
        }
      });
    }
  });
};

exports.loginUser = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({ username: username })
    .exec(function(err, user) {
      if (!user) {
        res.redirect('/login');
      } else {
        User.comparePassword(password, user.password, function(err, match) {
          if (match) {
            util.createSession(req, res, user);
          } else {
            res.redirect('/login');
          }
        });
      }
    });
};

exports.signupUser = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({ username: username })
    .exec(function(err, user) {
      if (!user) {
        var newUser = new User({
          username: username,
          password: password
        });
        newUser.save(function(err, newUser) {
          if (err) {
            res.status(500).send(err);
          }
          util.createSession(req, res, newUser);
        });
      } else {
        console.log('Account already exists');
        res.redirect('/signup');
      }
    });
};