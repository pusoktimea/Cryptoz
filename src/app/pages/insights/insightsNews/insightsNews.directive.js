(function () {
  'use strict';

  angular.module('BlurAdmin.pages.insights')
      .directive('insightsNews', insightsNews);

  /** @ngInject */
  function insightsNews() {
    return {
      restrict: 'E',
      controller: 'newsCtrl',
      templateUrl: 'app/pages/insights/insightsNews/insightsNews.html'
    };
  }
})();