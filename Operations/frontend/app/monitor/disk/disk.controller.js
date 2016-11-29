/**
 * Created by dell- on 2016/11/10.
 */
angular.module('app')

    .controller('DiskController', function($scope, $http, diskUsageService) {

        var metrics;
        var diskFree;
        var diskUsed;
        var Time;
        var totalDiskSpace;
        var diskUsedPercentage = [];
        $scope.showme = false;
        $scope.selectedHostname = "";

        diskUsageService.list()
            .then(function (response) {
                metrics = response.data;

                $scope.hostnames = Array.from(new Set(metrics.map(function(metric) {
                    return metric.hostName;
                })));
                return response;
            });

        $scope.showTheGraph = function () {
            var chartData = [];
            diskUsageService.listByHostname($scope.selectedHostname)
                .then(function (response) {
                    $scope.DiskMetrics = response.data;

                    diskUsed = $scope.DiskMetrics.map(function (DiskMetric) {
                        return DiskMetric.kbDiskUsed;
                    });

                    diskFree = $scope.DiskMetrics.map(function (DiskMetric) {
                        return DiskMetric.kbDiskAvailable;
                    });

                    Time = $scope.DiskMetrics.map(function (DiskMetric) {
                        return DiskMetric.time;
                    });
                    chart.dataProvider = generateChartData(chartData);
                    chart.validateData();
                });
            $scope.showme = true;
            return chartData;
        };

        $scope.hideTheGraph = function () {
            $scope.showme = false;
        };


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
                "id":"g1",
                "fillAlphas": 0.5,
                "lineAlpha": 0.5,
                "title": "Disk Used",
                "valueField": "DiskUsedPercentage",
                "balloonText": "<div style='margin:5px; font-size:12px;'>Disk Used:<b>[[DiskUsed]]kb, ([[value]]%)</b></div>"
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

        function generateChartData(chartData) {

            totalDiskSpace = diskUsed[0] + diskFree[0];

            for (var i = 0; i < Time.length; i++) {
                diskUsedPercentage[i] = (diskUsed[i]/totalDiskSpace)* 100;
                chartData.push({
                    date: Time[i],
                    DiskUsed:diskUsed[i],
                    DiskUsedPercentage: diskUsedPercentage[i].toFixed(2)
                });
            }
            return chartData;
        }

    });