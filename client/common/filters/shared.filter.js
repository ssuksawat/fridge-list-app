angular.module('fridgeListApp').filter('shared', SharedFilter);

function SharedFilter() {
  return function (lists, isShared) {
    if (!lists || !Array.isArray(lists)) return;

    if (isShared === 'true') {
      return lists.filter(hasSubscribers);
    } else {
      return lists.filter(hasNoSubscriber);
    }
  };

  function hasNoSubscriber(list) {
    return !(list.subscribers && list.subscribers.length > 0);
  }

  function hasSubscribers(list) {
    return list.subscribers && list.subscribers.length > 0;
  }
}
