
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.purchase')
      .controller('purchaseSumCtrl', purchaseSumCtrl);

  /** @ngInject */
  function purchaseSumCtrl($scope, $timeout, baConfig, baUtil) {
    var pieColor = baUtil.hexToRGB(baConfig.colors.defaultText, 0.2);
    $scope.charts = [{
      color: pieColor,
      mh: '500 mH/s',
      date: '11-20 November',
      currency: 'Bitcoin',
      icon: 'server',
    }, {
      color: pieColor,
      mh: '500 mH/s',
      date: '11-20 November',
      currency: 'Litecoin',
      icon: 'server',
    }, {
      color: pieColor,
      mh: '500 mH/s',
      date: '11-20 November',
      currency: 'Ethereum',
      icon: 'server',
    }, {
      color: pieColor,
      mh: '500 mH/s',
      date: '11-20 November',
      currency: 'Dogecoin',
      icon: 'server',
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