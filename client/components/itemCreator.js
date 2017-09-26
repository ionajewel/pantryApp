angular.module('pantry-app')

  .controller('ItemCreatorController', function() {
  })
  .component('itemCreator', {

    bindings: {
      onSubmit: '<'
    },
    controller: 'ItemCreatorController',
    templateUrl: 'client/templates/itemCreator.html'
  });