angular.module('pantry-app')

  .controller('ItemCreatorController', function(pantry) {
    this.createItem = (form) => {
      var newItem = {
        name: this.name,
        brand: this.brand,
        quantity: this.quantity,
        units: this.units,
      };
      pantry.add(newItem, this.onCreate);
      this.name = '';
      this.brand = '';
      this.quantity = '';
      this.units = '';
    };
  })
  .component('itemCreator', {

    bindings: {
      onCreate: '<'
    },
    controller: 'ItemCreatorController',
    templateUrl: 'client/templates/itemCreator.html'
  });