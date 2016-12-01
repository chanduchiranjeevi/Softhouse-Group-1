/**
 * Created by sriku on 2016-11-11.
 */

function appConfig($routeProvider) {
    $routeProvider
        .when('/', { template: '<introduction></introduction>' })
        .when('/contactus', { template: '<contactus></contactus>' })
        .when('/manage', { template: '<manage></manage>' })
        .when('/login', { template: '<login></login>' })
        .otherwise({
            redirectTo: '/'
        })
}