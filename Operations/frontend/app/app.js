/**
 * Created by dell- on 2016/11/9.
 */
angular.module('app', ['ngRoute','ngAnimate', 'ngSanitize', 'mgcrea.ngStrap'])
   // .factory('projectService',projectService)
    .component('navigation', { templateUrl: 'app/navigation/navigation.tpl' })
    .component('introduction', { templateUrl: 'app/introduction/introduction.tpl' })
    .component('contactus', { templateUrl: 'app/contactus/contactus.tpl' })
    .component('home', { templateUrl: 'app/home/home.tpl' })
    .component('login', { templateUrl: 'app/login/login.tpl' })
    .component('cpu', { templateUrl: 'app/home/cpu/cpu.tpl' })
    .component('disk', { templateUrl: 'app/home/disk/disk.tpl' })
    .component('memory', { templateUrl: 'app/home/memory/memory.tpl' })
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', { template: '<home></home>' })
            .when('/introduction', { template: '<introduction></introduction>' })
            .when('/contactus', { template: '<contactus></contactus>' })
            .when('/login', { template: '<login></login>' })
            .otherwise({
                redirectTo: '/'
            })
    }
    ]);