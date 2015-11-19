angular.module('fridgeListApp').controller('CreateItemCtrl', CreateItemCtrl);

function CreateItemCtrl($rootScope, $scope, $stateParams, $mdDialog) {
  var vm = this;
  var items;

  init();

  vm.create = create;
  vm.cancel = $mdDialog.hide;

  /* ----- PUBLIC ----- */

  function create(isValid) {
    if (isValid) {
      items.save(vm.newItem);
      $mdDialog.hide();
    }
  }

  /* ----- PRIVATE ----- */

  function init() {
    vm.newItem = { inventoryId: $stateParams.listId };
    items = $scope.$meteorCollection(Items, false);
  }
}
