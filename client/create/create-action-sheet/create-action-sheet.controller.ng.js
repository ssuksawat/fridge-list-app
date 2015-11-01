angular.module('fridgeListApp').controller('CreateActionSheetCtrl', CreateActionSheetCtrl);

function CreateActionSheetCtrl($mdBottomSheet) {
  var vm = this;

  vm.select = select;
  vm.items = [
    {name: 'New List', icon: 'assignment', action: openCreateListModal},
    {name: 'New Item', icon: 'add_box', action: openCreateItemModal},
    {name: 'Scan Item', icon: 'photo_camera', action: openScanItemModal, disabled: true}
  ];

  function select(index) {
    vm.items[index].action();
    $mdBottomSheet.hide();
  }

  function openCreateListModal() {

  }

  function openCreateItemModal() {

  }

  function openScanItemModal() {

  }
}
