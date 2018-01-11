
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.overview')
      .controller('overviewSumCtrl', overviewSumCtrl);

  /** @ngInject */
  function overviewSumCtrl($scope, $timeout, baConfig, baUtil) {
    var pieColor = baUtil.hexToRGB(baConfig.colors.defaultText, 0.2);
    $scope.charts = [{
      description: 'Total Profit',
      exact_description: '+$346',
      sum: '$9.587',
      icon: 'bar-chart',
    }, {
      description: 'Average Performance',
      exact_description: '-2',
      sum: '98%',
      icon: 'bar-chart',
    }, {
      description: 'Average Profit',
      exact_description: '+$3.11',
      sum: '$431.51',
      icon: 'line-chart',
      color: 'f3b053'
    }, {
      description: 'Uptime',
      exact_description: '+3.55%',
      sum: '96%',
      icon: 'line-chart',
      color: 'f3b053'
    }
    ];

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    function loadPieCharts() {
      $('.refresh-data').on('click', function () {
        updatePieCharts();
      });
    }

    function updatePieCharts() {
      $('.pie-charts .chart').each(function(index, chart) {
        $(chart).data('easyPieChart').update(getRandomArbitrary(55, 90));
      });
    }

    $timeout(function () {
      loadPieCharts();
      updatePieCharts();
    }, 1000);
  }
})();