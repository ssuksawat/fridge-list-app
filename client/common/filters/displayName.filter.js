angular.module('fridgeListApp').filter('displayName', DisplayNameFilter);

function DisplayNameFilter() {
  return function (user) {
    if (!user) return;
    if (user.profile && user.profile.name) return user.profile.name;
  };
}
