angular.module('pantry-app')

  .controller('ItemViewerController', function() {
  })
  .component('itemViewer', {

    bindings: {
      item: '<'
    },
    controller: 'ItemViewerController',
    templateUrl: 'client/templates/itemViewer.html'
  });