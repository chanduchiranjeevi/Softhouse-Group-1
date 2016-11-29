/**
 * Created by dell- on 2016/11/10.
 */
angular.module('app')

    .controller('MemoryController', function($scope, $http, memoryUsageService) {

        var metrics;
        var memoryFree;
        var memoryUsed;
        var Time;
        var totalMemory;
        var memoryUsedPercentage = [];
        $scope.showme = false;
        $scope.selectedHostname = "";

        memoryUsageService.list()
            .then(function (response) {
                metrics = response.data;

                $scope.hostnames = Array.from(new Set(metrics.map(function(metric) {
                    return metric.hostName;
                })));
                return response;
            });



        $scope.showTheGraph = function () {
            var chartData = [];
            memoryUsageService.listByHostname($scope.selectedHostname)
                .then(function (response) {
                    $scope.MemoryMetrics = response.data;

                    memoryFree = $scope.MemoryMetrics.map(function(memoryMetric){
                        return memoryMetric.kbMemoryFree;
                    });

                    memoryUsed = $scope.MemoryMetrics.map(function(memoryMetric){
                        return memoryMetric.kbMemoryUsed;
                    });

                    Time = $scope.MemoryMetrics.map(function(memoryMetric){
                        return memoryMetric.time;
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


        var chart = AmCharts.makeChart("chartdiv2", {
            "type": "serial",
            "theme": "none",
            "dataProvider": [],
            "valueAxes": [{
                "minimum": 0,
                "maximum": 100,
                "position": "left",
                "title": "Memory Usage(%)"
            }],
            "graphs": [{
                "id":"g1",
                "fillAlphas": 0.5,
                "lineAlpha": 0.5,
                "title": "Memory Used",
                "valueField": "MemoryUsedPercentage",
                "balloonText": "<div style='margin:5px; font-size:12px;'>Memory Used(%):<b>[[MemoryUsed]]kb, ([[value]]%)</b></div>"
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

            totalMemory = memoryUsed[0] + memoryFree[0];

            for (var i = 0; i < Time.length; i++) {
                memoryUsedPercentage[i] = (memoryUsed[i]/totalMemory)* 100;
                chartData.push({
                    date: Time[i],
                    MemoryUsed: memoryUsed[i],
                    MemoryUsedPercentage: memoryUsedPercentage[i].toFixed(2)
                });
            }
            return chartData;
        }

    });