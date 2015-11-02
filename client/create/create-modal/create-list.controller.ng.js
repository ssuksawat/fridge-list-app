angular.module('fridgeListApp').controller('CreateListCtrl', CreateListCtrl);

function CreateListCtrl($rootScope, $scope, $mdDialog) {
  var vm = this;
  var lists;

  init();

  vm.create = create;
  vm.cancel = cancel;

  /* ----- PUBLIC ----- */

  function create(isValid) {
    if (isValid) {
      lists.save(vm.newList);
      $mdDialog.hide();
    }
  }

  function cancel() {
    $mdDialog.hide();
  }

  /* ----- PRIVATE ----- */

  function init() {
    vm.newList = { owner: $rootScope.currentUser._id };

    lists = $scope.$meteorCollection(() => {
      return Inventories.find({});
    }, false);
    $scope.$meteorSubscribe('inventories');
  }
}
