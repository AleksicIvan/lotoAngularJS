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
  $scope.procenatUcesca = {};

    $scope.lotoKombinacija = function() {

      document.getElementById('statistika').className = 'collapse';

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
        //console.log($scope.sviBrojevi);
    };


  $scope.statistika = function(){

    var sveKomb = [
        [1, 8, 12, 17, 25, 30, 35], [9, 10, 17, 22, 26, 32, 38], [14, 15, 23, 28, 29, 32, 34], [20, 31, 32, 34, 36, 37, 39], [7, 16, 19, 31, 33, 34, 35], [15, 18, 20, 22, 27, 30, 33], [4, 7, 8, 9, 14, 19, 27,], [2, 8, 13, 15, 16, 19, 26], [7, 10, 13, 15, 25, 27, 37], [3, 4, 15, 25, 31, 35, 38], [6, 8, 9, 12, 15, 18, 21], [2, 14, 18, 25, 28, 31, 36], [12, 23, 24, 25, 27, 37, 38], [1, 2, 6, 12, 24, 32, 36], [1, 19, 23, 25, 29, 36, 39], [1, 3, 6, 7, 11, 14, 34], [3, 5, 7, 10, 24, 28, 36], [2, 6, 10, 17, 22, 30, 34], [8, 11, 28, 31, 32, 33, 34], [2, 6, 16, 17, 28, 37, 38], [4, 9, 11, 14, 32, 36, 37], [2, 3, 4, 6, 28, 35, 39], [4, 6, 13, 18, 23, 33, 37], [4, 18, 20, 28, 30, 32, 37], [12, 15, 19, 20, 21, 27, 36], [4, 14, 19, 26, 29, 30, 38], [3, 4, 5, 8, 10, 14, 37], [5, 19, 20, 29, 32, 34, 38], [2, 4, 10, 19, 22, 33, 35], [4, 5, 7, 12, 19, 20, 34], [2, 7, 17, 20, 21, 25, 32], [9, 15, 17, 19, 31, 36, 39], [3, 4, 8, 15, 18, 26, 29], [3, 6, 19, 22, 24, 26, 30], [3, 6, 19, 22, 24, 26, 30], [5, 9, 13, 21, 22, 29, 38], [11, 13, 18, 19, 20, 22, 26], [2, 5, 7, 8, 23, 29, 39], [4, 7, 13, 20, 21, 34, 38], [2, 4, 6, 21, 32, 33, 38], [2, 4, 6, 21, 32, 33, 38], [6, 7, 9, 12, 23, 29, 36], [2, 3, 10, 11, 19, 20, 24], [2, 6, 7, 9, 10, 25, 35], [6, 8, 14, 15, 29, 31, 32], [11, 15, 19, 24, 27, 30, 31], [8, 13, 26, 27, 29, 31, 38], [10, 16, 17, 29, 31, 32, 39], [2, 5, 14, 28, 29, 30, 36], [8, 16, 19, 20, 25, 29, 33], [20, 26, 27, 32, 36, 37, 38], [2, 7, 8, 17, 24, 31, 39], [6, 8, 13, 15, 23, 26, 34], [2, 7, 11, 12, 19, 34, 37], [11, 14, 21, 32, 35, 38, 39], [1, 3, 10, 15, 16, 18, 38], [1, 7, 16, 29, 32, 33, 37], [3, 4, 5, 9, 23, 35, 38], [5, 9, 18, 22, 24, 30, 39], [7, 8, 10, 11, 26, 31, 35], [9, 15, 16, 22, 28, 35, 36], [5, 15, 18, 19, 25, 33, 35], [4, 8, 9, 12, 14, 20, 28], [4, 10, 20, 23, 24, 25, 30], [7, 10, 12, 19, 25, 26, 32], [6, 13, 14, 15, 17, 20, 29], [6, 11, 19, 22, 24, 25, 39], [3, 11, 13, 14, 17, 18, 28], [7, 12, 14, 19, 24, 25, 29], [5, 7, 11, 22, 30, 32, 39], [1, 13, 16, 27, 28, 32, 38], [9, 12, 25, 26, 30, 31, 32], [1, 2, 13, 15, 16, 23, 31], [7, 12, 13, 20, 23, 33, 39], [4, 19, 23, 30, 34, 35, 36], [2, 6, 8, 27, 31, 33, 34], [2, 8, 14, 19, 21, 24, 30], [2, 10, 27, 30, 32, 33, 39], [2, 3, 5, 7, 8, 11, 16], [7, 10, 21, 22, 25, 26, 32], [1, 7, 10, 20, 23, 26, 30], [13, 14, 18, 26, 30, 36, 39], [1, 7, 12, 28, 32, 33, 38], [3, 13, 24, 31, 37, 38, 39], [6, 19, 21, 22, 27, 33, 37], [3, 18, 20, 23, 25, 28, 29], [1, 11, 18, 21, 26, 32, 37], [1, 4, 8, 13, 19, 22, 32], [4, 9, 11, 20, 23, 28, 32], [2, 3, 17, 20, 23, 25, 34], [5, 12, 13, 14, 26, 31, 33], [8, 14, 18, 23, 24, 28, 37], [2, 5, 14, 20, 22, 25, 34], [1, 2, 4, 12, 15, 34, 37], [9, 13, 14, 21, 23, 30, 31], [2, 8, 10, 14, 22, 25, 34], [9, 13, 24, 29, 32, 35, 37], [4, 5, 14, 18, 24, 37, 38], [3, 6, 13, 18, 21, 32, 38], [6, 10, 13, 19, 31, 33, 36], [1, 2, 13, 14, 25, 33, 34], [5, 8, 10, 21, 28, 29, 38], [3, 10, 11, 17, 18, 25, 27], [5, 8, 9, 21, 33, 34, 38], [9, 11, 12, 18, 20, 26, 35], [10, 13, 15, 20, 21, 25, 35], [1, 8, 17, 21, 22, 27, 34], [10, 13, 17, 18, 21, 29, 37], [5, 8, 12, 17, 19, 21, 37], [2, 15, 18, 24, 27, 34, 35], [1, 7, 19, 20, 25, 37, 39], [4, 10, 12, 14, 23, 25, 27], [6, 16, 22, 27, 31, 32, 39], [1, 6, 8, 20, 28, 29, 37], [9, 10, 13, 19, 23, 29, 35], [7, 10, 19, 24, 28, 31, 38], [5, 12, 16, 27, 32, 38, 39], [1, 5, 23, 28, 30, 36, 37], [4, 9, 11, 17, 19, 26, 29], [15, 17, 24, 26, 33, 36, 39], [3, 14, 15, 16, 26, 27, 36], [9, 15, 20, 23, 24, 29, 33], [1, 4, 5, 17, 18, 19, 39], [3, 8, 11, 24, 27, 28, 29], [6, 11, 19, 30, 32, 34, 36], [1, 3, 11, 12, 15, 16, 36], [1, 4, 7, 12, 22, 24, 39], [1, 2, 13, 15, 29, 35, 36], [7, 10, 14, 15, 28, 29, 38], [2, 6, 9, 16, 22, 33, 37], [4, 5, 10, 11, 23, 31, 39], [6, 11, 14, 23, 28, 34, 35], [8, 10, 11, 13, 17, 23, 25], [16, 19, 24, 27, 28, 30, 33], [2, 7, 13, 16, 20, 31, 38], [1, 11, 26, 29, 30, 35, 39], [7, 9, 12, 24, 27, 28, 30], [4, 10, 21, 22, 23, 35, 37], [5, 10, 12, 16, 20, 21, 24], [9, 20, 22, 31, 32, 33, 38], [8, 16, 27, 31, 32, 35, 37], [3, 5, 9, 16, 21, 27, 33], [3, 10, 18, 20, 22, 34, 38], [6, 8, 14, 17, 23, 26, 35], [4, 19, 23, 33, 34, 36, 38], [6, 10, 11, 19, 21, 29, 30], [6, 9, 20, 23, 34, 36, 37], [8, 9, 11, 25, 26, 28, 34], [1, 9, 16, 24, 29, 32, 39], [5, 6, 7, 8, 14, 21, 28], [6, 7, 10, 17, 25, 38, 39], [13, 14, 28, 30, 31, 37, 39], [7, 10, 12, 16, 21, 22, 33], [2, 11, 13, 14, 22, 31, 37], [7, 12, 17, 21, 31, 32, 38], [2, 8, 9, 11, 20, 23, 36], [6, 23, 26, 29, 30, 34, 35], [3, 7, 8, 13, 18, 28, 36], [14, 15, 18, 20, 21, 26, 35], [10, 13, 21, 29, 32, 35, 36], [9, 13, 14, 26, 31, 38, 39], [7, 10, 23, 25, 31, 32, 39], [2, 10, 12, 30, 36, 37, 39], [17, 25, 27, 31, 32, 36, 37], [3, 5, 7, 12, 19, 33, 39], [14, 16, 19, 23, 26, 31, 36], [2, 7, 10, 14, 23, 26, 32], [8, 14, 18, 20, 22, 25, 30], [1, 7, 17, 20, 22, 30, 38], [3, 7, 10, 20, 26, 34, 39], [1, 2, 6, 8, 19, 28, 32], [7, 9, 15, 16, 18, 19, 31], [2, 5, 9, 15, 25, 29, 38], [6, 12, 13, 17, 27, 28, 39], [12, 15, 16, 19, 22, 36, 38], [3, 7, 15, 18, 26, 27, 28], [1, 2, 4, 6, 13, 32, 37], [2, 12, 19, 25, 34, 36, 39], [2, 4, 9, 17, 27, 30, 36], [8, 16, 18, 20, 24, 35, 36], [2, 8, 12, 13, 14, 15, 16], [7, 11, 14, 23, 26, 33, 34], [1, 4, 14, 15, 17, 24, 34], [1, 6, 10, 23, 24, 27, 28], [1, 2, 7, 15, 25, 31, 33], [3, 6, 18, 21, 31, 34, 39], [3, 8, 11, 12, 17, 37, 38], [2, 4, 8, 13, 23, 28, 30], [7, 10, 22, 27, 29, 34, 38], [2, 5, 6, 9, 19, 23, 37], [5, 9, 14, 22, 27, 28, 36], [1, 8, 21, 24, 34, 38, 39], [7, 15, 18, 26, 32, 37, 38], [7, 10, 13, 21, 27, 36, 37], [1, 9, 13, 16, 22, 37, 39], [3, 11, 17, 21, 27, 34, 37], [9, 15, 18, 23, 27, 33, 37], [2, 3, 5, 9, 20, 29, 31], [4, 6, 22, 27, 28, 37, 39], [8, 15, 20, 22, 26, 27, 34], [9, 12, 13, 17, 19, 22, 34], [1, 5, 7, 13, 14, 23, 28], [9, 13, 16, 21, 24, 37, 38], [6, 16, 17, 21, 22, 37, 38], [7, 12, 15, 24, 35, 36, 39], [6, 8, 9, 17, 20, 34, 37], [2, 18, 21, 23, 25, 28, 34], [2, 4, 11, 15, 26, 35, 37], [5, 6, 7, 23, 25, 29, 37], [5, 6, 13, 30, 33, 37, 39], [3, 5, 8, 21, 23, 26, 35], [3, 10, 12, 18, 22, 28, 32], [2, 14, 15, 18, 29, 31, 38], [8, 13, 18, 24, 28, 33, 35], [8, 16, 31, 34, 36, 37, 39], [1, 15, 16, 19, 28, 33, 39], [3, 8, 15, 19, 22, 25, 28], [4, 10, 14, 24, 25, 28, 38], [2, 3, 6, 19, 21, 25, 31], [4, 7, 9, 11, 13, 17, 34], [14, 17, 23, 27, 32, 33, 34], [9, 10, 12, 16, 23, 29, 37], [7, 11, 15, 31, 32, 37, 39], [6, 22, 27, 30, 31, 35, 39], [5, 6, 14, 21, 29, 36, 37], [2, 17, 18, 22, 30, 38, 39], [6, 7, 8, 17, 26, 27, 37], [1, 7, 8, 9, 10, 18, 37], [6, 7, 18, 20, 25, 28, 30], [10, 13, 15, 30, 31, 33, 37], [10, 21, 23, 24, 31, 32, 39], [4, 5, 16, 28, 29, 35, 38], [1, 2, 18, 20, 29, 31, 37], [3, 6, 10, 19, 23, 26, 36], [12, 13, 14, 25, 31, 32, 34], [3, 5, 15, 21, 24, 30, 35], [22, 24, 27, 30, 32, 34, 35], [3, 13, 18, 21, 24, 27, 36], [4, 5, 11, 18, 25, 31, 32], [3, 7, 8, 14, 16, 19, 28], [5, 8, 9, 10, 19, 22, 25], [9, 11, 12, 16, 30, 34, 37], [1, 21, 25, 28, 32, 34, 37], [8, 9, 10, 14, 18, 31, 32], [1, 9, 10, 11, 15, 16, 29], [5, 17, 21, 28, 31, 32, 37], [7, 17, 18, 21, 26, 27, 30], [6, 12, 17, 27, 32, 34, 36], [4, 6, 8, 14, 19, 26, 36], [8, 9, 17, 24, 29, 36, 38], [7, 9, 13, 20, 22, 23, 26], [4, 5, 9, 13, 14, 18, 22], [14, 17, 21, 24, 25, 32, 39], [2, 6, 13, 27, 31, 33, 37], [4, 5, 7, 11, 22, 29, 34], [9, 17, 21, 22, 24, 29, 39], [4, 9, 13, 24, 26, 30, 39], [2, 8, 12, 16, 20, 21, 25], [8, 13, 19, 27, 28, 33, 39], [10, 13, 22, 24, 28, 32, 39], [8, 11, 20, 33, 34, 38, 39], [3, 9, 10, 12, 15, 19, 22], [2, 8, 11, 33, 35, 36, 37], [1, 7, 8, 16, 20, 33, 38], [10, 13, 18, 19, 21, 25, 33], [7, 15, 21, 22, 23, 33, 39], [5, 8, 11, 23, 24, 35, 38], [7, 8, 9, 14, 16, 29, 36], [1, 3, 4, 12, 27, 37, 39], [4, 9, 12, 25, 30, 32, 35], [3, 10, 12, 16, 17, 27, 36], [1, 20, 27, 33, 35, 37, 38], [6, 28, 29, 31, 35, 36, 38], [8, 12, 15, 28, 32, 33, 34], [6, 11, 13, 28, 31, 35, 37], [3, 5, 7, 16, 17, 19, 35], [14, 21, 22, 23, 28, 29, 35], [1, 9, 10, 19, 21, 26, 38], [3, 13, 15, 21, 24, 27, 35], [3, 14, 22, 30, 32, 36, 39], [1, 12, 21, 26, 28, 32, 35], [10, 12, 14, 22, 23, 34, 38], [4, 7, 9, 12, 34, 38, 39], [8, 15, 17, 24, 29, 30, 33], [11, 21, 23, 25, 26, 29, 39], [8, 15, 18, 20, 29, 30, 34], [1, 2, 24, 26, 29, 34, 38], [7, 10, 17, 18, 29, 33, 34], [3, 5, 12, 14, 17, 25, 34], [1, 2, 8, 18, 23, 33, 37], [4, 7, 8, 14, 29, 31, 38], [6, 13, 17, 20, 23, 31, 39], [4, 6, 11, 12, 23, 31, 35], [1, 11, 13, 21, 29, 35, 36], [3, 8, 13, 18, 20, 28, 32], [18, 19, 21, 22, 26, 37, 38], [3, 6, 9, 13, 19, 20, 27], [4, 13, 25, 31, 34, 35, 36], [8, 9, 14, 20, 22, 23, 24], [9, 10, 14, 15, 20, 24, 30], [8, 15, 17, 18, 26, 37, 39], [1, 2, 10, 12, 16, 30, 39], [1, 5, 6, 16, 21, 35, 37], [5, 13, 17, 29, 32, 36, 38], [5, 10, 19, 28, 31, 35, 38], [1, 3, 15, 18, 24, 28, 31], [4, 7, 9, 11, 16, 17, 33], [2, 4, 5, 8, 23, 29, 30], [3, 4, 6, 16, 22, 27, 28], [2, 3, 6, 15, 21, 25, 30], [3, 8, 17, 21, 23, 32, 35], [5, 9, 21, 24, 29, 31, 36], [1, 8, 11, 18, 23, 28, 37], [6, 12, 13, 16, 26, 27, 29], [10, 11, 13, 14, 29, 32, 35], [1, 3, 8, 12, 15, 24, 38], [1, 19, 21, 22, 27, 33, 34], [3, 6, 8, 9, 17, 26, 29], [4, 9, 15, 20, 24, 31, 36], [2, 4, 13, 16, 24, 33, 34], [5, 15, 18, 25, 30, 36, 37], [2, 4, 14, 19, 27, 32, 36], [3, 9, 23, 24, 25, 33, 38], [1, 5, 24, 28, 31, 35, 37], [18, 19, 20, 28, 31, 35, 36], [14, 19, 23, 26, 27, 28, 35], [2, 14, 22, 31, 33, 34, 37], [3, 9, 11, 21, 26, 32, 36], [6, 9, 15, 25, 30, 36, 39], [2, 5, 23, 24, 28, 37, 38], [1, 7, 11, 20, 21, 23, 26], [1, 8, 9, 20, 21, 30, 32], [1, 9, 10, 17, 21, 22, 38], [5, 9, 12, 13, 14, 26, 32], [7, 9, 15, 16, 24, 26, 38], [11, 17, 23, 30, 35, 37, 38], [1, 4, 7, 10, 15, 17, 22], [4, 5, 6, 16, 23, 35, 36], [7, 9, 16, 20, 29, 33, 37], [1, 6, 21, 25, 26, 31, 33], [7, 9, 21, 24, 25, 27, 37], [3, 4, 7, 8, 24, 28, 39], [4, 5, 6, 7, 12, 28, 33], [6, 14, 15, 20, 22, 26, 33], [10, 20, 23, 26, 31, 33, 34], [3, 5, 9, 18, 19, 34, 36], [7, 11, 13, 14, 15, 34, 35], [6, 8, 13, 16, 26, 28, 35], [14, 19, 20, 21, 30, 32, 37], [9, 10, 14, 20, 22, 31, 39], [11, 13, 22, 24, 25, 31, 38], [4, 11, 16, 17, 33, 34, 37], [5, 11, 12, 20, 27, 29, 37], [4, 8, 10, 11, 16, 30, 36], [3, 8, 10, 14, 21, 27, 30], [3, 5, 20, 21, 23, 28, 33], [2, 4, 10, 16, 30, 33, 35], [18, 25, 28, 31, 32, 34, 35], [5, 8, 10, 19, 31, 33, 37], [9, 11, 15, 21, 24, 32, 39], [4, 18, 22, 25, 29, 35, 39], [1, 7, 11, 13, 26, 27, 34], [4, 13, 23, 24, 26, 34, 38], [5, 9, 11, 15, 21, 24, 26], [7, 15, 20, 26, 27, 28, 38], [8, 11, 14, 22, 24, 34, 37], [12, 13, 14, 29, 33, 36, 38], [2, 4, 6, 7, 14, 29, 31], [11, 12, 14, 15, 16, 20, 33], [7, 10, 12, 21, 22, 35, 39], [1, 4, 5, 8, 12, 17, 31], [2, 9, 13, 19, 22, 31, 37], [2, 11, 23, 25, 34, 36, 37], [3, 19, 29, 31, 33, 34, 39], [3, 4, 5, 8, 13, 24, 28], [7, 9, 13, 14, 23, 29, 37], [4, 6, 8, 17, 29, 35, 38], [2, 7, 16, 20, 26, 27, 38], [17, 26, 27, 29, 30, 31, 38], [9, 14, 15, 19, 22, 31, 39], [11, 12, 13, 27, 28, 33, 36], [5, 6, 23, 27, 30, 37, 39], [2, 9, 13, 17, 19, 26, 31], [5, 12, 15, 17, 21, 26, 39], [1, 7, 10, 17, 18, 20, 26], [1, 3, 5, 13, 19, 29, 32], [4, 14, 16, 21, 24, 31, 35], [10, 14, 21, 22, 24, 33, 38], [6, 14, 22, 23, 30, 31, 32], [8, 11, 23, 27, 32, 34, 39], [2, 4, 9, 10, 16, 19, 38], [9, 12, 14, 16, 22, 27, 37], [1, 6, 8, 15, 20, 25, 30], [4, 9, 13, 14, 19, 28, 36], [4, 14, 16, 20, 26, 35, 37], [6, 18, 21, 25, 30, 36, 39], [2, 13, 16, 18, 19, 23, 39], [2, 6, 9, 16, 27, 35, 36], [6, 11, 15, 19, 23, 28, 31], [9, 11, 18, 21, 23, 24, 25], [4, 6, 13, 18, 26, 31, 33], [6, 8, 13, 17, 28, 31, 33], [4, 5, 13, 25, 27, 34, 37], [13, 14, 17, 18, 26, 29, 36], [2, 3, 7, 10, 11, 12, 25], [12, 16, 21, 25, 32, 33, 35], [1, 4, 12, 29, 33, 35, 37], [2, 10, 16, 22, 28, 32, 39], [4, 8, 16, 17, 19, 30, 31], [3, 14, 18, 20, 21, 22, 33], [2, 5, 15, 16, 20, 31, 36], [17, 20, 22, 23, 24, 31, 33], [5, 17, 23, 26, 31, 38, 39], [2, 4, 5, 7, 13, 22, 29], [10, 12, 15, 16, 30, 35, 37], [3, 8, 9, 10, 12, 27, 30], [3, 14, 20, 27, 28, 33, 36], [10, 14, 17, 21, 25, 27, 37], [22, 24, 27, 29, 30, 31, 36], [11, 13, 15, 17, 26, 30, 31], [9, 11, 22, 23, 29, 32, 33], [2, 7, 23, 25, 35, 36, 39], [7, 14, 18, 24, 27, 31, 37], [4, 7, 21, 24, 29, 30, 32], [3, 12, 26, 29, 32, 33, 37], [13, 20, 22, 24, 28, 34, 35], [5, 13, 18, 19, 25, 27, 37], [2, 11, 16, 25, 26, 28, 33], [2, 22, 34, 35, 36, 37, 39], [7, 12, 17, 26, 28, 29, 31], [1, 6, 10, 12, 20, 27, 32], [1, 5, 10, 16, 22, 24, 30], [3, 25, 28, 32, 36, 37, 38], [3, 4, 5, 13, 24, 28, 31], [2, 14, 16, 18, 31, 34, 35], [12, 15, 16, 17, 23, 29, 36], [2, 15, 20, 21, 22, 36, 37], [5, 7, 15, 26, 31, 35, 39], [5, 8, 14, 18, 21, 22, 26], [5, 8, 11, 15, 27, 28, 32], [11, 19, 26, 32, 33, 35, 38], [5, 13, 15, 23, 24, 25, 26], [1, 11, 15, 16, 18, 19, 28], [5, 9, 11, 23, 24, 33, 38], [4, 25, 32, 33, 34, 35, 38], [3, 10, 11, 18, 23, 36, 39], [1, 3, 14, 23, 29, 30, 39], [4, 6, 12, 23, 24, 30, 35], [4, 13, 22, 23, 32, 33, 37], [16, 18, 20, 23, 27, 28, 33], [6, 13, 19, 22, 25, 31, 39], [5, 7, 18, 23, 25, 35, 39], [1, 4, 6, 15, 29, 37, 39], [4, 5, 8, 22, 24, 25, 29], [5, 14, 17, 22, 25, 32, 38], [6, 9, 15, 18, 19, 28, 39], [6, 11, 12, 15, 28, 33, 38], [1, 9, 15, 16, 19, 24, 36], [2, 3, 9, 15, 25, 35, 39], [1, 3, 15, 16, 23, 27, 37], [2, 9, 14, 23, 25, 27, 28], [1, 3, 4, 16, 17, 32, 38], [3, 16, 23, 26, 27, 36, 39], [6, 10, 15, 16, 21, 27, 39], [3, 8, 12, 15, 19, 22, 39], [3, 13, 22, 27, 31, 33, 38], [1, 9, 14, 21, 36, 38, 39], [11, 18, 23, 25, 26, 35, 37], [2, 8, 14, 17, 21, 26, 29], [2, 4, 8, 9, 16, 22, 34], [1, 9, 15, 17, 25, 28, 38], [2, 5, 9, 23, 24, 29, 34], [6, 8, 12, 14, 22, 26, 34], [4, 6, 12, 13, 21, 27, 33], [9, 11, 12, 21, 30, 33, 37], [9, 13, 15, 20, 26, 33, 34], [5, 17, 20, 21, 25, 28, 31], [1, 6, 13, 18, 25, 33, 35], [3, 10, 13, 14, 24, 28, 37], [9, 12, 18, 20, 23, 25, 37], [7, 13, 17, 27, 31, 32, 33], [1, 8, 16, 21, 23, 34, 36], [1, 2, 18, 19, 25, 31, 36], [6, 9, 10, 17, 27, 32, 36], [6, 9, 17, 21, 27, 34, 36], [2, 9, 19, 27, 33, 35, 37], [5, 8, 13, 24, 28, 30, 39], [5, 8, 11, 13, 24, 35, 38], [13, 17, 22, 26, 28, 35, 39], [10, 19, 25, 27, 29, 32, 36], [1, 2, 8, 11, 16, 23, 28], [2, 6, 7, 8, 14, 26, 34], [2, 10, 11, 12, 26, 31, 35], [4, 7, 8, 14, 16, 18, 31], [15, 16, 19, 29, 31, 32, 38], [1, 7, 16, 19, 23, 33, 38], [1, 3, 8, 23, 26, 31, 36], [4, 7, 9, 22, 27, 32, 39], [5, 8, 16, 18, 20, 26, 29], [5, 6, 11, 15, 24, 28, 33], [4, 6, 28, 32, 33, 36, 39], [12, 15, 20, 21, 24, 33, 39], [14, 15, 22, 26, 28, 37, 38], [3, 11, 14, 19, 20, 35, 37], [3, 17, 26, 27, 36, 37, 38], [3, 8, 12, 13, 27, 28, 31], [8, 11, 14, 17, 27, 28, 37], [4, 7, 12, 17, 26, 35, 39], [7, 13, 18, 23, 27, 32, 37], [2, 6, 14, 27, 29, 30, 39], [5, 8, 13, 17, 18, 30, 34], [4, 6, 8, 15, 28, 35, 39], [19, 25, 27, 29, 31, 34, 35], [1, 9, 14, 19, 20, 23, 32], [2, 4, 12, 22, 24, 28, 39], [1, 2, 7, 8, 16, 28, 37], [6, 10, 19, 25, 34, 36, 38], [6, 10, 11, 13, 14, 32, 37], [12, 23, 24, 27, 35, 36, 38], [3, 11, 15, 19, 30, 31, 39], [14, 18, 19, 20, 24, 27, 31], [3, 7, 13, 22, 30, 35, 38], [3, 8, 11, 18, 20, 31, 32], [1, 8, 9, 21, 24, 31, 34], [9, 16, 24, 27, 29, 32, 38], [2, 7, 10, 14, 18, 25, 35], [2, 5, 17, 18, 21, 26, 34], [2, 8, 16, 17, 22, 25, 39], [7, 13, 15, 21, 22, 31, 35], [22, 25, 26, 28, 29, 33, 36], [2, 6, 19, 22, 27, 29, 34], [2, 3, 5, 7, 9, 13, 17], [5, 9, 18, 27, 30, 37, 39], [10, 15, 16, 30, 33, 34, 35], [1, 8, 11, 12, 21, 22, 29], [8, 10, 22, 30, 36, 37, 38], [11, 12, 15, 21, 22, 27, 33], [5, 10, 17, 23, 35, 37, 38]];


    var brojSvihKomb = function(arr){
      var allNum;
      allNum = arr.length * 7;
      return allNum;
    };
    //console.log(brojSvihKomb(sveKomb));
    document.getElementById('statistika').removeAttribute('class');


    function brojPutaA (arr) {
      var arrTemp;
      var counterA = 0;
      var prviA = $scope.sviBrojevi.a;

      //console.log("Prvi broj u objektu je: " + prviA);
      //petlja koja ide kroz niz arr
      for(var i = 0; i < arr.length; i++){
        //petlja koja ide kroz niz arr[i]
        for(var x = 0; x < arr[i].length; x++ ){
          arrTemp = arr[i][x];
          //console.log("Trenutni broj u nizu je: " + arrTemp);
          if(prviA === arrTemp){
          counterA++;
          //console.log("Promenljiva counter za prvi broj u kombinaciji je: " + counterA);
          $scope.statistikaUcesceUKomb.a = counterA;
          }
        }
      }
    }

    function brojPutaB (arr) {
      var arrTemp;
      var counterB = 0;
      var prviB = $scope.sviBrojevi.b;

      //console.log("Drugi broj u objektu je: " + prviB);
      //petlja koja ide kroz niz arr
      for(var i = 0; i < arr.length; i++){
        //petlja koja ide kroz niz arr[i]
        for(var x = 0; x < arr[i].length; x++ ){
          arrTemp = arr[i][x];
          //console.log("Trenutni broj u nizu je: " + arrTemp);
          if(prviB === arrTemp){
          counterB++;
          //console.log("Promenljiva counter za drugi broj u kombinaciji je: " + counterB);
          $scope.statistikaUcesceUKomb.b = counterB;
          }
        }
      }
    }

    function brojPutaC (arr) {
      var arrTemp;
      var counterC = 0;
      var prviC = $scope.sviBrojevi.c;

      //console.log("Treci broj u objektu je: " + prviC);
      //petlja koja ide kroz niz arr
      for(var i = 0; i < arr.length; i++){
        //petlja koja ide kroz niz arr[i]
        for(var x = 0; x < arr[i].length; x++ ){
          arrTemp = arr[i][x];
          //console.log("Trenutni broj u nizu je: " + arrTemp);
          if(prviC === arrTemp){
          counterC++;
          //console.log("Promenljiva counter za treci broj u kombinaciji je: " + counterC);
          $scope.statistikaUcesceUKomb.c = counterC;
          }
        }
      }
    }

    function brojPutaD (arr) {
      var arrTemp;
      var counterD = 0;
      var prviD = $scope.sviBrojevi.d;

      //console.log("Cetvrti broj u objektu je: " + prviD);
      //petlja koja ide kroz niz arr
      for(var i = 0; i < arr.length; i++){
        //petlja koja ide kroz niz arr[i]
        for(var x = 0; x < arr[i].length; x++ ){
          arrTemp = arr[i][x];
          //console.log("Trenutni broj u nizu je: " + arrTemp);
          if(prviD === arrTemp){
          counterD++;
          //console.log("Promenljiva counter za cetvrti broj u kombinaciji je: " + counterD);
          $scope.statistikaUcesceUKomb.d = counterD;
          }
        }
      }
    }

    function brojPutaE (arr) {
      var arrTemp;
      var counterE = 0;
      var prviE = $scope.sviBrojevi.e;

      //console.log("Peti broj u objektu je: " + prviE);
      //petlja koja ide kroz niz arr
      for(var i = 0; i < arr.length; i++){
        //petlja koja ide kroz niz arr[i]
        for(var x = 0; x < arr[i].length; x++ ){
          arrTemp = arr[i][x];
          //console.log("Trenutni broj u nizu je: " + arrTemp);
          if(prviE === arrTemp){
          counterE++;
          //console.log("Promenljiva counter za peti broj u kombinaciji je: " + counterE);
          $scope.statistikaUcesceUKomb.e = counterE;
          }
        }
      }
    }

    function brojPutaF (arr) {
      var arrTemp;
      var counterF = 0;
      var prviF = $scope.sviBrojevi.f;

      //console.log("Sesti broj u objektu je: " + prviF);
      //petlja koja ide kroz niz arr
      for(var i = 0; i < arr.length; i++){
        //petlja koja ide kroz niz arr[i]
        for(var x = 0; x < arr[i].length; x++ ){
          arrTemp = arr[i][x];
          //console.log("Trenutni broj u nizu je: " + arrTemp);
          if(prviF === arrTemp){
          counterF++;
          //console.log("Promenljiva counter za sesti broj u kombinaciji je: " + counterF);
          $scope.statistikaUcesceUKomb.f = counterF;
          }
        }
      }
    }

    function brojPutaG (arr) {
      var arrTemp;
      var counterG = 0;
      var prviG = $scope.sviBrojevi.g;

      //console.log("Sedmi broj u objektu je: " + prviG);
      //petlja koja ide kroz niz arr
      for(var i = 0; i < arr.length; i++){
        //petlja koja ide kroz niz arr[i]
        for(var x = 0; x < arr[i].length; x++ ){
          arrTemp = arr[i][x];
          //console.log("Trenutni broj u nizu je: " + arrTemp);
          if(prviG === arrTemp){
          counterG++;
          //console.log("Promenljiva counter za sedmi broj u kombinaciji je: " + counterG);
          $scope.statistikaUcesceUKomb.g = counterG;
          }
        }
      }
    }

    brojPutaA(sveKomb);
    brojPutaB(sveKomb);
    brojPutaC(sveKomb);
    brojPutaD(sveKomb);
    brojPutaE(sveKomb);
    brojPutaF(sveKomb);
    brojPutaG(sveKomb);

    function izracunajProcA (){
      var aa = (($scope.statistikaUcesceUKomb.a / brojSvihKomb(sveKomb)) * 100);
      var procA = Math.round(aa);
      $scope.procenatUcesca.a = procA;
      //console.log($scope.procenatUcesca.a);
      var a = document.getElementById('progresA');
      a.setAttribute('aria-valuenow', procA);
      a.setAttribute('style', 'min-width: 150px;' + ' ' + 'width:' + procA + '%');
      //console.log(procA);
    }
    izracunajProcA();

    function izracunajProcB (){
      var bb = (($scope.statistikaUcesceUKomb.b / brojSvihKomb(sveKomb)) * 100);
      var procB = Math.round(bb);
      $scope.procenatUcesca.b = procB;
      //console.log($scope.procenatUcesca.b);
      var b = document.getElementById('progresB');
      b.setAttribute('aria-valuenow', procB);
      b.setAttribute('style', 'min-width: 150px;' + ' ' + 'width:' + procB + '%');
      //console.log(procB);
    }
    izracunajProcB();

    function izracunajProcC (){
      var cc = (($scope.statistikaUcesceUKomb.c / brojSvihKomb(sveKomb)) * 100);
      var procC = Math.round(cc);
      $scope.procenatUcesca.c = procC;
      //console.log($scope.procenatUcesca.c);
      var c = document.getElementById('progresC');
      c.setAttribute('aria-valuenow', procC);
      c.setAttribute('style', 'min-width: 150px;' + ' ' + 'width:' + procC + '%');
      //console.log(procC);
    }
    izracunajProcC();

    function izracunajProcD (){
      var dd = (($scope.statistikaUcesceUKomb.d / brojSvihKomb(sveKomb)) * 100);
      var procD = Math.round(dd);
      $scope.procenatUcesca.d = procD;
      //console.log($scope.procenatUcesca.d);
      var d = document.getElementById('progresD');
      d.setAttribute('aria-valuenow', procD);
      d.setAttribute('style', 'min-width: 150px;' + ' ' + 'width:' + procD + '%');
      //console.log(procD);
    }
    izracunajProcD();

    function izracunajProcE (){
      var ee = (($scope.statistikaUcesceUKomb.e / brojSvihKomb(sveKomb)) * 100);
      var procE = Math.round(ee);
      $scope.procenatUcesca.e = procE;
      //console.log($scope.procenatUcesca.e);
      var e = document.getElementById('progresE');
      e.setAttribute('aria-valuenow', procE);
      e.setAttribute('style', 'min-width: 150px;' + ' ' + 'width:' + procE + '%');
      //console.log(procE);
    }
    izracunajProcE();

    function izracunajProcF (){
      var ff = (($scope.statistikaUcesceUKomb.f / brojSvihKomb(sveKomb)) * 100);
      var procF = Math.round(ff);
      $scope.procenatUcesca.f = procF;
      //console.log($scope.procenatUcesca.f);
      var f = document.getElementById('progresF');
      f.setAttribute('aria-valuenow', procF);
      f.setAttribute('style', 'min-width: 150px;' + ' ' + 'width:' + procF + '%');
      //console.log(procF);
    }
    izracunajProcF();

    function izracunajProcG (){
      var gg = (($scope.statistikaUcesceUKomb.g / brojSvihKomb(sveKomb)) * 100);
      var procG = Math.round(gg);
      $scope.procenatUcesca.g = procG;
      //console.log($scope.procenatUcesca.g);
      var g = document.getElementById('progresG');
      g.setAttribute('aria-valuenow', procG);
      g.setAttribute('style', 'min-width: 150px;' + ' ' + 'width:' + procG + '%');
      //console.log(procG);
    }
    izracunajProcG();
  };


  }]);
