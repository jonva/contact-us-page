'use strict';

/**
 * @ngdoc service
 * @name sapientApp.carousel
 * @description
 * # carousel
 * Service in the sapientApp.
 */
angular.module('sapientApp')
  .service('carousel', function ($http, $q) {
    this.getCarousel = function(){
	    var deferred = $q.defer();
	    $http.get('/data/carousel.json').
				then(function(carouselData) {
		        	deferred.resolve(carouselData);
		    	},function(reason){
                    deferred.reject(reason);
            });
		return deferred.promise;
    };
  });