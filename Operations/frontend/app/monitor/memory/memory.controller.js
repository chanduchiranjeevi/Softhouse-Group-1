/**
 * Created by dell- on 2016/11/10.
 */
angular.module('app')

    .controller('MemoryController', function($scope, $http, $q, $filter, memoryUsageService) {

        var metrics;
        var memoryFree = [];
        var memoryUsed = [];
        var Time = [];
        var totalMemory;
        var memoryUsedPercentage = [];
        var match = false;
        $scope.showGraph = false;
        $scope.selectedHostnames = [];

        memoryUsageService.list()
            .then(function (response) {
                metrics = response.data;

                $scope.hostnames = Array.from(new Set(metrics.map(function(metric) {
                    return metric.hostName;
                })));
                return response;
            });

        $scope.showTheGraph = function () {
            if ($scope.selectedHostnames.length != 0){
                var chartData = [];
                var promises = [];
                for (i = 0; i < $scope.selectedHostnames.length; i++) {
                    promises.push(memoryUsageService.listByHostname($scope.selectedHostnames[i]));
                }
                $q.all(promises).then(function (response) {
                    for (i = 0; i < response.length; i++) {
                        $scope.MemoryMetrics = response[i].data;

                        memoryFree = $scope.MemoryMetrics.map(function (memoryMetric) {
                            return memoryMetric.kbMemoryFree;
                        });

                        memoryUsed = $scope.MemoryMetrics.map(function (memoryMetric) {
                            return memoryMetric.kbMemoryUsed;
                        });

                        Time = $scope.MemoryMetrics.map(function (memoryMetric) {
                            return memoryMetric.time;
                        });

                        if (response.length == 1){
                            totalMemory = memoryUsed[0] + memoryFree[0];
                            for (j = 0; j < Time.length; j++) {
                                memoryUsedPercentage[j] = (memoryUsed[j]/totalMemory)* 100;
                                Time[j] = $filter('date')(Time[j],"yyyy-MM-dd HH:mm");
                                chartData.push({
                                    date: Time[j],
                                    host0: $scope.selectedHostnames[0],
                                    MemoryUsed0: memoryUsed[j].toFixed(2),
                                    MemoryUsedPercentage0: memoryUsedPercentage[j].toFixed(2)
                                });
                            }
                        }
                        else if (response.length == 2){
                            if (i == 0) {
                                totalMemory = memoryUsed[0] + memoryFree[0];
                                for (j = 0; j < Time.length; j++) {
                                    memoryUsedPercentage[j] = (memoryUsed[j]/totalMemory)* 100;
                                    Time[j] = $filter('date')(Time[j],"yyyy-MM-dd HH:mm");
                                    chartData.push({
                                        date: Time[j],
                                        host0: $scope.selectedHostnames[0],
                                        MemoryUsed0:memoryUsed[j].toFixed(2),
                                        MemoryUsedPercentage0: memoryUsedPercentage[j].toFixed(2),
                                        host1: $scope.selectedHostnames[1],
                                        MemoryUsed1: 0,
                                        MemoryUsedPercentage1: 0
                                    });
                                }
                            }
                            else if (i == 1){
                                totalMemory = memoryUsed[0] + memoryFree[0];
                                for (j = 0; j < Time.length; j++) {
                                    memoryUsedPercentage[j] = (memoryUsed[j]/totalMemory)* 100;
                                    Time[j] = $filter('date')(Time[j],"yyyy-MM-dd HH:mm");
                                    for (k = 0; k < chartData.length; k++) {
                                        if (Time[j] == chartData[k].date) {
                                            match = true;
                                            chartData[k].MemoryUsed1 = memoryUsed[j].toFixed(2);
                                            chartData[k].MemoryUsedPercentage1 = memoryUsedPercentage[j].toFixed(2);
                                            break;
                                        }
                                    }
                                    if (match == false) {
                                        chartData.push({
                                            date: Time[j],
                                            host0: $scope.selectedHostnames[0],
                                            MemoryUsed0: 0,
                                            MemoryUsedPercentage0: 0,
                                            host1: $scope.selectedHostnames[1],
                                            MemoryUsed1: memoryUsed[j].toFixed(2),
                                            MemoryUsedPercentage1: memoryUsedPercentage[j].toFixed(2)
                                        });
                                    } else {
                                        match = false;
                                    }
                                }
                            }
                        }
                        else if (response.length == 3){
                            if (i == 0) {
                                totalMemory = memoryUsed[0] + memoryFree[0];
                                for (j = 0; j < Time.length; j++) {
                                    memoryUsedPercentage[j] = (memoryUsed[j]/totalMemory)* 100;
                                    Time[j] = $filter('date')(Time[j],"yyyy-MM-dd HH:mm");
                                    chartData.push({
                                        date: Time[j],
                                        host0: $scope.selectedHostnames[0],
                                        MemoryUsed0: memoryUsed[j].toFixed(2),
                                        MemoryUsedPercentage0: memoryUsedPercentage[j].toFixed(2),
                                        host1: $scope.selectedHostnames[1],
                                        MemoryUsed1: 0,
                                        MemoryUsedPercentage1: 0,
                                        host2: $scope.selectedHostnames[2],
                                        MemoryUsed2: 0,
                                        MemoryUsedPercentage2: 0
                                    });
                                }
                            }
                            else if (i == 1){
                                totalMemory = memoryUsed[0] + memoryFree[0];
                                for (j = 0; j < Time.length; j++) {
                                    memoryUsedPercentage[j] = (memoryUsed[j]/totalMemory)* 100;
                                    Time[j] = $filter('date')(Time[j],"yyyy-MM-dd HH:mm");
                                    for (k = 0; k < chartData.length; k++) {
                                        if (Time[j] == chartData[k].date) {
                                            match = true;
                                            chartData[k].MemoryUsed1 = memoryUsed[j].toFixed(2);
                                            chartData[k].MemoryUsedPercentage1 = memoryUsedPercentage[j].toFixed(2);
                                            break;
                                        }
                                    }
                                    if (match == false) {
                                        chartData.push({
                                            date: Time[j],
                                            host0: $scope.selectedHostnames[0],
                                            MemoryUsed0: 0,
                                            MemoryUsedPercentage0: 0,
                                            host1: $scope.selectedHostnames[1],
                                            MemoryUsed1: memoryUsed[j].toFixed(2),
                                            MemoryUsedPercentage1: memoryUsedPercentage[j].toFixed(2),
                                            host2: $scope.selectedHostnames[2],
                                            MemoryUsed2: 0,
                                            MemoryUsedPercentage2: 0
                                        });
                                    } else {
                                        match = false;
                                    }
                                }
                            }
                            else if (i == 2) {
                                totalMemory = memoryUsed[0] + memoryFree[0];
                                for (j = 0; j < Time.length; j++) {
                                    memoryUsedPercentage[j] = (memoryUsed[j]/totalMemory)* 100;
                                    Time[j] = $filter('date')(Time[j],"yyyy-MM-dd HH:mm");
                                    for (k = 0; k < chartData.length; k++) {
                                        if (Time[j] == chartData[k].date) {
                                            match = true;
                                            chartData[k].MemoryUsed2 = memoryUsed[j].toFixed(2);
                                            chartData[k].MemoryUsedPercentage2 = memoryUsedPercentage[j].toFixed(2);
                                            break;
                                        }
                                    }
                                    if (match == false) {
                                        chartData.push({
                                            date: Time[j],
                                            host0: $scope.selectedHostnames[0],
                                            MemoryUsed0: 0,
                                            MemoryUsedPercentage0: 0,
                                            host1: $scope.selectedHostnames[1],
                                            MemoryUsed1: 0,
                                            MemoryUsedPercentage1: 0,
                                            host2: $scope.selectedHostnames[2],
                                            MemoryUsed2: memoryUsed[j].toFixed(2),
                                            MemoryUsedPercentage2: memoryUsedPercentage[j].toFixed(2)
                                        });
                                    } else {
                                        match = false;
                                    }
                                }
                            }
                        }
                    }
                    $scope.showGraph = true;
                    chart.dataProvider = chartData;
                    chart.validateData();
                });
            }
        };

        $scope.hideTheGraph = function () {
            $scope.showGraph = false;
            $scope.selectedHostnames = [];
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
                "fillAlphas": 0.5,
                "lineAlpha": 0.5,
                "title": "Memory Used",
                "valueField": "MemoryUsedPercentage0",
                "balloonText": "<div style='margin:5px; font-size:12px;'>Host Name:<b>[[host0]]</b></div><br><div style='margin:5px; font-size:12px;'>Memory Used:<b>[[MemoryUsed0]]GB, ([[value]]%)</b></div>"
            }, {
                "fillAlphas": 0.5,
                "lineAlpha": 0.5,
                "title": "Memory Used",
                "valueField": "MemoryUsedPercentage1",
                "balloonText": "<div style='margin:5px; font-size:12px;'>Host Name:<b>[[host1]]</b></div><br><div style='margin:5px; font-size:12px;'>Memory Used:<b>[[MemoryUsed1]]GB, ([[value]]%)</b></div>"
            }, {
                "fillAlphas": 0.5,
                "lineAlpha": 0.5,
                "title": "Memory Used",
                "valueField": "MemoryUsedPercentage2",
                "balloonText": "<div style='margin:5px; font-size:12px;'>Host Name:<b>[[host2]]</b></div><br><div style='margin:5px; font-size:12px;'>Memory Used:<b>[[MemoryUsed2]]GB, ([[value]]%)</b></div>"
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
    });