/**
 * Created by dell- on 2016/11/10.
 */
angular.module('app')

    .controller('DiskController', function($scope, $http, diskUsageService) {

        var metrics;
        var diskFree;
        var diskUsed;
        var Time;
        var totalDiskSpace = [];
        var chartData = [];
        var diskUsedPercentage = [];
        var diskFreePercentage=[];

        $scope.selectedHostnames = [];

        diskUsageService.list()
            .then(function (response) {
                metrics = response.data;

                $scope.hostnames = Array.from(new Set(metrics.map(function(metric) {
                    return metric.hostName;
                })));

                diskFree = metrics.map(function(metric){
                    return metric.kbDiskAvailable;
                });

                diskUsed = metrics.map(function(metric){
                    return metric.kbDiskUsed;
                });

                Time = metrics.map(function(metric){
                    return metric.time;
                });

                chart.dataProvider = generateChartData();
                chart.validateData();
                return response;
            });


        var chart = AmCharts.makeChart("chartdiv1", {
            "type": "serial",
            "theme": "light",
            "dataProvider": [],
            "valueAxes": [{
                "minimum": 0,
                "maximum": 100,
                "position": "left",
                "title": "Disk Usage(%)"
            }],
            "graphs": [{
                "fillAlphas": 0.5,
                "lineAlpha": 0.5,
                "title": "Disk Used",
                "valueField": "DiskUsed",
                "balloonText": "<div style='margin:5px; font-size:12px;'>Disk Used:<b>[[value]]</b></div>"
            }],
            "chartScrollbar": {
                "graph": "g1",
                "scrollbarHeight": 80,
                "backgroundAlpha": 0,
                "selectedBackgroundAlpha": 0.1,
                "selectedBackgroundColor": "#888888",
                "graphFillAlpha": 0,
                "graphLineAlpha": 0.5,
                "selectedGraphFillAlpha": 0,
                "selectedGraphLineAlpha": 1,
                "autoGridCount": true,
                "color": "#AAAAAA"
            },
            "plotAreaBorderAlpha": 0,
            "marginLeft": 0,
            "marginBottom": 0,
            "chartCursor": {
                "categoryBalloonDateFormat": "JJ:NN, DD MMMM",
                "cursorPosition": "mouse"
            },
            "categoryField": "date",
            "categoryAxis": {
                "minPeriod": "mm",
                "parseDates": true
            },
            "export": {
                "enabled": true,
                "dateFormat": "YYYY-MM-DD HH:NN:SS"
            }
        });

        function generateChartData() {

            for (var i = 0; i < Time.length; i++) {

                totalDiskSpace[i] = diskUsed[i] + diskFree[i];

                diskUsedPercentage[i] = (diskUsed[i]/totalDiskSpace[i])* 100;
                diskFreePercentage[i] = 100 - diskUsedPercentage;
                chartData.push({
                    date: Time[i],
                    DiskUsed: diskUsedPercentage[i],
                    DiskFree: diskFreePercentage[i]
                });
            }
            return chartData;
        }

    });