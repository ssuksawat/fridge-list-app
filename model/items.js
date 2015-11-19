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

Meteor.methods({
  addItem: function (item) {
    check(item, Object);
    Items.insert(item, function (err, itemId) {
      if (!err) {
        Inventories.update(item.inventoryId, { $addToSet: { items: itemId } });
      }
    });
  },
  removeItem: function (itemId, inventoryId) {
    check(itemId, String);
    check(inventoryId, String);
    Items.remove(itemId, function (err) {
      if (!err) {
        Inventories.update(inventoryId, { $pull: { items: itemId } });
      }
    });
  }
});
