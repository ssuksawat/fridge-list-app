angular
  .module('fridgeListApp')
  .config(InventoriesRoutes);

function InventoriesRoutes($stateProvider) {
  $stateProvider
    .state('main.inventories', {
      url: '/inventories',
      templateUrl: 'client/inventory/views/inventory-list.ng.html',
      controller: 'InventoryListCtrl',
      controllerAs: 'inventory'
    })
    .state('main.inventoryDetails', {
      url: '/inventories/:inventoryId',
      templateUrl: 'client/inventory/views/inventory-details.ng.html',
      controller: 'InventoryDetailsCtrl',
      controllerAs: 'inventory'
    });
}
