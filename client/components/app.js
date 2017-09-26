angular.module('pantry-app')

  .controller('AppCtrl', function(pantry) {
    this.items = window.examplePantryData;
    this.currentItem = window.examplePantryData[0];

    this.fetchResults = (data) => {
      this.items = data;
      this.currentItem = data[0];
    };

    this.selectItem = (item) => {
      this.currentItem = item;
    };

    pantry.fetch(this.fetchResults);

  })
  .component('app', {
    controller: 'AppCtrl',
    templateUrl: 'client/templates/app.html'
  });