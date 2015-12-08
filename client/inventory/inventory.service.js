angular
  .module('fridgeListApp')
  .factory('inventoryService', InventoryService);

function InventoryService($meteor, $state, $mdDialog) {

  return {
    openListInfoModal: openListInfoModal,
    removeList: removeList
  };

  /* ----- PUBLIC ----- */

  function openListInfoModal(list) {
    $mdDialog.show({
      templateUrl: 'client/info/list-info/list-info-modal.html',
      controller: 'ListInfoCtrl',
      controllerAs: 'info',
      fullscreen: true,
      locals: { selectedList: list }
    });
  }

  function removeList(list) {
    if (list.items && list.items.length > 0) {
      showConfirmDeleteDialog(list)
        .then(() => $meteor.call('removeList', list._id));
    } else {
      $meteor.call('removeList', list._id);
    }
  }

  /* ----- PRIVATE ----- */

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
