angular.module('fridgeListApp').directive('flSideMenu', SideMenu);

function SideMenu($rootScope) {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'client/components/side-menu/side-menu.ng.html',
    controller: SideMenuCtrl,
    controllerAs: 'menu'
  };

  function SideMenuCtrl($meteor) {
    var vm = this;

    vm.lists = $meteor.collection(function () {
      return Inventories.find({});
    });
    $meteor.subscribe('inventories');
  }
}
