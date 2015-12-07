angular
  .module('fridgeListApp')
  .factory('createService', CreateService);

function CreateService($mdDialog) {

  return {
    openCreateModal: openCreateModal,
    openCreateItemModal: openCreateItemModal,
    openCreateListModal: openCreateListModal
  };

  /* ----- PUBLIC ----- */

  function openCreateModal(modal) {
    if (modal === 'list') {
      openCreateListModal();
    } else if (modal === 'item') {
      openCreateItemModal();
    }
  }

  function openCreateItemModal() {
    $mdDialog.show({
      templateUrl: 'client/create/create-modal/create-item-modal.html',
      controller: 'CreateItemCtrl',
      controllerAs: 'create'
    });
  }

  function openCreateListModal() {
    $mdDialog.show({
      templateUrl: 'client/create/create-modal/create-list-modal.html',
      controller: 'CreateListCtrl',
      controllerAs: 'create'
    });
  }

}
