
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.overview')
      .directive('news', news);

  /** @ngInject */
  function news() {
    return {
      restrict: 'E',
      controller: 'newsCtrl',
      templateUrl: 'app/pages/overview/news/news.html'
    };
  }
})();