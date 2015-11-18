angular
  .module('fridgeListApp')
  .config(InventoriesRoutes);

function InventoriesRoutes($stateProvider) {
  $stateProvider
    .state('main.inventories', {
      url: '/inventories',
      templateUrl: 'client/inventory/browse-lists/browse-lists.html',
      controller: 'BrowseListsCtrl',
      controllerAs: 'browse'
    })
    .state('main.inventoryItems', {
      url: '/inventories/:listId',
      templateUrl: 'client/inventory/browse-items/browse-items.html',
      controller: 'BrowseItemsCtrl',
      controllerAs: 'browse'
    });
}
