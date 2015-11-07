Meteor.publish('inventories', function () {
  return Inventories.find({
    $or: [
      {owner: this.userId},
      {subscribers: {$elemMatch: {_id: this.userId}}}
  ]}, {sort: {title: 1}});
});
