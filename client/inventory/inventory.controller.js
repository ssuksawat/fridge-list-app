angular
  .module('fridgeListApp')
  .controller('InventoryCtrl', InventoryCtrl);

function InventoryCtrl($scope, $meteor, $state, createService) {
  var vm = this;

  init();

  vm.isActive = isActive;
  vm.openModal = createService.openCreateModal;

  /* ----- PUBLIC ----- */

  function isActive(list) {
    return list._id === $state.params.listId;
  }

  /* ----- PRIVATE ----- */

  function init() {
    vm.lists = $scope.$meteorCollection(Inventories, false);
  }

}
