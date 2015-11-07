angular.module('App')
    .controller('CubeCtrl',
        function CubeCtrl ($scope) {
            'use strict';
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
            $scope.$on("$destroy", function(){
                console.log("Destroying this template");
                clear_scene();
                var gl = $("canvas")[0].getContext("webgl");
                gl.clearColor(1, 1, 1, 1);
                gl.clear(gl.COLOR_BUFFER_BIT);
            });
        }
    )




