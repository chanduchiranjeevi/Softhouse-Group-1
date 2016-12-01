/**
 * Created by dell- on 2016/11/10.
 */
angular.module('app')

    .controller('CpuController', function($scope, $http, $q, $filter, cpuUsageService) {
        var metrics;
        var i;
        var j;
        var match = false;
        $scope.showGraph = false;
        $scope.selectedHostnames = [];

        cpuUsageService.list()
            .then(function (response) {
                metrics = response.data;

                $scope.hostnames = Array.from(new Set(metrics.map(function (metric) {
                    return metric.hostName;
                })));
            });

        $scope.showTheGraph = function () {
            $scope.chartData = [];
            var promises = [];
            for (i = 0; i < $scope.selectedHostnames.length; i++){
                promises.push(cpuUsageService.listByHostname($scope.selectedHostnames[i]));
            }
            $q.all(promises).then(function (response) {
                for (var i = 0; i < response.length; i++) {
                    var CpuMetrics = response[i].data;
                    var cpuUsage = [];
                    var Time = [];
                    cpuUsage = CpuMetrics.map(function (CpuMetric) {
                        return CpuMetric.percentageCpu;
                    });

                    Time = CpuMetrics.map(function (CpuMetric) {
                        return CpuMetric.time;
                    });

                    if (response.length == 1){
                        for (j = 0; j < Time.length; j++) {
                            Time[j] = $filter('date')(Time[j],"yyyy-MM-dd HH:mm");
                            $scope.chartData.push({
                                date: Time[j],
                                host0: $scope.selectedHostnames[0],
                                CpuUsage0: cpuUsage[j]
                            });
                        }
                    }
                    else if (response.length == 2){
                        if (i == 0) {
                            for (j = 0; j < Time.length; j++) {
                                Time[j] = $filter('date')(Time[j],"yyyy-MM-dd HH:mm");
                                $scope.chartData.push({
                                    date: Time[j],
                                    host0: $scope.selectedHostnames[0],
                                    CpuUsage0: cpuUsage[j],
                                    host1: $scope.selectedHostnames[1],
                                    CpuUsage1: 0
                                });
                            }
                        }
                        else if (i == 1){
                            for (j = 0; j < Time.length; j++) {
                                Time[j] = $filter('date')(Time[j],"yyyy-MM-dd HH:mm");
                                for (k = 0; k < $scope.chartData.length; k++) {
                                    if (Time[j] == $scope.chartData[k].date) {
                                        match = true;
                                        $scope.chartData[k].CpuUsage1 = cpuUsage[j];
                                        break;
                                    }
                                }
                                if (match == false) {
                                    $scope.chartData.push({
                                        date: Time[j],
                                        host0: $scope.selectedHostnames[0],
                                        CpuUsage0: 0,
                                        host1: $scope.selectedHostnames[1],
                                        CpuUsage1: cpuUsage[j]
                                    });
                                } else {
                                    match = false;
                                }
                            }
                        }
                    }
                    else if (response.length == 3){
                        if (i == 0) {
                            for (j = 0; j < Time.length; j++) {
                                Time[j] = $filter('date')(Time[j],"yyyy-MM-dd HH:mm");
                                $scope.chartData.push({
                                    date: Time[j],
                                    host0: $scope.selectedHostnames[0],
                                    CpuUsage0: cpuUsage[j],
                                    host1: $scope.selectedHostnames[1],
                                    CpuUsage1: 0,
                                    host2: $scope.selectedHostnames[2],
                                    CpuUsage2: 0
                                });
                            }
                        }
                        else if (i == 1){
                            for (j = 0; j < Time.length; j++) {
                                Time[j] = $filter('date')(Time[j],"yyyy-MM-dd HH:mm");
                                for (var k = 0; k < $scope.chartData.length; k++) {
                                    if (Time[j] == $scope.chartData[k].date) {
                                        match = true;
                                        $scope.chartData[k].CpuUsage1 = cpuUsage[j];
                                        break;
                                    }
                                }
                                if (match == false) {
                                    $scope.chartData.push({
                                        date: Time[j],
                                        host0: $scope.selectedHostnames[0],
                                        CpuUsage0: 0,
                                        host1: $scope.selectedHostnames[1],
                                        CpuUsage1: cpuUsage[j],
                                        host2: $scope.selectedHostnames[2],
                                        CpuUsage2: 0
                                    });
                                } else {
                                    match = false;
                                }
                            }
                        }
                        else if (i == 2) {
                            for (j = 0; j < Time.length; j++) {
                                Time[j] = $filter('date')(Time[j],"yyyy-MM-dd HH:mm");
                                for (k = 0; k < $scope.chartData.length; k++) {
                                    if (Time[j] == $scope.chartData[k].date) {
                                        match = true;
                                        $scope.chartData[k].CpuUsage2 = cpuUsage[j];
                                        break;
                                    }
                                }
                                if (match == false) {
                                    $scope.chartData.push({
                                        date: Time[j],
                                        host0: $scope.selectedHostnames[0],
                                        CpuUsage0: 0,
                                        host1: $scope.selectedHostnames[1],
                                        CpuUsage1: 0,
                                        host2: $scope.selectedHostnames[2],
                                        CpuUsage2: cpuUsage[j]
                                    });
                                } else {
                                    match = false;
                                }
                            }
                        }
                    }
                }
                $scope.showGraph = true;
                chart.dataProvider = $scope.chartData;
                chart.validateData();
            });
        };

        $scope.hideTheGraph = function () {
            $scope.showGraph = false;
            $scope.selectedHostnames = [];
        };

        var chart = AmCharts.makeChart("chartdiv", {
            "type": "serial",
            "theme": "none",
            "marginRight": 30,
            "dataProvider": [],
            "valueAxes": [{
                "minimum":0,
                "maximum":100,
                "gridAlpha": 0.07,
                "position": "left",
                "title": "Cpu Usage(%)"
            }],
            "graphs": [{
                "fillAlphas": 0.6,
                "lineAlpha": 0.4,
                "valueField": "CpuUsage0",
                "balloonText": "<div style='margin:5px; font-size:12px;'>Host Name:<b>[[host0]]</b></div><div style='margin:5px; font-size:12px;'>Cpu Usage(%):<b>[[value]]</b></div>"
            }, {
                "fillAlphas": 0.6,
                "lineAlpha": 0.4,
                "valueField": "CpuUsage1",
                "balloonText": "<div style='margin:5px; font-size:12px;'>Host Name:<b>[[host1]]</b></div><div style='margin:5px; font-size:12px;'>Cpu Usage(%):<b>[[value]]</b></div>"
            },{
                "fillAlphas": 0.6,
                "lineAlpha": 0.4,
                "valueField": "CpuUsage2",
                "balloonText": "<div style='margin:5px; font-size:12px;'>Host Name:<b>[[host2]]</b></div><div style='margin:5px; font-size:12px;'>Cpu Usage(%):<b>[[value]]</b></div>"
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