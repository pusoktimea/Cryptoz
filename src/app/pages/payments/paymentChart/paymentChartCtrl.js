
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.payments')
  .controller('ppaymentChartCtrl', ppaymentChartCtrl);

  /** @ngInject */
  function ppaymentChartCtrl($element, baConfig, layoutPaths) {
    var layoutColors = baConfig.colors;
    var chart = AmCharts.makeChart("chartdiv", {
      "color": layoutColors.defaultText,
      "dataDateFormat": "YYYY-MM-DD",
      "precision": 2,
      "type": "serial",
      "theme": "light",
      "legend": {
        "horizontalGap": 10,
        "maxColumns": 10,
        "position": "top",
        "useGraphSettings": true,
        "markerSize": 10
      },
      "dataProvider": [{
        "date": "2013-01-16",
        "Bitcoin": 2.5,
        "Ethereum": 2.5,
        "Litecoin": 2.1,
        "Dash": 0.3,
        "SiaCoin": 0.2
      }, {
        "date": "2013-01-17",
        "Bitcoin": 2.6,
        "Ethereum": 2.7,
        "Litecoin": 2.2,
        "Dash": 0.3,
        "SiaCoin": 0.3
      }, {
        "date": "2013-01-18",
        "Bitcoin": 2.8,
        "Ethereum": 2.9,
        "Litecoin": 2.4,
        "Dash": 0.3,
        "SiaCoin": 0.3
      }, {
        "date": "2013-01-19",
        "Bitcoin": 2.6,
        "Ethereum": 2.7,
        "Litecoin": 2.2,
        "Dash": 0.3,
        "SiaCoin": 0.3
      }, {
        "date": "2013-01-20",
        "Bitcoin": 2.8,
        "Ethereum": 2.9,
        "Litecoin": 2.4,
        "Dash": 0.3,
        "SiaCoin": 0.3
      }, {
        "date": "2013-01-21",
        "Bitcoin": 2.6,
        "Ethereum": 2.7,
        "Litecoin": 2.2,
        "Dash": 0.3,
        "SiaCoin": 0.3
      }, {
        "date": "2013-01-22",
        "Bitcoin": 2.8,
        "Ethereum": 2.9,
        "Litecoin": 2.4,
        "Dash": 0.3,
        "SiaCoin": 0.3
      }, {
        "date": "2013-01-23",
        "Bitcoin": 2.6,
        "Ethereum": 2.7,
        "Litecoin": 2.2,
        "Dash": 0.3,
        "SiaCoin": 0.3
      }, {
        "date": "2013-01-24",
        "Bitcoin": 2.8,
        "Ethereum": 2.9,
        "Litecoin": 2.4,
        "Dash": 0.3,
        "SiaCoin": 0.3
      }, {
        "date": "2013-01-25",
        "Bitcoin": 2.6,
        "Ethereum": 2.7,
        "Litecoin": 2.2,
        "Dash": 0.3,
        "SiaCoin": 0.3
      }, {
        "date": "2013-01-26",
        "Bitcoin": 2.8,
        "Ethereum": 2.9,
        "Litecoin": 2.4,
        "Dash": 0.3,
        "SiaCoin": 0.3
      }, {
        "date": "2013-01-27",
        "Bitcoin": 2.6,
        "Ethereum": 2.7,
        "Litecoin": 2.2,
        "Dash": 0.3,
        "SiaCoin": 0.3
      }, {
        "date": "2013-01-28",
        "Bitcoin": 2.8,
        "Ethereum": 2.9,
        "Litecoin": 2.4,
        "Dash": 0.3,
        "SiaCoin": 0.3
      }, {
        "date": "2013-01-29",
        "Bitcoin": 2.6,
        "Ethereum": 2.7,
        "Litecoin": 2.2,
        "Dash": 0.3,
        "SiaCoin": 0.3
      }, {
        "date": "2013-01-30",
        "Bitcoin": 2.8,
        "Ethereum": 2.9,
        "Litecoin": 2.4,
        "Dash": 0.3,
        "SiaCoin": 0.3
      }, {
        "date": "2013-01-31",
        "Bitcoin": 2.8,
        "Ethereum": 2.9,
        "Litecoin": 2.4,
        "Dash": 0.3,
        "SiaCoin": 0.3
      }, {
        "date": "2013-02-01",
        "Bitcoin": 2.6,
        "Ethereum": 2.7,
        "Litecoin": 2.2,
        "Dash": 0.3,
        "SiaCoin": 0.3
      }, {
        "date": "2013-02-02",
        "Bitcoin": 2.8,
        "Ethereum": 2.9,
        "Litecoin": 2.4,
        "Dash": 0.3,
        "SiaCoin": 0.3
      }, {
        "date": "2013-02-03",
        "Bitcoin": 2.6,
        "Ethereum": 2.7,
        "Litecoin": 2.2,
        "Dash": 0.3,
        "SiaCoin": 0.3
      }, {
        "date": "2013-02-04",
        "Bitcoin": 2.8,
        "Ethereum": 2.9,
        "Litecoin": 2.4,
        "Dash": 0.3,
        "SiaCoin": 0.3
      }, {
        "date": "2013-02-05",
        "Bitcoin": 2.6,
        "Ethereum": 2.7,
        "Litecoin": 2.2,
        "Dash": 0.3,
        "SiaCoin": 0.3
      }, {
        "date": "2013-02-06",
        "Bitcoin": 2.8,
        "Ethereum": 2.9,
        "Litecoin": 2.4,
        "Dash": 0.3,
        "SiaCoin": 0.3
      }, {
        "date": "2013-02-07",
        "Bitcoin": 2.6,
        "Ethereum": 2.7,
        "Litecoin": 2.2,
        "Dash": 0.3,
        "SiaCoin": 0.3
      }, {
        "date": "2013-02-08",
        "Bitcoin": 2.8,
        "Ethereum": 2.9,
        "Litecoin": 2.4,
        "Dash": 0.3,
        "SiaCoin": 0.3
      }, {
        "date": "2013-02-09",
        "Bitcoin": 2.6,
        "Ethereum": 2.7,
        "Litecoin": 2.2,
        "Dash": 0.3,
        "SiaCoin": 0.3
      }, {
        "date": "2013-02-10",
        "Bitcoin": 2.8,
        "Ethereum": 2.9,
        "Litecoin": 2.4,
        "Dash": 0.3,
        "SiaCoin": 0.3
      }],
      "valueAxes": [{
        color: layoutColors.defaultText,
        axisColor: layoutColors.defaultText,
        gridColor: layoutColors.defaultText,
        "stackType": "regular",
        "axisAlpha": 0.3,
        "gridAlpha": 0,
        "id": "v1",
        "position": "left",
        "autoGridCount": false,
        "labelFunction": function(value) {
          return "$" + Math.round(value);
        }
      }],

      "graphs": [{
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Bitcoin",
        "type": "column",
        "valueField": "Bitcoin",
        "id": "1",
        color: layoutColors.defaultText,
        "valueAxis": "v1",
        "lineColor": layoutColors.primaryLight,
        "fillColors": layoutColors.primary,
        "clustered": false,
        "columnWidth": 0.6,
        "lineColorField" : layoutColors.defaultText,
        "legendValueText": "$[[value]]"
      }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Ethereum",
        "type": "column",
        "valueField": "Ethereum",
        "id": "2",
        color: layoutColors.defaultText,
        "valueAxis": "v1",
        "lineColor": layoutColors.primaryLight,
        "fillColors": layoutColors.info,
        "clustered": false,
        "columnWidth": 0.6,
        "lineColorField" : layoutColors.defaultText,
        "legendValueText": "$[[value]]"
      }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Litecoin",
        "type": "column",
        "valueField": "Litecoin",
        "id": "3",
        color: layoutColors.defaultText,
        "valueAxis": "v1",
        "lineColor": layoutColors.primaryLight,
        "fillColors": layoutColors.success,
        "clustered": false,
        "columnWidth": 0.6,
        "lineColorField" : layoutColors.defaultText,
        "legendValueText": "$[[value]]"
      }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Dash",
        "type": "column",
        "valueField": "Dash",
        "id": "4",
        color: layoutColors.defaultText,
        "valueAxis": "v1",
        "lineColor": layoutColors.primaryLight,
        "fillColors": layoutColors.warning,
        "clustered": false,
        "columnWidth": 0.6,
        "lineColorField" : layoutColors.defaultText,
        "legendValueText": "$[[value]]"
      }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "SiaCoin",
        "type": "column",
        "valueField": "SiaCoin",
        "id": "5",
        color: layoutColors.defaultText,
        "valueAxis": "v1",
        "lineColor": layoutColors.primaryLight,
        "fillColors": layoutColors.danger,
        "clustered": false,
        "columnWidth": 0.6,
        "lineColorField" : layoutColors.defaultText,
        "legendValueText": "$[[value]]"
      }],
      "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
      },
      // "chartCursor": {
      //   "pan": true,
      //   "cursorColor" : layoutColors.danger,
      //   "valueLineEnabled": true,
      //   "valueLineBalloonEnabled": true,
      //   "cursorAlpha": 0,
      //   "valueLineAlpha": 0.2
      // },
      "categoryField": "date",
      "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 0,
        "gridAlpha": 0,
        "parseDates": true,
        "dashLength": 1,
        "minorGridEnabled": true,
        "position": "left",
        "axisColor": layoutColors.defaultText,
        "color": layoutColors.defaultText,
        "gridColor": layoutColors.defaultText,
      },
      "chartScrollbar": {
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
      "export": {
        "enabled": true
      }

    });
  }

})();
