angular.module('fridgeListApp').controller('CreateListCtrl', CreateListCtrl);

function CreateListCtrl($rootScope, $scope, $mdDialog) {
  var vm = this;
  var lists;

  init();

  vm.create = create;
  vm.cancel = $mdDialog.hide;

  /* ----- PUBLIC ----- */

  function create(isValid) {
    if (isValid) {
      lists.save(vm.newList);
      $mdDialog.hide();
    }
  }

  /* ----- PRIVATE ----- */

  function init() {
    vm.newList = { owner: $rootScope.currentUser._id };
    lists = $scope.$meteorCollection(Inventories, false);
  }
}
