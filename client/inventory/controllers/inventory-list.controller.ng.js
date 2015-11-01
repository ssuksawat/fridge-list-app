angular.module('fridgeListApp').controller('InventoryListCtrl', InventoryListCtrl);

function InventoryListCtrl($meteor) {
  var vm = this;

  vm.lists = $meteor.collection(function () {
    return Inventories.find({});
  });
  $meteor.subscribe('inventories');
}
