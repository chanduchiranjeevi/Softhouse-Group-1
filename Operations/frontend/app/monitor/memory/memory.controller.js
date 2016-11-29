/**
 * Created by dell- on 2016/11/10.
 */
angular.module('app')

    .controller('MemoryController', function($scope, $http, memoryUsageService) {

        var metrics;
        var memoryFree;
        var memoryUsed;
        var Time;
        var totalMemory = [];
        var chartData = [];
        var memoryUsedPercentage = [];
        var memoryFreePercentage = [];

        $scope.selectedHostnames = [];

        memoryUsageService.list()
            .then(function (response) {
                metrics = response.data;

                $scope.hostnames = Array.from(new Set(metrics.map(function(metric) {
                    return metric.hostName;
                })));

                memoryFree = metrics.map(function(metric){
                    return metric.kbMemoryFree;
                });

                memoryUsed = metrics.map(function(metric){
                    return metric.kbMemoryUsed;
                });

                Time = metrics.map(function(metric){
                    return metric.time;
                });
                chart.dataProvider = generateChartData();
                chart.validateData();
                return response;
            });


        var chart = AmCharts.makeChart("chartdiv2", {
            "type": "serial",
            "theme": "light",
            "dataProvider": [],
            "valueAxes": [{
                "stackType": "100%",
                "gridAlpha": 0.07,
                "position": "left",
                "title": "Memory Usage(%)"
            }],
            "graphs": [{
                "fillAlphas": 0.5,
                "lineAlpha": 0.5,
                "title": "Memory Used",
                "valueField": "MemoryUsed",
                "balloonText": "<div style='margin:5px; font-size:12px;'>Disk Used(%):<b>[[value]]</b></div>"
            }, {
                "fillAlphas": 0.5,
                "lineAlpha": 0.5,
                "title": "Memory Free",
                "valueField": "MemoryFree",
                "balloonText": "<div style='margin:5px; font-size:12px;'>Disk Free(%):<b>[[value]]</b></div>"
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

                totalMemory[i] = memoryUsed[i] + memoryFree[i];

                memoryUsedPercentage[i] = (memoryUsed[i]/totalMemory[i])* 100;
                memoryFreePercentage[i] = 100 - memoryUsedPercentage;

                chartData.push({
                    date: Time[i],
                    MemoryUsed: memoryUsedPercentage[i],
                    MemoryFree: memoryFreePercentage[i]
                });
            }
            return chartData;
        }

    });