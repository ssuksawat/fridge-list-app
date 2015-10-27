Meteor.publish('inventories', function () {
  return Inventories.find();
});
