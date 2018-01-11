
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.payments')
    .controller('paymentChartCtrl', paymentChartCtrl);

  /** @ngInject */
  function paymentChartCtrl($element, baConfig, layoutPaths) {
    var layoutColors = baConfig.colors;
    var id = $element[0].getAttribute('id');
    var chart = AmCharts.makeChart(id, {
      "type": "serial",
      "theme": "none",
      "color": layoutColors.defaultText,
      "dataDateFormat": "YYYY-MM-DD",
      "precision": 2,
      "valueAxes": [{
        color: layoutColors.defaultText,
        axisColor: layoutColors.defaultText,
        gridColor: layoutColors.defaultText,
        "id": "v1",
        "position": "left",
        "autoGridCount": false,
        "labelFunction": function(value) {
          return "$" + Math.round(value);
        }
      }],
      "graphs": [{
        "id": "g3",
        color: layoutColors.defaultText,
        "valueAxis": "v1",
        "lineColor": layoutColors.primaryLight,
        "fillColors": layoutColors.primaryLight,
        "fillAlphas": 0.8,
        "lineAlpha": 0.8,
        "type": "column",
        "title": "Bitcoin -",
        "valueField": "sales2",
        "clustered": false,
        "columnWidth": 0.6,
        "lineColorField" : layoutColors.defaultText,
        "legendValueText": "$[[value]]",
        "balloonText": "[[title]]<br/><b style='font-size: 130%'>$[[value]]</b>"
      }, {
        "id": "g4",
        "valueAxis": "v1",
        color: layoutColors.defaultText,
        "lineColor": layoutColors.primary,
        "fillColors": layoutColors.primary,
        "fillAlphas": 0.9,
        "lineAlpha": 0.9,
        "type": "column",
        "title": "Ethereum -",
        "valueField": "sales1",
        "clustered": false,
        "columnWidth": 0.4,
        "legendValueText": " $[[value]]",
        "balloonText": "[[title]]<br/><b style='font-size: 130%'> $[[value]]</b>"
      }, {
        "id": "g2",
        color: layoutColors.defaultText,
        "valueAxis": "v1",
        "lineColor": layoutColors.warning,
        "fillColors": layoutColors.warning,
        "fillAlphas": 0.7,
        "lineAlpha": 0.7,
        "type": "column",
        "title": "Litecoin -",
        "valueField": "sales3",
        "clustered": false,
        "columnWidth": 0.2,
        "lineColorField" : layoutColors.defaultText,
        "legendValueText": "$[[value]]",
        "balloonText": "[[title]]<br/><b style='font-size: 130%'>$[[value]]</b>"
      }],
      "chartScrollbar": {
        "graph": "g1",
        "oppositeAxis": false,
        "offset": 30,
        gridAlpha: 0,
        color: layoutColors.defaultText,
        scrollbarHeight: 30,
        backgroundAlpha: 0,
        selectedBackgroundAlpha: 0.05,
        selectedBackgroundColor: layoutColors.defaultText,
        graphFillAlpha: 0,
        autoGridCount: true,
        selectedGraphFillAlpha: 0,
        graphLineAlpha: 0.2,
        selectedGraphLineColor: layoutColors.defaultText,
        selectedGraphLineAlpha: 1
      },
      "chartCursor": {
        "pan": true,
        "cursorColor" : layoutColors.danger,
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "cursorAlpha": 0,
        "valueLineAlpha": 0.2
      },
      "categoryField": "date",
      "categoryAxis": {
        "axisColor": layoutColors.defaultText,
        "color": layoutColors.defaultText,
        "gridColor": layoutColors.defaultText,
        "parseDates": true,
        "dashLength": 1,
        "minorGridEnabled": true
      },
      "legend": {
        "useGraphSettings": true,
        "position": "top",
        "color": layoutColors.defaultText
      },
      "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
      },
      "export": {
        "enabled": true
      },
      "dataProvider": [{
        "date": "2013-01-16",
        "sales1": 500,
        "sales2": 300,
        "sales3": 800
      }, {
        "date": "2013-01-17",
        "sales1": 400,
        "sales2": 500,
        "sales3": 600
      }, {
        "date": "2013-01-18",
        "sales1": 500,
        "sales2": 100,
        "sales3": 200
      }, {
        "date": "2013-01-19",
        "sales1": 800,
        "sales2": 700,
        "sales3": 900
      }, {
        "date": "2013-01-20",
        "sales1": 900,
        "sales2": 500,
        "sales3": 600
      }, {
        "date": "2013-01-21",
        "sales1": 300,
        "sales2": 400,
        "sales3": 500
      }, {
        "date": "2013-01-22",
        "sales1": 500,
        "sales2": 200,
        "sales3": 700
      }, {
        "date": "2013-01-23",
        "sales1": 700,
        "sales2": 700,
        "sales3": 600
      }, {
        "date": "2013-01-24",
        "sales1": 900,
        "sales2": 900,
        "sales3": 500
      }, {
        "date": "2013-01-25",
        "sales1": 500,
        "sales2": 750,
        "sales3": 800
      }, {
        "date": "2013-01-26",
        "sales1": 400,
        "sales2": 500,
        "sales3": 800
      }, {
        "date": "2013-01-27",
        "sales1": 300,
        "sales2": 100,
        "sales3": 400
      }, {
        "date": "2013-01-28",
        "sales1": 500,
        "sales2": 0,
        "sales3": 700
      }, {
        "date": "2013-01-29",
        "sales1": 500,
        "sales2": 900,
        "sales3": 800
      }, {
        "date": "2013-01-30",
        "sales1": 400,
        "sales2": 800,
        "sales3": 700
      }],
      pathToImages: layoutPaths.images.amChart
    });
  }

})();
