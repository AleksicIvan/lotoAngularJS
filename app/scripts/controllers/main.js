'use strict';

/**
 * @ngdoc function
 * @name lotoratorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lotoratorApp
 */
angular.module('lotoratorApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
  	
  	$scope.sviBrojevi = {};

	$scope.lotoKombinacija = function() {
	  	
	  	(function slBrA(min, max) {
	    	min = 1;
	    	max = 40;
	    	var A = Math.floor(Math.random() * (max - min)) + min; 
	        $scope.sviBrojevi.a = A;
	    })();


		    (function slBrB(min, max) {
		    	min = 1;
		    	max = 40;
		    	var B = Math.floor(Math.random() * (max - min)) + min; 
		        if ($scope.sviBrojevi.a !== B) {
		        	$scope.sviBrojevi.b = B;
		        } else {
		        	 slBrB();
		        }
		    })();

		    (function slBrC(min, max) {
		    	min = 1;
		    	max = 40;
		    	var C = Math.floor(Math.random() * (max - min)) + min; 
		        if ($scope.sviBrojevi.a !== C && $scope.sviBrojevi.b !== C) {
		        	$scope.sviBrojevi.c = C;
		        } else {
		        	 slBrC();
		        }
		    })();

		    (function slBrD(min, max) {
		    	min = 1;
		    	max = 40;
		    	var D = Math.floor(Math.random() * (max - min)) + min; 
		        if ($scope.sviBrojevi.a !== D && $scope.sviBrojevi.b !== D && $scope.sviBrojevi.c !== D) {
		        	$scope.sviBrojevi.d = D;
		        } else {
		        	 slBrD();
		        }
		    })();

		    (function slBrE(min, max) {
		    	min = 1;
		    	max = 40;
		    	var E = Math.floor(Math.random() * (max - min)) + min; 
		        if ($scope.sviBrojevi.a !== E && $scope.sviBrojevi.b !== E && $scope.sviBrojevi.c !== E && $scope.sviBrojevi.d !== E) {
		        	$scope.sviBrojevi.e = E;
		        } else {
		        	 slBrE();
		        }
		    })();

		    (function slBrF(min, max) {
		    	min = 1;
		    	max = 40;
		    	var F = Math.floor(Math.random() * (max - min)) + min; 
		        if ($scope.sviBrojevi.a !== F && $scope.sviBrojevi.b !== F && $scope.sviBrojevi.c !== F && $scope.sviBrojevi.d !== F && $scope.sviBrojevi.e !== F) {
		        	$scope.sviBrojevi.f = F;
		        } else {
		        	 slBrF();
		        }
		    })();

		    (function slBrG(min, max) {
		    	min = 1;
		    	max = 40;
		    	var G = Math.floor(Math.random() * (max - min)) + min; 
		        if ($scope.sviBrojevi.a !== G && $scope.sviBrojevi.b !== G && $scope.sviBrojevi.c !== G && $scope.sviBrojevi.d !== G && $scope.sviBrojevi.e !== G && $scope.sviBrojevi.f !== G) {
		        	$scope.sviBrojevi.g = G;
		        } else {
		        	 slBrG();
		        }
		    })();

	    console.log($scope.sviBrojevi);

	};
	    
 }]);

 
