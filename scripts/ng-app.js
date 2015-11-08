(function()
{

var app = angular.module('App', ['ngRoute']);

app.config(function($routeProvider) {
    'use strict';


    $routeProvider
    .when('/', {
        templateUrl: 'main.html',
        controller: 'MainCtrl',
    })
    .when('/cube', {
        templateUrl: 'cube.html',
        controller: 'CubeCtrl',
        resolve:{deps:function($q, $rootScope) {
            var deferred = $q.defer();
            var deps1 =
            [
                "lib/three.min.js",
                "lib/Queue.src.js",
                "lib/bootstrap.min.js"
            ];

            $script(deps1, function() {
                    $rootScope.$apply(function() {
                        deferred.resolve();
                    });
            });

            return deferred.promise;
        }}
    })
    .otherwise({
        redirectTo: '/',
    });
})

})();