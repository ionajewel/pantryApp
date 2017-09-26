angular.module('pantry-app')
  .component('itemListEntry', {
    bindings: {
      item: '<',
      onClick: '<'
    },
    templateUrl: 'client/templates/itemListEntry.html'
  });