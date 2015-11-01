angular.module('fridgeListApp').directive('flSideMenu', SideMenu);

function SideMenu($rootScope) {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'client/components/side-menu/side-menu.ng.html',
    controller: SideMenuCtrl,
    controllerAs: 'menu'
  };

  function SideMenuCtrl() {
    var vm = this;

    vm.displayName = getDisplayName($rootScope.currentUser);

    function getDisplayName(user) {
      if (user.profile && user.profile.name) {
        return user.profile.name;
      } else {
        return user.emails[0].address;
      }
    }
  }
}
