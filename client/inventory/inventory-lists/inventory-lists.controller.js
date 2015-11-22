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
    var target = vm.lists[$index];
    if (target.items && target.items.length > 0) {
      showConfirmDeleteDialog(target)
        .then(() => $meteor.call('removeList', target._id));
    }
  }

  /* ---- PRIVATE ----- */

  function init() {
    vm.lists = $scope.$meteorCollection(Inventories, false).subscribe('inventories');
  }

  function showConfirmDeleteDialog(list) {
    var title = 'This list is not empty... Are you sure you want to delete it?';
    var content = 'Deleting this list will result in deletion of ' + list.items.length + ' items.';
    var confirmDelete = $mdDialog.confirm()
          .title(title)
          .textContent(content)
          .ariaLabel('Confirm delete non-empty list')
          .ok('Delete it')
          .cancel('Cancel');
    return $mdDialog.show(confirmDelete);
  }
}
