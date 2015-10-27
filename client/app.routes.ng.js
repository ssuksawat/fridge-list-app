angular
  .module("fridgeListApp")
  .config(RoutesConfig)
  .run(AuthInterceptor);

function RoutesConfig($urlRouterProvider, $stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise("/inventories");
}

function AuthInterceptor($rootScope, $state) {
  $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
    if (error === 'AUTH_REQUIRED') {
      $state.go('login');
    }
  });
}
