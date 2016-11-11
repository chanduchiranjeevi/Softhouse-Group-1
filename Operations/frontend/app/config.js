/**
 * Created by sriku on 2016-11-11.
 */

function appConfig($routeProvider) {
    $routeProvider
        .when('/', { template: '<introduction></introduction>' })
        .when('/monitor', { template: '<monitor></monitor>' })
        .when('/contactus', { template: '<contactus></contactus>' })
        .when('/login', { template: '<login></login>' })
        .otherwise({
            redirectTo: '/'
        })
}