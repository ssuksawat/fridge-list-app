angular.module('fridgeListApp').controller('CreateActionSheetCtrl', CreateActionSheetCtrl);

function CreateActionSheetCtrl($stateParams, $mdBottomSheet, createService) {
  var vm = this;

  init();

  vm.select = select;

  /* ----- PUBLIC ----- */

  function openScanItemModal() {

  }

  function select(index) {
    vm.items[index].action();
    $mdBottomSheet.hide();
  }

  /* ----- PRIVATE ----- */

  function init() {
    vm.items = [
      {name: 'New List', icon: 'assignment', action: createService.openCreateListModal},
      {name: 'New Item', icon: 'add_box', action: createService.openCreateItemModal},
      {name: 'Scan Item', icon: 'photo_camera', action: openScanItemModal, disabled: true}
    ];
  }

}
