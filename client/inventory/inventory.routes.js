angular
  .module('fridgeListApp')
  .config(InventoriesRoutes);

function InventoriesRoutes($stateProvider) {
  $stateProvider
    .state('main.inventories', {
      url: '/inventories',
      templateUrl: 'client/inventory/inventory.html',
      controller: 'InventoryCtrl',
      controllerAs: 'inventory'
    })
    .state('main.inventories.items', {
      url: '/inventories/:listId',
      templateUrl: 'client/inventory/inventory-items/inventory-items.html',
      controller: 'InventoryItemsCtrl',
      controllerAs: 'inventoryItems'
    });
    // .state('main.inventoryItems', {
    //   url: '/inventories/:listId',
    //   templateUrl: 'client/inventory/inventory-items/inventory-items.html',
    //   controller: 'InventoryItemsCtrl',
    //   controllerAs: 'inventory'
    // });
}
