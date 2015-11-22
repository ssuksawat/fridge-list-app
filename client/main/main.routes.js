angular
  .module('fridgeListApp')
  .config(MainRoutes);

function MainRoutes($stateProvider) {
  $stateProvider
    .state('main', {
      abstact: true,
      templateUrl: 'client/main/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main',
      resolve: {
        'currentUser': ['$meteor', resolveCurrentUser],
        'inventories': ['$meteor', resolveInventories]
      }
    });
}

function resolveCurrentUser($meteor) {
  return $meteor.requireUser();
}

function resolveInventories($meteor) {
  return $meteor.subscribe('inventories');

}
