angular
  .module('fridgeListApp')
  .controller('InventoryCtrl', InventoryCtrl);

function InventoryCtrl($scope, $state, inventoryService, createService) {
  var vm = this;

  init();

  vm.info = info;
  vm.isActive = isActive;
  vm.openCreateModal = createService.openCreateModal;
  vm.remove = remove;
  vm.view = view;

  /* ----- PUBLIC ----- */

  function info($index, $event) {
    $event.stopPropagation();
    inventoryService.openListInfoModal(vm.lists[$index]);
  }

  function isActive(list) {
    return list._id === $state.params.listId;
  }

  function remove($index, $event) {
    $event.stopPropagation();
    inventoryService.removeList(vm.lists[$index]);
  }

  function view(id) {
    $state.go('main.inventories.items', {listId: id});
  }

  /* ----- PRIVATE ----- */

  function init() {
    vm.lists = $scope.$meteorCollection(Inventories, false);
  }

}
