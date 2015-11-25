angular.module('fridgeListApp').controller('InventoryListsCtrl', InventoryListsCtrl);

function InventoryListsCtrl($scope, $meteor, $state, $mdDialog) {
  var vm = this;

  init();

  vm.edit = edit;
  vm.remove = remove;
  vm.view = view;

  /* ----- PUBLIC ----- */

  function edit($index, $event) {
    $event.stopPropagation();
    $mdDialog.show({
      templateUrl: 'client/edit/edit-modal/edit-list-modal.html',
      controller: 'EditListCtrl',
      controllerAs: 'edit',
      locals: { selectedList: vm.lists[$index] }
    });
  }

  function remove($index, $event) {
    $event.stopPropagation();
    var target = vm.lists[$index];
    if (target.items && target.items.length > 0) {
      showConfirmDeleteDialog(target)
        .then(() => $meteor.call('removeList', target._id));
    }
  }

  function view(id) {
    $state.go('main.inventoryItems', {listId: id});
  }

  /* ---- PRIVATE ----- */

  function init() {
    vm.lists = $scope.$meteorCollection(Inventories, false);
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
