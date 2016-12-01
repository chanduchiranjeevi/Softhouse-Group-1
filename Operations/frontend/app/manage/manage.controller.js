/**
 * Created by sriku on 2016-11-25.
 */
angular.module('app')

    .controller('ManageController', function($scope, $http, $q, cpuUsageService, diskUsageService, memoryUsageService, $route) {

        var Time = [];
        var cpuHostnames = [];
        var diskHostnames = [];
        var memoryHostnames = [];
        $scope.Cpu = [];
        $scope.Disk = [];
        $scope.Memory = [];

        cpuUsageService.list()
            .then(function (response) {
                var metrics = response.data;

                cpuHostnames = Array.from(new Set(metrics.map(function (metric) {
                    return metric.hostName;
                })));
                var cpuPromises = [];
                for (var i = 0; i < cpuHostnames.length; i++){
                    cpuPromises.push(cpuUsageService.listByHostname(cpuHostnames[i]));
                }
                $q.all(cpuPromises).then(function (response) {
                    for (var i = 0; i < response.length; i++) {
                        var CpuMetrics = response[i].data;

                        Time = CpuMetrics.map(function (CpuMetric) {
                            return CpuMetric.time;
                        });
                        $scope.Cpu.push({
                            host: cpuHostnames[i],
                            LastUpdated: Time.slice(-1)
                        });
                    }
                });
            });

        diskUsageService.list()
            .then(function (response) {
                var metrics = response.data;

                diskHostnames = Array.from(new Set(metrics.map(function (metric) {
                    return metric.hostName;
                })));
                var diskPromises = [];
                for (i = 0; i < diskHostnames.length; i++){
                    diskPromises.push(diskUsageService.listByHostname(diskHostnames[i]));
                }
                $q.all(diskPromises).then(function (response) {
                    for (var i = 0; i < response.length; i++) {
                        var DiskMetrics = response[i].data;

                        Time = DiskMetrics.map(function (DiskMetric) {
                            return DiskMetric.time;
                        });
                        $scope.Disk.push({
                            host: diskHostnames[i],
                            LastUpdated: Time.slice(-1)
                        });
                    }
                });
            });

        memoryUsageService.list()
            .then(function (response) {
                var metrics = response.data;

                memoryHostnames = Array.from(new Set(metrics.map(function (metric) {
                    return metric.hostName;
                })));
                var memoryPromises = [];
                for (i = 0; i < memoryHostnames.length; i++){
                    memoryPromises.push(memoryUsageService.listByHostname(memoryHostnames[i]));
                }
                $q.all(memoryPromises).then(function (response) {
                    for (var i = 0; i < response.length; i++) {
                        var MemoryMetrics = response[i].data;

                        Time = MemoryMetrics.map(function (MemoryMetric) {
                            return MemoryMetric.time;
                        });
                        $scope.Memory.push({
                            host: memoryHostnames[i],
                            LastUpdated: Time.slice(-1)
                        });
                    }
                });
            });

        $scope.deleteTheCpuServer = function(cpu) {
            cpuHostnames.splice(cpu.host, 1);
            cpuUsageService.destroy(cpu.host);
            $route.reload();
        };

        $scope.deleteTheDiskServer = function(disk) {
            diskHostnames.splice(disk.host, 1);
            diskUsageService.destroy(disk.host);
            $route.reload();
        };

        $scope.deleteTheMemoryServer = function(memory) {
            memoryHostnames.splice(memory.host, 1);
            memoryUsageService.destroy(memory.host);
            $route.reload();
        };
    });