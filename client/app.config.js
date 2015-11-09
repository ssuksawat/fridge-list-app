angular.module('fridgeListApp')
    .config(AppTheme);

function AppTheme($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('grey');
}
