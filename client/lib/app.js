angular.module('fridgeListApp', [
  'angular-meteor',
  'ui.router',
  'ngMaterial',
  'ngSanitize'
]);

function onReady() {
  angular.bootstrap(document, ['fridgeListApp']);
}

if (Meteor.isCordova)
  angular.element(document).on("deviceready", onReady);
else
  angular.element(document).ready(onReady);
