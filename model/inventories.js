Inventories = new Mongo.Collection('inventories');

Inventories.allow({
  insert: function (userId, inventory) {
    return userId && inventory.owner === userId;
  },
  update: function (userId, inventory) {
    return userId && (inventory.owner === userId || _.findWhere(inventory.subscribers, {_id: userId}));
  },
  remove: function (userId, inventory) {
    return userId && inventory.owner === userId;
  }
});

Inventories.deny({
  update: function (userId, inventory, fields) {
    return _.contains(fields, 'owner');
  }
});

Meteor.methods({
  removeList: function (inventoryId) {
    check(inventoryId, String);
    var inventory = Inventories.findOne(inventoryId);
    if (inventory && inventory.items) {
      //remove each item in the list
      _.each(inventory.items, (itemId) => {
        Items.remove(itemId);
      });
      //remove the list
      Inventories.remove(inventoryId);
    }
  }
});
