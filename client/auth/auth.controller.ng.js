angular.module('fridgeListApp').controller('AuthCtrl', AuthCtrl);

function AuthCtrl($meteor, $state) {
  var vm = this;

  vm.credentials = {
    email: '',
    password: '',
    profile: {}
  };
  vm.error = '';

  vm.login = () => {
    $meteor
      .loginWithPassword(vm.credentials.email, vm.credentials.password)
      .then(loginSuccess, loginError);

    function loginSuccess() {
      $state.go('main.inventories');
    }
    function loginError(err) {
      vm.error = 'Your email & password combination does not match. Please try again.';
    }
  };

  vm.register = () => {
    $meteor.createUser(vm.credentials).then(registerSuccess, registerError);

    function registerSuccess() {
      $state.go('main.inventories');
    }
    function registerError(err) {
      vm.error = 'Registration error - ' + err;
    }
  };
}
