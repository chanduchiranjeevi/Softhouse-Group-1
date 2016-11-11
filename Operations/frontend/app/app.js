/**
 * Created by dell- on 2016/11/9.
 */
angular.module('app', ['ngRoute','ngAnimate', 'ngSanitize', 'mgcrea.ngStrap'])
   // .factory('projectService',projectService)

    .component('navigation', { templateUrl: 'app/navigation/navigation.tpl' })
    .component('introduction', { templateUrl: 'app/introduction/introduction.tpl' })
    .component('contactus', { templateUrl: 'app/contactus/contactus.tpl' })
    .component('monitor', { templateUrl: 'app/monitor/monitor.tpl' })
    .component('login', { templateUrl: 'app/login/login.tpl' })
    .component('cpu', { templateUrl: 'app/monitor/cpu/cpu.tpl' })
    .component('disk', { templateUrl: 'app/monitor/disk/disk.tpl' })
    .component('memory', { templateUrl: 'app/monitor/memory/memory.tpl' })
    .config(appConfig);