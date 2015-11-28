angular.module('fridgeListApp').filter('email', EmailFilter);

function EmailFilter() {
  return function (user) {
    if (!user) return;
    if (user.emails) return user.emails[0].address;
  };
}
