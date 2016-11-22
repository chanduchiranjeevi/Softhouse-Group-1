/**
 * Created by dell- on 2016/11/10.
 */
angular.module('app')

    .controller('CpuController', function($scope, $http, cpuUsageService) {

        var metrics;
        var cpuUsage;
        var Time;

        cpuUsageService.list()
            .then(function (response) {
                metrics = response.data;

                $scope.hostnames = Array.from(new Set(metrics.map(function(metric) {
                    return metric.hostName;
                })));

                cpuUsage = metrics.map(function(metric){
                    return metric.percentageCpu;
                });

                Time = metrics.map(function(metric){
                    return metric.time;
                });
                chart.dataProvider = generateChartData();
                chart.validateData();
                return response;
            });

        $scope.selectedHostnames = ["srikanth-VirtualBox"];

        var chart = AmCharts.makeChart("chartdiv", {
            "type": "serial",
            "theme": "none",
            "marginRight": 80,
            "dataProvider": [],
            "valueAxes": [{
                "position": "left",
                "title": "Cpu Usage(%)"
            }],
            "graphs": [{
                "id": "g1",
                "fillAlphas": 0.4,
                "valueField": "CpuUsage",
                "type": "smoothedLine",
                "balloonText": "<div style='margin:5px; font-size:19px;'>Cpu Usage(%):<b>[[value]]</b></div>"
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

            for (var i = 0; i < Time.length; i++) {

                chartData.push({
                    date: Time[i],
                    CpuUsage: cpuUsage[i]
                });
            }
            return chartData;
        }

    });