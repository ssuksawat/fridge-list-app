Inventories = new Mongo.Collection('inventories');

Inventories.allow({
  insert: function (userId, inventory) {
    return userId && inventory.owner === userId;
  },
  update: function (userId, inventory) {
    return userId && (inventory.owner === userId || _.contains(inventory.subscribers, userId));
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
