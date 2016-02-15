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
    $scope.statistikaUcesceUKomb = {};

	$scope.lotoKombinacija = function() {

      $("#statistika").addClass("collapse");

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
      $scope.statistikaUcesceUKomb = {};

	    console.log($scope.sviBrojevi);

	};


  $scope.statistika = function(){

    var dvehiljadejedanaesta = [
      [1, 8, 12, 17, 25, 30, 35],
      [9, 10, 17, 22, 26, 32, 38],
      [14, 15, 23, 28, 29, 32, 34]
    ];
    console.log(dvehiljadejedanaesta);

    $("#statistika").removeClass("collapse");


    function brojPutaA (arr) {
      var komboTemp, arrTemp;
      var counterA = 0;
      var prviA = $scope.sviBrojevi.a;

      console.log("Prvi broj u objektu je: " + prviA);
      //petlja koja ide kroz niz arr
      for(var i = 0; i < arr.length; i++){
        //petlja koja ide kroz niz arr[i]
        for(var x = 0; x < arr[i].length; x++ ){
          arrTemp = arr[i][x];
          console.log("Trenutni broj u nizu je: " + arrTemp);
          if(prviA === arrTemp){
          counterA++;
          console.log("Promenljiva counter za prvi broj u kombinaciji je: " + counterA);
          $scope.statistikaUcesceUKomb.a = counterA;
          }
        }
      }
    };

    brojPutaA(dvehiljadejedanaesta);
    console.log("----------------------------------");


    function brojPutaB (arr) {
      var komboTemp, arrTemp;
      var counterB = 0;
      var prviB = $scope.sviBrojevi.b;

      console.log("Drugi broj u objektu je: " + prviB);
      //petlja koja ide kroz niz arr
      for(var i = 0; i < arr.length; i++){
        //petlja koja ide kroz niz arr[i]
        for(var x = 0; x < arr[i].length; x++ ){
          arrTemp = arr[i][x];
          console.log("Trenutni broj u nizu je: " + arrTemp);
          if(prviB === arrTemp){
          counterB++;
          console.log("Promenljiva counter za drugi broj u kombinaciji je: " + counterB);
          $scope.statistikaUcesceUKomb.b = counterB;
          }
        }
      }
    }


    brojPutaB(dvehiljadejedanaesta);


    console.log("----------------------------------");

    function brojPutaC (arr) {
      var komboTemp, arrTemp;
      var counterC = 0;
      var prviC = $scope.sviBrojevi.c;

      console.log("Treci broj u objektu je: " + prviC);
      //petlja koja ide kroz niz arr
      for(var i = 0; i < arr.length; i++){
        //petlja koja ide kroz niz arr[i]
        for(var x = 0; x < arr[i].length; x++ ){
          arrTemp = arr[i][x];
          console.log("Trenutni broj u nizu je: " + arrTemp);
          if(prviC === arrTemp){
          counterC++;
          console.log("Promenljiva counter za treci broj u kombinaciji je: " + counterC);
          $scope.statistikaUcesceUKomb.c = counterC;
          }
        }
      }
    }


    brojPutaC(dvehiljadejedanaesta);

    console.log("----------------------------------");


    function brojPutaD (arr) {
      var komboTemp, arrTemp;
      var counterD = 0;
      var prviD = $scope.sviBrojevi.d;

      console.log("Cetvrti broj u objektu je: " + prviD);
      //petlja koja ide kroz niz arr
      for(var i = 0; i < arr.length; i++){
        //petlja koja ide kroz niz arr[i]
        for(var x = 0; x < arr[i].length; x++ ){
          arrTemp = arr[i][x];
          console.log("Trenutni broj u nizu je: " + arrTemp);
          if(prviD === arrTemp){
          counterD++;
          console.log("Promenljiva counter za cetvrti broj u kombinaciji je: " + counterD);
          $scope.statistikaUcesceUKomb.d = counterD;
          }
        }
      }
    }


    brojPutaD(dvehiljadejedanaesta);

    console.log("----------------------------------");


    function brojPutaE (arr) {
      var komboTemp, arrTemp;
      var counterE = 0;
      var prviE = $scope.sviBrojevi.e;

      console.log("Peti broj u objektu je: " + prviE);
      //petlja koja ide kroz niz arr
      for(var i = 0; i < arr.length; i++){
        //petlja koja ide kroz niz arr[i]
        for(var x = 0; x < arr[i].length; x++ ){
          arrTemp = arr[i][x];
          console.log("Trenutni broj u nizu je: " + arrTemp);
          if(prviE === arrTemp){
          counterE++;
          console.log("Promenljiva counter za peti broj u kombinaciji je: " + counterE);
          $scope.statistikaUcesceUKomb.e = counterE;
          }
        }
      }
    }


    brojPutaE(dvehiljadejedanaesta);

    console.log("----------------------------------");


    function brojPutaF (arr) {
      var komboTemp, arrTemp;
      var counterF = 0;
      var prviF = $scope.sviBrojevi.f;

      console.log("Sesti broj u objektu je: " + prviF);
      //petlja koja ide kroz niz arr
      for(var i = 0; i < arr.length; i++){
        //petlja koja ide kroz niz arr[i]
        for(var x = 0; x < arr[i].length; x++ ){
          arrTemp = arr[i][x];
          console.log("Trenutni broj u nizu je: " + arrTemp);
          if(prviF === arrTemp){
          counterF++;
          console.log("Promenljiva counter za sesti broj u kombinaciji je: " + counterF);
          $scope.statistikaUcesceUKomb.f = counterF;
          }
        }
      }
    }


    brojPutaF(dvehiljadejedanaesta);


    console.log("----------------------------------");


    function brojPutaG (arr) {
      var komboTemp, arrTemp;
      var counterG = 0;
      var prviG = $scope.sviBrojevi.g;

      console.log("Sedmi broj u objektu je: " + prviG);
      //petlja koja ide kroz niz arr
      for(var i = 0; i < arr.length; i++){
        //petlja koja ide kroz niz arr[i]
        for(var x = 0; x < arr[i].length; x++ ){
          arrTemp = arr[i][x];
          console.log("Trenutni broj u nizu je: " + arrTemp);
          if(prviG === arrTemp){
          counterG++;
          console.log("Promenljiva counter za sedmi broj u kombinaciji je: " + counterG);
          $scope.statistikaUcesceUKomb.g = counterG;
          }
        }
      }
    }

    brojPutaG(dvehiljadejedanaesta);

    console.log("----------------------------------");

  };

  }]);
