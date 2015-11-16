angular.module('fridgeListApp').controller('InventoryItemsCtrl', InventoryItemsCtrl);

function InventoryItemsCtrl($scope, $stateParams) {
  var vm = this;

  init();

  vm.edit = edit;
  vm.remove = remove;

  /* ----- PUBLIC ----- */

  function edit() {

  }

  function remove() {
    
  }

  /* ----- PRIVATE ----- */

  function init() {
    vm.items = $scope.$meteorCollection(Items, false);
    $scope.$meteorSubscribe('items-by-inventory', $stateParams.listId);
  }
}
