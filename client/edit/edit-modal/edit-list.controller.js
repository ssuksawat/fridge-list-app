angular.module('fridgeListApp').controller('EditListCtrl', EditListCtrl);

function EditListCtrl($scope, $rootScope, $meteor, $filter, $mdDialog, selectedList) {
  var vm = this;

  init();

  vm.addSubscriber = addSubscriber;
  vm.cancel = $mdDialog.hide;
  vm.save = save;

  /* ----- PUBLIC ----- */

  function addSubscriber($chip) {
    vm.list.subscribers = vm.list.subscribers || [];
    if ($chip && $chip._id) {
      vm.list.subscribers.push({
        _id: $chip._id,
        displayName: $filter('displayName')($chip)
      });
    }
  }

  function save() {
    vm.list.save().then($mdDialog.hide);
  }

  /* ----- PRIVATE ----- */

  function init() {
    vm.list = $scope.$meteorObject(Inventories, selectedList._id, false);

    // Reactive user filter
    $meteor.autorun($scope, () => {
      $scope.$meteorSubscribe('users', $scope.getReactively('edit.searchText')).then(() => {
        vm.users = $scope.$meteorCollection(() => {
          return Meteor.users.find({_id: {$ne: $rootScope.currentUser._id}});
        }, false);
      });
    });
  }
}
