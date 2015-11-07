(function()
{

var app = angular.module('App', ['ngRoute']);

app.config(function($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
    'use strict';

    app.controllerProvider  = $controllerProvider;
    app.compileProvider     = $compileProvider;
    app.routeProvider       = $routeProvider;
    app.filterProvider      = $filterProvider;
    app.provide             = $provide;




    $routeProvider
    .when('/', {
        templateUrl: 'main.html',
        controller: 'MainCtrl',
    })
    .when('/cube', {
        templateUrl: '/rubiks-cube/',
        controller: 'CubeCtrl',
        resolve:{deps:function($q, $rootScope) {
            var deferred = $q.defer();
            var deps1 =
            [
                "/rubiks-cube/scripts/three.min.js",
                "/rubiks-cube/scripts/Queue.src.js",
                "/rubiks-cube/scripts/bootstrap.min.js"
            ];

            var deps2 =
            [
                "/rubiks-cube/scripts/index.js",
                "/rubiks-cube/scripts/bootstrap-number-input.js",
                "/rubiks-cube/scripts/cubeGUI-ng-module.js"
            ]

            $script(deps1, function() {
                $script(deps2, function() {
                    $rootScope.$apply(function() {
                        console.log("Start applying digest cycle");
                        deferred.resolve();
                    });
                })
            });

            return deferred.promise;
        }}
    })
    .otherwise({
        redirectTo: '/',
    });
})

})();