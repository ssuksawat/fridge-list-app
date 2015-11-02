angular.module('fridgeListApp').controller('InventoryListCtrl', InventoryListCtrl);

function InventoryListCtrl($scope) {
  var vm = this;

  vm.lists = $scope.$meteorCollection(() => {
    return Inventories.find({});
  }, false);
  $scope.$meteorSubscribe('inventories');
}
