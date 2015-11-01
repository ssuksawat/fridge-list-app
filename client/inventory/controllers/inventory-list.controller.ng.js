angular.module('fridgeListApp').controller('InventoryListCtrl', InventoryListCtrl);

function InventoryListCtrl() {
  var vm = this;

  vm.lists = [
    {
      name: 'Kitchen',
      description: 'kitchen supplies',
      total: 25
    },
    {
      name: 'Cleaning',
      description: 'cleaning supplies',
      total: 10
    },
    {
      name: 'Office',
      // description: 'office supplies',
      total: 13
    }
  ];
}
