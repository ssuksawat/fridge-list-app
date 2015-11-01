Meteor.publish('inventories', function () {
  return Inventories.find({
    $or: [
      {owner: this.userId},
      {subscribers: this.userId}
  ]});
});
