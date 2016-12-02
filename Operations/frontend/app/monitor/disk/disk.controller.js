/**
 * Created by dell- on 2016/11/10.
 */
angular.module('app')

    .controller('DiskController', function($scope, $q, $filter, $http, diskUsageService) {

        var metrics;
        var diskFree = [];
        var diskUsed = [];
        var Time = [];
        var totalDiskSpace;
        var diskUsedPercentage = [];
        var match = false;
        $scope.showGraph = false;
        $scope.selectedHostnames = [];

        diskUsageService.list()
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
                    promises.push(diskUsageService.listByHostname($scope.selectedHostnames[i]));
                }
                $q.all(promises).then(function (response) {
                    for (i = 0; i < response.length; i++) {
                        $scope.DiskMetrics = response[i].data;

                        diskUsed = $scope.DiskMetrics.map(function (DiskMetric) {
                            return DiskMetric.kbDiskUsed;
                        });

                        diskFree = $scope.DiskMetrics.map(function (DiskMetric) {
                            return DiskMetric.kbDiskAvailable;
                        });

                        Time = $scope.DiskMetrics.map(function (DiskMetric) {
                            return DiskMetric.time;
                        });

                        if (response.length == 1){
                            totalDiskSpace = diskUsed[0] + diskFree[0];
                            for (j = 0; j < Time.length; j++) {
                                diskUsedPercentage[j] = (diskUsed[j]/totalDiskSpace)* 100;
                                Time[j] = $filter('date')(Time[j],"yyyy-MM-dd HH:mm");
                                chartData.push({
                                    date: Time[j],
                                    host0: $scope.selectedHostnames[0],
                                    DiskUsed0:diskUsed[j].toFixed(2),
                                    DiskUsedPercentage0: diskUsedPercentage[j].toFixed(2)
                                });
                            }
                        }
                        else if (response.length == 2){
                            if (i == 0) {
                                totalDiskSpace = diskUsed[0] + diskFree[0];
                                for (j = 0; j < Time.length; j++) {
                                    diskUsedPercentage[j] = (diskUsed[j]/totalDiskSpace)* 100;
                                    Time[j] = $filter('date')(Time[j],"yyyy-MM-dd HH:mm");
                                    chartData.push({
                                        date: Time[j],
                                        host0: $scope.selectedHostnames[0],
                                        DiskUsed0:diskUsed[j].toFixed(2),
                                        DiskUsedPercentage0: diskUsedPercentage[j].toFixed(2),
                                        host1: $scope.selectedHostnames[1],
                                        DiskUsed1: 0,
                                        DiskUsedPercentage1: 0
                                    });
                                }
                            }
                            else if (i == 1){
                                totalDiskSpace = diskUsed[0] + diskFree[0];
                                for (j = 0; j < Time.length; j++) {
                                    diskUsedPercentage[j] = (diskUsed[j]/totalDiskSpace)* 100;
                                    Time[j] = $filter('date')(Time[j],"yyyy-MM-dd HH:mm");
                                    for (k = 0; k < chartData.length; k++) {
                                        if (Time[j] == chartData[k].date) {
                                            match = true;
                                            chartData[k].DiskUsed1 = diskUsed[j].toFixed(2);
                                            chartData[k].DiskUsedPercentage1 = diskUsedPercentage[j].toFixed(2);
                                            break;
                                        }
                                    }
                                    if (match == false) {
                                        chartData.push({
                                            date: Time[j],
                                            host0: $scope.selectedHostnames[0],
                                            DiskUsed0: 0,
                                            DiskUsedPercentage0: 0,
                                            host1: $scope.selectedHostnames[1],
                                            DiskUsed1: diskUsed[j].toFixed(2),
                                            DiskUsedPercentage1: diskUsedPercentage[j].toFixed(2)
                                        });
                                    } else {
                                        match = false;
                                    }
                                }
                            }
                        }
                        else if (response.length == 3){
                            if (i == 0) {
                                totalDiskSpace = diskUsed[0] + diskFree[0];
                                for (j = 0; j < Time.length; j++) {
                                    diskUsedPercentage[j] = (diskUsed[j]/totalDiskSpace)* 100;
                                    Time[j] = $filter('date')(Time[j],"yyyy-MM-dd HH:mm");
                                    chartData.push({
                                        date: Time[j],
                                        host0: $scope.selectedHostnames[0],
                                        DiskUsed0: diskUsed[j].toFixed(2),
                                        DiskUsedPercentage0: diskUsedPercentage[j].toFixed(2),
                                        host1: $scope.selectedHostnames[1],
                                        DiskUsed1: 0,
                                        DiskUsedPercentage1: 0,
                                        host2: $scope.selectedHostnames[2],
                                        DiskUsed2: 0,
                                        DiskUsedPercentage2: 0
                                    });
                                }
                            }
                            else if (i == 1){
                                totalDiskSpace = diskUsed[0] + diskFree[0];
                                for (j = 0; j < Time.length; j++) {
                                    diskUsedPercentage[j] = (diskUsed[j]/totalDiskSpace)* 100;
                                    Time[j] = $filter('date')(Time[j],"yyyy-MM-dd HH:mm");
                                    for (k = 0; k < chartData.length; k++) {
                                        if (Time[j] == chartData[k].date) {
                                            match = true;
                                            chartData[k].DiskUsed1 = diskUsed[j].toFixed(2);
                                            chartData[k].DiskUsedPercentage1 = diskUsedPercentage[j].toFixed(2);
                                            break;
                                        }
                                    }
                                    if (match == false) {
                                        chartData.push({
                                            date: Time[j],
                                            host0: $scope.selectedHostnames[0],
                                            DiskUsed0: 0,
                                            DiskUsedPercentage0: 0,
                                            host1: $scope.selectedHostnames[1],
                                            DiskUsed1: diskUsed[j].toFixed(2),
                                            DiskUsedPercentage1: diskUsedPercentage[j].toFixed(2),
                                            host2: $scope.selectedHostnames[2],
                                            DiskUsed2: 0,
                                            DiskUsedPercentage2: 0
                                        });
                                    } else {
                                        match = false;
                                    }
                                }
                            }
                            else if (i == 2) {
                                totalDiskSpace = diskUsed[0] + diskFree[0];
                                for (j = 0; j < Time.length; j++) {
                                    diskUsedPercentage[j] = (diskUsed[j]/totalDiskSpace)* 100;
                                    Time[j] = $filter('date')(Time[j],"yyyy-MM-dd HH:mm");
                                    for (k = 0; k < chartData.length; k++) {
                                        if (Time[j] == chartData[k].date) {
                                            match = true;
                                            chartData[k].DiskUsed2 = diskUsed[j].toFixed(2);
                                            chartData[k].DiskUsedPercentage2 = diskUsedPercentage[j].toFixed(2);
                                            break;
                                        }
                                    }
                                    if (match == false) {
                                        chartData.push({
                                            date: Time[j],
                                            host0: $scope.selectedHostnames[0],
                                            DiskUsed0: 0,
                                            DiskUsedPercentage0: 0,
                                            host1: $scope.selectedHostnames[1],
                                            DiskUsed1: 0,
                                            DiskUsedPercentage1: 0,
                                            host2: $scope.selectedHostnames[2],
                                            DiskUsed2: diskUsed[j].toFixed(2),
                                            DiskUsedPercentage2: diskUsedPercentage[j].toFixed(2)
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

        var chart = AmCharts.makeChart("chartdiv1", {
            "type": "serial",
            "theme": "none",
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
                "valueField": "DiskUsedPercentage0",
                "balloonText": "<div style='margin:5px; font-size:12px;'>Host Name:<b>[[host0]]</b></div><br><div style='margin:5px; font-size:12px;'>Disk Used:<b>[[DiskUsed0]]kB, ([[value]]%)</b></div>"
            },{
                "fillAlphas": 0.5,
                "lineAlpha": 0.5,
                "title": "Disk Used",
                "valueField": "DiskUsedPercentage1",
                "balloonText": "<div style='margin:5px; font-size:12px;'>Host Name:<b>[[host1]]</b></div><br><div style='margin:5px; font-size:12px;'>Disk Used:<b>[[DiskUsed1]]kB, ([[value]]%)</b></div>"
            },{
                "fillAlphas": 0.5,
                "lineAlpha": 0.5,
                "title": "Disk Used",
                "valueField": "DiskUsedPercentage2",
                "balloonText": "<div style='margin:5px; font-size:12px;'>Host Name:<b>[[host2]]</b></div><br><div style='margin:5px; font-size:12px;'>Disk Used:<b>[[DiskUsed2]]kB, ([[value]]%)</b></div>"
            }],
            "chartScrollbar": {
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