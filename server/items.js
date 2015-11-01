Meteor.publish('items-by-inventory', function (inventoryId) {
  return Items.find({inventoryId: inventoryId});
});

Meteor.publish('shopping-cart', function () {
  return Items.find({$and: [
    {cart: true},
    {cartQty: {$exist: true}}
  ]});
});
