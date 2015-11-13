angular.module('fridgeListApp').controller('MainCtrl', MainCtrl);

function MainCtrl($scope, $mdBottomSheet) {
  var vm = this;

  vm.openCreateSheet = openCreateSheet;

  function openCreateSheet() {
    $mdBottomSheet.show({
      templateUrl: 'client/create/create-action-sheet/create-action-sheet.html',
      controller: 'CreateActionSheetCtrl',
      controllerAs: 'action'
    });
  }
}
