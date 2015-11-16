angular
  .module('fridgeListApp')
  .config(InventoriesRoutes);

function InventoriesRoutes($stateProvider) {
  $stateProvider
    .state('main.inventories', {
      url: '/inventories',
      templateUrl: 'client/inventory/views/inventory-list.html',
      controller: 'InventoryListCtrl',
      controllerAs: 'inventoryList'
    })
    .state('main.inventoryItems', {
      url: '/inventories/:listId',
      templateUrl: 'client/inventory/views/inventory-items.html',
      controller: 'InventoryItemsCtrl',
      controllerAs: 'inventoryItems'
    });
}
