angular.module('BlurAdmin.pages.overview')
      .controller('overviewCtrl', overviewCtrl);

  /** @ngInject */
  function overviewCtrl($location, $timeout, $window) {
    var vm = this;

    vm.tableData = [
      {
        id: 1,
        currency: 'Bitcoin',
        price: '2000.45',
        change_percent: '1.45',
        change_dollar: '4.56',
        price_graph: '',
        market_cap: '5.3B',
        coins_circulating: '15M'
      },
      {
        id: 2,
        currency: 'Ethereum',
        price: '456.45',
        change_percent: '1.45',
        change_dollar: '4.56',
        price_graph: '',
        market_cap: '2.4B',
        coins_circulating: '5.6M'
      },
      {
        id: 3,
        currency: 'Litecoin',
        price: '557.56',
        change_percent: '1.45',
        change_dollar: '4.56',
        price_graph: '',
        market_cap: '1.2B',
        coins_circulating: '3.2M'
      },
    ];

    vm.lineData = [
      {y: "2006", a: 100},
      {y: "2007", a: 75},
      {y: "2008", a: 50},
      {y: "2009", a: 75},
      {y: "2010", a: 50},
      {y: "2011", a: 75},
      {y: "2012", a: 100}
    ];

  };
