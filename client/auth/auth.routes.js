angular.module('fridgeListApp').config(AuthRoute);

function AuthRoute($stateProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'client/auth/views/login.html',
      controller: 'AuthCtrl',
      controllerAs: 'auth'
    }).state('signup', {
      url: '/signup',
      templateUrl: 'client/auth/views/signup.html',
      controller: 'AuthCtrl',
      controllerAs: 'auth'
    }).state('logout', {
      url: '/logout',
      resolve: {
        "logout": function($meteor, $state) {
          return $meteor.logout().then(function(){
            $state.go('login');
          }, function(err){
            console.log('logout error - ', err);
          });
        }
      }
    });
}
