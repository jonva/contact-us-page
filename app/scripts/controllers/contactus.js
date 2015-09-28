'use strict';

/**
 * @ngdoc function
 * @name sapientApp.controller:ContactusCtrl
 * @description
 * # ContactusCtrl
 * Controller of the sapientApp
 */
angular.module('sapientApp')
    .controller('ContactusCtrl', function($scope, carousel) {
        var carouselPromise = carousel.getCarousel();
        carouselPromise.then(function(response) {
            $scope.carouselData = response.data;
            console.log($scope.carouselData);
        });
        $scope.sapients = [{
            "name": "SapientNitro",
            "selected": "false"
        }, {
            "name": "Sapient Global Market",
            "selected": "false"
        }, {
            "name": "Sapient Government Service",
            "selected": "false"
        }, {
            "name": "Sapient (m)PHASISE",
            "selected": "false"
        }];
        $scope.selectAllVal = false;
        $scope.selectAll = function(){
        	angular.forEach($scope.sapients, function (item, i) {
                    if($scope.selectAllVal){
                    	$scope.sapients[i].selected = true;
                    } 
                    else{
                    	$scope.sapients[i].selected = false;
                    }
                });
        };
    });