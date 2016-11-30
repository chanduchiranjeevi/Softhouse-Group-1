/**
 * Created by sriku on 2016-11-25.
 */
angular.module('app')

    .controller('ManageController', function($scope, $http, cpuUsageService, diskUsageService, memoryUsageService) {
        var metrics;
        var Time = [];
        var timemax;




        cpuUsageService.list()
            .then(function (response) {
                metrics = response.data;

                $scope.hostnames = Array.from(new Set(metrics.map(function (metric) {
                    return metric.hostName;
                })));

                Time = metrics.map(function(metric){
                    return metric.time;
                });
                $scope.timemax = Time.slice(-1);
    })});
