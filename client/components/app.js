angular.module('pantry-app')

  .controller('AppCtrl', function() {
    this.items = window.examplePantryData;
    this.currentItem = window.examplePantryData[0];

    this.selectItem = (item) => {
      this.currentItem = item;
    };

    this.onSubmit = () => {

    };

  })
  .component('app', {
    controller: 'AppCtrl',
    templateUrl: 'client/templates/app.html'
  });