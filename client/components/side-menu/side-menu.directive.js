angular.module('fridgeListApp').directive('flSideMenu', SideMenu);

function SideMenu($rootScope) {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'client/components/side-menu/side-menu.html',
    controller: SideMenuCtrl,
    controllerAs: 'menu'
  };

  function SideMenuCtrl($rootScope, $scope, $stateParams, $mdSidenav) {
    var vm = this;

    init();

    vm.isActive = isActive;

    /* ----- LISTENER ----- */

    $rootScope.$on('$stateChangeStart', closeMenu);

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
      vm.lists = $scope.$meteorCollection(Inventories, false);
    }

    function closeMenu() {
      $mdSidenav('sideMenu').close();
    }

  }
}
