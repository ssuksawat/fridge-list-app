angular.module('fridgeListApp').controller('InventoryListCtrl', InventoryListCtrl);

function InventoryListCtrl() {
  var vm = this;

  vm.lists = [
    {
      name: 'Kitchen',
      description: 'kitchen supplies',
      total: 25,
      low: 3
    },
    {
      name: 'Cleaning',
      description: 'cleaning supplies',
      total: 10,
      low: 0
    },
    {
      name: 'Office',
      description: 'office supplies',
      total: 13,
      low: 1
    }
  ];
}
