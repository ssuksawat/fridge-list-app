angular.module('fridgeListApp').controller('InventoryListCtrl', InventoryListCtrl);

function InventoryListCtrl($scope) {
  var vm = this;

  init();

  vm.remove = remove;

  /* ----- PUBLIC ----- */

  function remove($index) {
    var targetId = vm.lists[$index]._id;
    vm.lists.remove(targetId);
  }

  /* ---- PRIVATE ----- */

  function init() {
    vm.lists = $scope.$meteorCollection(Inventories, false);
    $scope.$meteorSubscribe('inventories');
  }
}
