angular.module('App')
    .controller('MainCtrl',
        function MainCtrl ($scope) {
            'use strict';
            console.log("main.js loaded");
            $("canvas").remove();
        }
    );