
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.overview')
      .controller('LineChartCtrl', LineChartCtrl);

  /** @ngInject */
  function LineChartCtrl($scope, baConfig, $element, layoutPaths) {
    var layoutColors = baConfig.colors;
    var id = $element[0].getAttribute('id');
    var lineChart = AmCharts.makeChart(id, {
      type: 'serial',
      theme: 'light',
      color: layoutColors.defaultText,
      marginTop: 0,
      marginRight: 15,
      dataProvider: [{
        date: '2012-07-27',
        value: 13
      }, {
        date: '2012-07-28',
        value: 11
      }, {
        date: '2012-07-29',
        value: 15
      }, {
        date: '2012-07-30',
        value: 16
      }, {
        date: '2012-07-31',
        value: 18
      }, {
        date: '2012-08-01',
        value: 13
      }, {
        date: '2012-08-02',
        value: 22
      }, {
        date: '2012-08-03',
        value: 23
      }, {
        date: '2012-08-04',
        value: 20
      }, {
        date: '2012-08-05',
        value: 17
      }, {
        date: '2012-08-06',
        value: 16
      }, {
        date: '2012-08-07',
        value: 18
      }, {
        date: '2012-08-08',
        value: 21
      }, {
        date: '2012-08-09',
        value: 26
      }, {
        date: '2012-08-10',
        value: 24
      }, {
        date: '2012-08-11',
        value: 29
      }, {
        date: '2012-08-12',
        value: 32
      }, {
        date: '2012-08-13',
        value: 18
      }, {
        date: '2012-08-14',
        value: 24
      }, {
        date: '2012-08-15',
        value: 22
      }, {
        date: '2012-08-16',
        value: 18
      }, {
        date: '2012-08-17',
        value: 19
      }, {
        date: '2012-08-18',
        value: 14
      }, {
        date: '2012-08-19',
        value: 15
      }, {
        date: '2012-08-20',
        value: 12
      }, {
        date: '2012-08-21',
        value: 8
      }, {
        date: '2012-08-22',
        value: 9
      }, {
        date: '2012-08-23',
        value: 8
      }, {
        date: '2012-08-24',
        value: 7
      }, {
        date: '2012-08-25',
        value: 5
      }, {
        date: '2012-08-26',
        value: 11
      }, {
        date: '2012-08-27',
        value: 13
      }],
      valueAxes: [
        {
          axisAlpha: 0,
          position: 'left',
          gridAlpha: 0.5,
          gridColor: layoutColors.border,
        }
      ],
      graphs: [{
        id: 'g1',
        balloon:{
          drop:true,
          adjustBorderColor:false,
          color:'#ffffff'
        },
        bullet: "round",
        bulletBorderAlpha: 1,
        bulletColor: "#FFFFFF",
        bulletSize: 5,
        hideBulletsCount: 50,
        lineThickness: 2,
        title: "red line",
        useLineColorForBulletBorder: true,
        valueField: "value",
        balloonText: "<span style='font-size:16px;'>$[[value]]</span>",
        negativeLineColor: layoutColors.warning,
        type: 'smoothedLine'
      }],
      chartScrollbar: {
        graph: "g1",
        oppositeAxis:false,
        offset:30,
        scrollbarHeight: 30,
        backgroundAlpha: 0,
        selectedBackgroundAlpha: 0.05,
        selectedBackgroundColor: "#888888",
        graphFillAlpha: 0,
        graphLineAlpha: 0.5,
        selectedGraphFillAlpha: 0,
        selectedGraphLineAlpha: 1,
        autoGridCount:true,
        color:"#AAAAAA"
      },
      chartCursor: {
        categoryBalloonDateFormat: 'YYYY-MM-DD',
        cursorAlpha: 1,
        valueLineEnabled: true,
        valueLineBalloonEnabled: true,
        valueLineAlpha: 0.5,
        fullWidth: true,
        cursorColor:"#8ba7ba",
        valueZoomable:true
      },
      dataDateFormat: 'YYYY-MM-DD',
      categoryField: "date",
      categoryAxis: {
        parseDates: true,
        dashLength: 1,
        minorGridAlpha: 0.1,
        minorGridEnabled: true,
        gridAlpha: 0.5,
        gridColor: layoutColors.border
      },
      export: {
        enabled: true
      },
      creditsPosition: 'bottom-right',
      pathToImages: layoutPaths.images.amChart
    });

    lineChart.addListener('rendered', zoomChart);
    if (lineChart.zoomChart) {
      lineChart.zoomChart();
    }

    function zoomChart() {
      lineChart.zoomToIndexes(Math.round(lineChart.dataProvider.length * 0.4), Math.round(lineChart.dataProvider.length * 0.55));
    }
  }

})();
