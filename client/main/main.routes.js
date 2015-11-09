angular.module('fridgeListApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        abstact: true,
        templateUrl: 'client/main/main.ng.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        resolve: {
          "currentUser": ["$meteor", function($meteor){
            return $meteor.requireUser();
          }]
        }
      });
  });
