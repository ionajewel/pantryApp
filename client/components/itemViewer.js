angular.module('pantry-app')

  .controller('ItemViewerController', function(pantry) {
    this.deleteItem = () => {
      pantry.delete(this.item._id, this.onDeleteClick);
    };

    this.updateItem = () => {
      this.onUpdateClick(this.item);
    };
  })

  .component('itemViewer', {

    bindings: {
      item: '<',
      onDeleteClick: '<',
      onUpdateClick: '<'
    },
    controller: 'ItemViewerController',
    templateUrl: 'client/templates/itemViewer.html'
  });