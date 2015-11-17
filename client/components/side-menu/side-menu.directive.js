angular.module('fridgeListApp').directive('flSideMenu', SideMenu);

function SideMenu($rootScope) {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'client/components/side-menu/side-menu.html',
    controller: SideMenuCtrl,
    controllerAs: 'menu'
  };

  function SideMenuCtrl($scope, $stateParams) {
    var vm = this;

    init();

    vm.isActive = isActive;

    /* ----- PUBLIC ----- */

    function isActive(id) {
      if ($stateParams.listId) {
        return $stateParams.listId === id;
      } else {
        return id === 'myinventories';
      }
    }

    /* ----- PRIVATE ----- */

    function init() {
      vm.lists = $scope.$meteorCollection(Inventories, false).subscribe('inventories');
    }

  }
}
