angular.module('fridgeListApp').controller('ListInfoCtrl', ListInfoCtrl);

function ListInfoCtrl($scope, $rootScope, $meteor, $filter, $mdDialog, selectedList) {
  var vm = this;

  init();

  vm.addSubscriber = addSubscriber;
  vm.close = $mdDialog.hide;
  vm.save = save;
  vm.unsubscribe = unsubscribe;

  /* ----- PUBLIC ----- */

  function addSubscriber(email) {
    var user = Meteor.users.findOne({ 'emails.address': email });
    if (user) {
      vm.list.subscribers = vm.list.subscribers || [];
      vm.list.subscribers.push(user._id);
      vm.listSubscribers.push(user);
    }
    vm.emailInput = undefined;
  }

  function save() {
    vm.list.save().then($mdDialog.hide);
  }

  function unsubscribe(index) {
    vm.list.subscribers.splice(index, 1);
    vm.listSubscribers.splice(index, 1);
  }

  /* ----- PRIVATE ----- */

  function init() {
    vm.list = $scope.$meteorObject(Inventories, selectedList._id, false);
    $scope.$meteorSubscribe('users')
      .then(loadOwnerData)
      .then(loadSubscribersData);
  }

  function loadOwnerData() {
    vm.listOwner = Meteor.users.findOne(selectedList.owner);
  }

  function loadSubscribersData() {
    vm.listSubscribers = [];
    if (Array.isArray(selectedList.subscribers)) {
      let users = Meteor.users.find({_id: {$in: selectedList.subscribers} });
      users.forEach(user => vm.listSubscribers.push(user));
    }
  }
}
