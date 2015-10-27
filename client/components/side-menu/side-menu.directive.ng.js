angular.module('fridgeListApp').directive('flSideMenu', SideMenu);

function SideMenu() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'client/components/side-menu/side-menu.ng.html',
    controller: SideMenuCtrl,
    controllerAs: 'menu'
  };

  function SideMenuCtrl() {
    var vm = this;
  }
}
