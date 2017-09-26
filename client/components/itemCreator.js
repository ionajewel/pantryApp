angular.module('pantry-app')

  .controller('ItemCreatorController', function(pantry) {
    this.createItem = () => {
      var newItem = {
        name: this.name,
        brand: this.brand,
        quantity: this.quantity,
        units: this.units,
        expiration: this.expiration
      };
      pantry.add(newItem);
    };
  })
  .component('itemCreator', {

    bindings: {
      onSubmit: '<'
    },
    controller: 'ItemCreatorController',
    templateUrl: 'client/templates/itemCreator.html'
  });