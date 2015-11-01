Items = new Mongo.Collection('items');

Items.allow({
  insert: function (userId, item) {
    var inventory = Inventories.findOne(item.inventoryId);
    return userId && inventory;
  },
  update: function (userId, item) {
    var inventory = Inventories.findOne(item.inventoryId);
    return userId && inventory;
  },
  remove: function (userId, item) {
    var inventory = Inventories.findOne(item.inventoryId);
    return userId && inventory;
  }
});
