angular.module('App')
    .controller('CubeCtrl',
        function CubeCtrl ($scope) {
            'use strict';

            var head= document.getElementsByTagName('head')[0];
            var script= document.createElement('script');
            script.type= 'text/javascript';
            script.src= 'scripts/cube.js';
            head.appendChild(script);


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




