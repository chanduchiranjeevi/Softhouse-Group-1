/**
 * Created by dell- on 2016/11/9.
 */
angular.module('app', ['ngRoute', 'ngAnimate', 'ngSanitize', 'mgcrea.ngStrap'])
    .factory('cpuUsageService', cpuUsageService)
    .factory('diskUsageService', diskUsageService)
    .factory('memoryUsageService', memoryUsageService)

    .component('navigation', { templateUrl: 'app/navigation/navigation.tpl' })
    .component('introduction', { templateUrl: 'app/introduction/introduction.tpl' })
    .component('contactus', { templateUrl: 'app/contactus/contactus.tpl' })
    .component('monitor', { templateUrl: 'app/monitor/monitor.tpl' })
    .component('login', { templateUrl: 'app/login/login.tpl' })
    .component('cpu', {
        templateUrl: 'app/monitor/cpu/cpu.tpl',
        controller: 'CpuController',

        bindings: {
            onSubmit: '<'
        }
    })
    .component('disk', {
        templateUrl: 'app/monitor/disk/disk.tpl',
        controller: 'DiskController',

        bindings: {
            onSubmit: '<'
        }
    })
    .component('memory', {
        templateUrl: 'app/monitor/memory/memory.tpl',
        controller: 'MemoryController',

        bindings: {
            onSubmit: '<'
        }
    })
    .config(appConfig);