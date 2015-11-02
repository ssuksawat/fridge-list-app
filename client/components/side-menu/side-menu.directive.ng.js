angular.module('fridgeListApp').directive('flSideMenu', SideMenu);

function SideMenu($rootScope) {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'client/components/side-menu/side-menu.ng.html',
    controller: SideMenuCtrl,
    controllerAs: 'menu'
  };

  function SideMenuCtrl($scope) {
    var vm = this;

    vm.lists = $scope.$meteorCollection(() => {
      return Inventories.find({});
    }, false);
    $scope.$meteorSubscribe('inventories');
  }
}
