angular.module('BlurAdmin.pages.payments')
      .controller('WalletsCtrl', WalletsCtrl);

  /** @ngInject */
  function WalletsCtrl(walletModal) {
    var vm = this;

    vm.walletData = [
      {
        id: 1,
        currency: 'Bitcoin',
        wallet_address: 't1SMavKTE9xoZgWQfQP5timVnXQVnsBFn58',
        paid_to_date: '0.12552',
        unpaid_balance: '0.2345',
        total_coins: '2345'
      },
      {
        id: 2,
        currency: 'Ethereum',
        wallet_address: 't1SMavKTE9xoZgWQfQP5timVnXQVnsBFn58',
        paid_to_date: '0.2345',
        unpaid_balance: '0.234366777',
        total_coins: '23436'
      },
      {
        id: 3,
        currency: 'Litecoin',
        wallet_address: 't1SMavKTE9xoZgWQfQP5timVnXQVnsBFn58',
        paid_to_date: '0.23456',
        unpaid_balance: '0.2343',
        total_coins: '0.234345'
      },
    ];

    vm.showWalletModal = function() {
      walletModal.open();
    };

  };
