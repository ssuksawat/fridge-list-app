angular.module('fridgeListApp').directive('flTopToolbar', TopToolbar);

function TopToolbar() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'client/components/top-toolbar/top-toolbar.ng.html',
    controller: TopToolbarCtrl,
    controllerAs: 'toolbar'
  };

  function TopToolbarCtrl($mdSidenav) {
    var vm = this;

    vm.toggleMenu = function() {
      $mdSidenav('sideMenu').toggle().then(() => {console.log('sideMenu toggled');});
    };
  }
}
