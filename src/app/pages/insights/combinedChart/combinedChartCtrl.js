
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.insights')
    .controller('combinedChartCtrl', combinedChartCtrl);

  function combinedChartCtrl($element, baConfig, layoutPaths) {
    var layoutColors = baConfig.colors;
    var id = $element[0].getAttribute('id');
    var chart = AmCharts.makeChart(id, {
      "type": "serial",
      "theme": "light",
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
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": layoutColors.defaultText,
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "lineColor": layoutColors.danger,
        "type": "smoothedLine",
        "title": "Bitcoin",
        "valueField": "sales2",
        "clustered": false,
        "columnWidth": 0.5,
        "lineColorField" : layoutColors.defaultText,
        "balloonText": "[[title]]<br/><b style='font-size: 130%'>$[[value]]</b>"
      }, {
        "id": "g4",
        "valueAxis": "v1",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": layoutColors.defaultText,
        "bulletSize": 5,
        color: layoutColors.defaultText,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "lineColor": layoutColors.info,
        "type": "smoothedLine",
        "title": "Payout per coin mined",
        "valueField": "sales1",
        "clustered": false,
        "columnWidth": 0.3,
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
        // "useGraphSettings": true,
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
        "sales1": 5000,
        "sales2": 8000
      }, {
        "date": "2013-01-17",
        "sales1": 4000,
        "sales2": 6000
      }, {
        "date": "2013-01-18",
        "sales1": 5000,
        "sales2": 2000
      }, {
        "date": "2013-01-19",
        "sales1": 8000,
        "sales2": 9000
      }, {
        "date": "2013-01-20",
        "sales1": 9000,
        "sales2": 6000
      }, {
        "date": "2013-01-21",
        "sales1": 3000,
        "sales2": 5000
      }, {
        "date": "2013-01-22",
        "sales1": 5000,
        "sales2": 7000
      }, {
        "date": "2013-01-23",
        "sales1": 7000,
        "sales2": 6000
      }, {
        "date": "2013-01-24",
        "sales1": 9000,
        "sales2": 5000
      }, {
        "date": "2013-01-25",
        "sales1": 5000,
        "sales2": 8000
      }, {
        "date": "2013-01-26",
        "sales1": 4000,
        "sales2": 8000
      }, {
        "date": "2013-01-27",
        "sales1": 3000,
        "sales2": 4000
      }, {
        "date": "2013-01-28",
        "sales1": 5000,
        "sales2": 7000
      }, {
        "date": "2013-01-29",
        "sales1": 5000,
        "sales2": 8000
      }, {
        "date": "2013-01-30",
        "sales1": 4000,
        "sales2": 7000
      }],
      pathToImages: layoutPaths.images.amChart
    });
  }

})();
