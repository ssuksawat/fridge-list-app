angular.module('fridgeListApp').directive('flSideMenu', SideMenu);

function SideMenu($rootScope) {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'client/components/side-menu/side-menu.html',
    controller: SideMenuCtrl,
    controllerAs: 'menu'
  };

  function SideMenuCtrl($rootScope, $scope, $state, $stateParams, $mdSidenav) {
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
        return $state.current.name === id;
      }
    }

    /* ----- PRIVATE ----- */

    function init() {
      vm.menus = [
        { label: 'Home', sref: 'main.inventories', icon: 'home' },
        { label: 'Shopping List', sref: 'cart', icon: 'shopping_cart', disabled: true }
      ];
      vm.lists = $scope.$meteorCollection(Inventories, false);
    }

    function closeMenu() {
      $mdSidenav('sideMenu').close();
    }

  }
}
