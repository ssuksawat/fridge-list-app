angular.module('fridgeListApp').controller('CreateItemCtrl', CreateItemCtrl);

function CreateItemCtrl($rootScope, $scope, $stateParams, $meteor, $mdDialog) {
  var vm = this;
  var items;

  init();

  vm.create = create;
  vm.cancel = $mdDialog.hide;

  /* ----- PUBLIC ----- */

  function create() {
    $meteor.call('addItem', vm.newItem);
    $mdDialog.hide();
  }

  /* ----- PRIVATE ----- */

  function init() {
    vm.lists = $scope.$meteorCollection(Inventories, false);
    vm.newItem = { inventoryId: $stateParams.listId };
    items = $scope.$meteorCollection(Items, false);
  }
}
