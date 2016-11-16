/**
 * Created by dell- on 2016/11/10.
 */
angular.module('app')

    .controller('CpuController', function($scope, $http, cpuUsageService) {

        cpuUsageService.list()
            .then(function (response) {
                var metrics = response.data;

                $scope.hostnames = Array.from(new Set(metrics.map(function(metric) {
                    return metric.hostName;
                })));
            });

        $scope.selectedHostnames = [];
    });