angular.module('pantry-app')

  .controller('ItemViewerController', function(pantry) {
    this.deleteItem = () => {
      pantry.delete(this.item._id, this.onDelete);
    };
  })

  .component('itemViewer', {

    bindings: {
      item: '<',
      onDelete: '<'
    },
    controller: 'ItemViewerController',
    templateUrl: 'client/templates/itemViewer.html'
  });