angular.module('BlurAdmin.pages.payments')
      .controller('PaymentsCtrl', PaymentsCtrl);

  /** @ngInject */
  function PaymentsCtrl() {
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

    vm.invoiceData = [
      {
        no: 450,
        currency: 'Bitcoin',
        price: '659',
        rate_per_coin: '1234',
        hash: 't1SMavKTE9xoZgWQfQP5timVnXQVnsBFn58',
        status: 'Paid'
      },
       {
        no: 451,
        currency: 'Litecoin',
        price: '87',
        rate_per_coin: '1234',
        hash: 't1SMavKTE9xoZgWQfQP5timVnXQVnsBFn58',
        status: 'Paid'
      },
       {
        no: 452,
        currency: 'Bitcoin Gold',
        price: '456',
        rate_per_coin: '1234',
        hash: 't1SMavKTE9xoZgWQfQP5timVnXQVnsBFn58',
        status: 'Pending'
      },
       {
        no: 453,
        currency: 'Bitcoin Gold',
        price: '132',
        rate_per_coin: '1234',
        hash: 't1SMavKTE9xoZgWQfQP5timVnXQVnsBFn58',
        status: 'Paid'
      },
       {
        no: 454,
        currency: 'Bitcoin Cash',
        price: '234',
        rate_per_coin: '1234',
        hash: 't1SMavKTE9xoZgWQfQP5timVnXQVnsBFn58',
        status: 'Unpaid'
      },
       {
        no: 455,
        currency: 'Litecoin',
        price: '245',
        rate_per_coin: '1234',
        hash: 't1SMavKTE9xoZgWQfQP5timVnXQVnsBFn58',
        status: 'Paid'
      },
       {
        no: 456,
        currency: 'Ethereum',
        price: '974',
        rate_per_coin: '1234',
        hash: 't1SMavKTE9xoZgWQfQP5timVnXQVnsBFn58',
        status: 'Paid'
      },
       {
        no: 457,
        currency: 'Bitcoin Gold',
        price: '754',
        rate_per_coin: '1234',
        hash: 't1SMavKTE9xoZgWQfQP5timVnXQVnsBFn58',
        status: 'Paid'
      },
       {
        no: 460,
        currency: 'Litecoin',
        price: '246',
        rate_per_coin: '1234',
        hash: 't1SMavKTE9xoZgWQfQP5timVnXQVnsBFn58',
        status: 'Paid'
      },
       {
        no: 461,
        currency: 'Dogecoin',
        price: '863',
        rate_per_coin: '1234',
        hash: 't1SMavKTE9xoZgWQfQP5timVnXQVnsBFn58',
        status: 'Paid'
      },
       {
        no: 462,
        currency: 'Litecoin',
        price: '456',
        rate_per_coin: '1234',
        hash: 't1SMavKTE9xoZgWQfQP5timVnXQVnsBFn58',
        status: 'Paid'
      },
       {
        no: 463,
        currency: 'Bitcoin',
        price: '658',
        rate_per_coin: '1234',
        hash: 't1SMavKTE9xoZgWQfQP5timVnXQVnsBFn58',
        status: 'Paid'
      },
       {
        no: 464,
        currency: 'Bitcoin',
        price: '234',
        rate_per_coin: '1234',
        hash: 't1SMavKTE9xoZgWQfQP5timVnXQVnsBFn58',
        status: 'Paid'
      },
       {
        no: 465,
        currency: 'Bitcoin Gold',
        price: '345',
        rate_per_coin: '1234',
        hash: 't1SMavKTE9xoZgWQfQP5timVnXQVnsBFn58',
        status: 'Paid'
      },
       {
        no: 466,
        currency: 'Ethereum',
        price: '865',
        rate_per_coin: '1234',
        hash: 't1SMavKTE9xoZgWQfQP5timVnXQVnsBFn58',
        status: 'Paid'
      },
       {
        no: 467,
        currency: 'Litecoin',
        price: '456',
        rate_per_coin: '1234',
        hash: 't1SMavKTE9xoZgWQfQP5timVnXQVnsBFn58',
        status: 'Paid'
      },
       {
        no: 470,
        currency: 'Dogecoin',
        price: '657',
        rate_per_coin: '1234',
        hash: 't1SMavKTE9xoZgWQfQP5timVnXQVnsBFn58',
        status: 'Paid'
      },
       {
        no: 471,
        currency: 'Bitcoin Cash',
        price: '123',
        rate_per_coin: '1234',
        hash: 't1SMavKTE9xoZgWQfQP5timVnXQVnsBFn58',
        status: 'Paid'
      },
       {
        no: 472,
        currency: 'Ethereum',
        price: '224',
        rate_per_coin: '1234',
        hash: 't1SMavKTE9xoZgWQfQP5timVnXQVnsBFn58',
        status: 'Paid'
      },
       {
        no: 473,
        currency: 'Litecoin',
        price: '7654',
        rate_per_coin: '1234',
        hash: 't1SMavKTE9xoZgWQfQP5timVnXQVnsBFn58',
        status: 'Paid'
      },
       {
        no: 474,
        currency: 'Ethereum',
        price: '432',
        rate_per_coin: '1234',
        hash: 't1SMavKTE9xoZgWQfQP5timVnXQVnsBFn58',
        status: 'Paid'
      },
      
    ];

  };
