angular.module('pantry-app')

  .controller('AppCtrl', function(pantry) {
    this.fetchResults = (data) => {
      this.items = data;
      this.currentItem = data[data.length - 1];
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