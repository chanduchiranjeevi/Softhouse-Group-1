/**
 * Created by dell- on 2016/11/10.
 */
angular.module('app')

    .controller('CpuController', function($scope, $http, cpuUsageService) {

        var metrics;
        var cpuUsage = [];
        var Time = [];
        var host = [];
        $scope.showme = false;
        $scope.selectedHostnames = [];

        cpuUsageService.list()
            .then(function (response) {
                metrics = response.data;

                $scope.hostnames = Array.from(new Set(metrics.map(function (metric) {
                    return metric.hostName;
                })));
            });

        $scope.showTheGraph = function () {
            for (var i = 0; i < $scope.selectedHostnames.length; i++){
                cpuUsageService.listByHostname($scope.selectedHostnames[i])
                    .then(function (response) {
                        $scope.CpuMetrics = response.data;

                        host[i] = $scope.selectedHostnames[i];

                        cpuUsage[i] = $scope.CpuMetrics.map(function (CpuMetric) {
                            return CpuMetric.percentageCpu;
                        });

                        Time[i] = $scope.CpuMetrics.map(function (CpuMetric) {
                            return CpuMetric.time;
                        });
                    });
                chart.dataProvider = generateChartData();
                chart.validateData();
            }
            $scope.showme = true;
        };

        $scope.hideTheGraph = function () {
            $scope.showme = false;
        };

        var chart = AmCharts.makeChart("chartdiv", {
            "type": "serial",
            "theme": "light",
            "marginRight": 80,
            "dataProvider": [],
            "valueAxes": [{
                "stackType": "regular",
                "gridAlpha": 0.07,
                "position": "left",
                "title": "Cpu Usage(%)"
            }],
            "graphs": [{
                "fillAlphas": 0.6,
                "lineAlpha": 0.4,
                "valueField": "CpuUsage0",
                "balloonText": "<div style='margin:5px; font-size:19px;'>Cpu Usage(%):<b>[[value]]</b></div>"
            }, {
                    "fillAlphas": 0.6,
                    "lineAlpha": 0.4,
                    "valueField": "CpuUsage1",
                    "balloonText": "<div style='margin:5px; font-size:19px;'>Cpu Usage(%):<b>[[value]]</b></div>"
            },{
                "fillAlphas": 0.6,
                "lineAlpha": 0.4,
                "valueField": "CpuUsage2",
                "balloonText": "<div style='margin:5px; font-size:19px;'>Cpu Usage(%):<b>[[value]]</b></div>"
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

        function generateChartData() {
            var chartData = [];

            for (var j = 0; j < host.length; j++){
                for (var i = 0; i < Time[j].length; i++) {
                    switch(j){
                        case 0:
                            chartData.push({
                                hostname: host[j],
                                date: Time[j][i],
                                CpuUsage0: cpuUsage[j][i]
                            });
                        case 1:
                            chartData.push({
                                hostname: host[j],
                                date: Time[j][i],
                                CpuUsage1: cpuUsage[j][i]
                            });
                        case 2:
                            chartData.push({
                                hostname: host[j],
                                date: Time[j][i],
                                CpuUsage2: cpuUsage[j][i]
                            });
                    }
                }
            }
            return chartData;
        }

    });