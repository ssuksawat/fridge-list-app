angular.module('fridgeListApp').controller('InventoryListsCtrl', InventoryListsCtrl);

function InventoryListsCtrl($scope, $meteor, $mdDialog) {
  var vm = this;

  init();

  vm.edit = edit;
  vm.remove = remove;

  /* ----- PUBLIC ----- */

  function edit($index) {
    $mdDialog.show({
      templateUrl: 'client/edit/edit-modal/edit-list-modal.html',
      controller: 'EditListCtrl',
      controllerAs: 'edit',
      locals: { selectedList: vm.lists[$index] }
    });
  }

  function remove($index) {
    var targetId = vm.lists[$index]._id;
    $meteor.call('removeList', targetId);
  }

  /* ---- PRIVATE ----- */

  function init() {
    vm.lists = $scope.$meteorCollection(Inventories, false).subscribe('inventories');
  }
}
