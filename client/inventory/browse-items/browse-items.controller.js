angular.module('fridgeListApp').controller('BrowseItemsCtrl', BrowseItemsCtrl);

function BrowseItemsCtrl($scope, $stateParams, $meteor) {
  var vm = this;

  init();

  vm.edit = edit;
  vm.remove = remove;

  /* ----- PUBLIC ----- */

  function edit() {

  }

  function remove($index) {
    var target = vm.items[$index];
    $meteor.call('removeItem', target._id, target.inventoryId);
  }

  /* ----- PRIVATE ----- */

  function init() {
    vm.items = $scope.$meteorCollection(Items, false).subscribe('items-by-inventory', $stateParams.listId);
  }
}
