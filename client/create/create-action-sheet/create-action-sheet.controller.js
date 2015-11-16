angular.module('fridgeListApp').controller('CreateActionSheetCtrl', CreateActionSheetCtrl);

function CreateActionSheetCtrl($stateParams, $mdBottomSheet, $mdDialog) {
  var vm = this;

  init();

  vm.select = select;

  /* ----- PUBLIC ----- */

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

  function openScanItemModal() {

  }

  function select(index) {
    vm.items[index].action();
    $mdBottomSheet.hide();
  }

  /* ----- PRIVATE ----- */

  function init() {
    vm.items = [
      {name: 'New List', icon: 'assignment', action: openCreateListModal, disabled: $stateParams.listId},
      {name: 'New Item', icon: 'add_box', action: openCreateItemModal, disabled: !$stateParams.listId},
      {name: 'Scan Item', icon: 'photo_camera', action: openScanItemModal, disabled: true}
    ];
  }

}
