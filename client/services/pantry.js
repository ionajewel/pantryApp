angular.module('pantry-app')

  .service('pantry', function($http) {
    this.add = (item, cb) => {
      $http.post('http://127.0.0.1:3000/pantryItems', { item })
        .then(this.fetch(cb));
    };
    this.fetch = (cb) => {
      $http.get('http://127.0.0.1:3000/pantryItems')
        .then((items) => {
          cb(items.data);
        });
    };
  });
