angular.module('App')
    .controller('CubeCtrl',
        function CubeCtrl ($scope) {
            'use strict';
            console.log("cube.js loaded");
            $scope.scramble = function(){ call_scramble(); };
            $scope.reset = function(){ call_reset(); };
            $scope.dimension = 3;
            $scope.increment = function(){
                if ($scope.dimension < 7){
                    $scope.dimension += 1;
                    call_reset($scope.dimension);
                }
            }
            $scope.decrement = function(){
                if ($scope.dimension > 2){
                    $scope.dimension -= 1;
                    call_reset($scope.dimension);
                }
            }
        }
    )




