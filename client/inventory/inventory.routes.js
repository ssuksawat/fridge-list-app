angular
  .module('fridgeListApp')
  .config(InventoriesRoutes);

function InventoriesRoutes($stateProvider) {
  $stateProvider
    .state('main.inventories', {
      url: '/inventories',
      templateUrl: 'client/inventory/inventory-lists/inventory-lists.html',
      controller: 'InventoryListsCtrl',
      controllerAs: 'inventory'
    })
    .state('main.inventoryItems', {
      url: '/inventories/:listId',
      templateUrl: 'client/inventory/inventory-items/inventory-items.html',
      controller: 'InventoryItemsCtrl',
      controllerAs: 'inventory'
    });
}
