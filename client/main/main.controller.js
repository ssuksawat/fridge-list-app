angular.module('fridgeListApp').controller('MainCtrl', MainCtrl);

function MainCtrl($scope, $rootScope, $mdBottomSheet, $mdMedia) {
  const LOADING = 'indeterminate';  //md-progress type
  var vm = this;

  init();

  $rootScope.$mdMedia = $mdMedia;
  vm.openCreateSheet = openCreateSheet;

  /* ----- PUBLIC ----- */

  function openCreateSheet() {
    $mdBottomSheet.show({
      templateUrl: 'client/create/create-action-sheet/create-action-sheet.html',
      controller: 'CreateActionSheetCtrl',
      controllerAs: 'action'
    });
  }

  /* ----- PRIVATE ----- */

  function init() {
    startLoading();
    $scope.$meteorSubscribe('inventories').finally(stopLoading);
  }

  function startLoading() {
    vm.loading = LOADING;
  }

  function stopLoading() {
    vm.loading = undefined;
  }

}
