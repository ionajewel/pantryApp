angular.module('pantry-app')
  .component('itemList', {
    bindings: {
      items: '<',
      onClick: '<'
    },
    templateUrl: 'client/templates/itemList.html'
  });