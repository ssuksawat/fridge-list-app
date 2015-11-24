angular.module('fridgeListApp').directive('flTopToolbar', TopToolbar);

function TopToolbar() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'client/components/top-toolbar/top-toolbar.html',
    controller: TopToolbarCtrl,
    controllerAs: 'toolbar'
  };

  function TopToolbarCtrl($rootScope, $state, $stateParams, $mdSidenav) {
    var vm = this;

    init();

    vm.toggleMenu = () => $mdSidenav('sideMenu').toggle();

    /* ----- EVENT LISTENERS ----- */

    $rootScope.$on('$stateChangeSuccess', setCurrentLocation);

    /* ----- PRIVATE ----- */

    function init() {
      vm.currentLocation = getLocation();
    }

    function getLocation() {
      switch($state.current.name) {
        case 'main.inventories':
          return 'My Inventories';
        case 'main.inventoryItems':
          var currentList = Inventories.findOne($stateParams.listId);
          return currentList.title;
        case 'settings':
          return 'Settings';
        default:
          return '';
      }
    }

    function setCurrentLocation() {
      vm.currentLocation = getLocation();
    }

  }
}
