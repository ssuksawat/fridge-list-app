angular.module('fridgeListApp').controller('BrowseItemsCtrl', BrowseItemsCtrl);

function BrowseItemsCtrl($scope, $stateParams) {
  var vm = this;

  init();

  vm.edit = edit;
  vm.remove = remove;

  /* ----- PUBLIC ----- */

  function edit() {

  }

  function remove($index) {
    var targetId = vm.items[$index]._id;
    vm.items.remove(targetId);
  }

  /* ----- PRIVATE ----- */

  function init() {
    vm.items = $scope.$meteorCollection(Items, false);
    $scope.$meteorSubscribe('items-by-inventory', $stateParams.listId);
  }
}
