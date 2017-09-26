angular.module('pantry-app')

  .service('pantry', function($http) {
    this.add = (item) => {
      $http.post('http://127.0.0.1:3000/pantryItems', { data: item });
    };
  });
