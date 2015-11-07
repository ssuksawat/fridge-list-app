'use strict';

angular.module('fridgeListApp').directive('createFab', CreateFAB);

function CreateFAB($timeout) {
  return {
    restrict: 'E',
    templateUrl: 'client/components/fab-buttons/create-fab/create-fab.ng.html',
    link: CreateFabLink
  };

  function CreateFabLink(_, $element) {
    // Entrance animation effect
    const ANIMATE = 'js-scale-in js-slide-in';
    let $fab = $element.find('.create-fab');
    $fab.addClass(ANIMATE);
    $timeout(() => $fab.addClass('js-entering'));
    $timeout(() => { $fab.removeClass(`${ANIMATE} js-entering`); }, 500);
  }
}
