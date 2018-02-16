
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
      currency: 'Bitcoin',
    }, {
      color: pieColor,
      mh: '500 mH/s',
      currency: 'Ethereum',
    }, {
      color: pieColor,
      mh: '500 mH/s',
      currency: 'Litecoin',
    }, {
      color: pieColor,
      mh: '500 mH/s',
      currency: 'Dash',
    }, {
      color: pieColor,
      mh: '500 mH/s',
      currency: 'SiaCoin',
    }
    ];
  }
})();