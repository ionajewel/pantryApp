angular.module('pantry-app')

  .service('pantry', function($http) {
    this.add = (item, cb) => {
      $http.post('http://127.0.0.1:3000/pantryItems', {item})
        .then((response) => {
          this.fetch(cb, response.data);
        });
    };
    this.fetch = (cb, id) => {
      $http.get('http://127.0.0.1:3000/pantryItems')
        .then((items) => {
          cb(items.data, id);
        });
    };
    this.delete = (itemId, cb) => {
      $http.delete('http://127.0.0.1:3000/pantryItems/:' + itemId)
        .then(this.fetch(cb));
    };
  });
