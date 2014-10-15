(function(){
  'use strict';

  angular.module('mlf-calculator', ['ionic'])
  .controller('MainCtrl', ['$scope', function($scope){

    $scope.display = '0';

    $scope.answer = function(){
      var x   = $scope.memory * 1,
          y   = $scope.display * 1,
          ans = 0;

      switch($scope.operator){
        case '+':
          ans = x + y;
          break;
        case '-':
          ans = x - y;
          break;
        case '*':
          ans = x * y;
          break;
        case '/':
          ans = x / y;
      }

      $scope.display = ans;
      $scope.operator = $scope.memory = '';
    };

    $scope.calculate = function(op){
      $scope.operator = op;
      $scope.memory = $scope.display;
      $scope.clearDisplay();
    };

    $scope.clear = function(){
      $scope.display = '0';
    };

    $scope.addDisplay = function(num){
      num = num.toString();
      if(num === '.' && $scope.display.indexOf('.') > -1){return;}

      if($scope.display === '0' && num !== '.'){
        $scope.display = num;
      }else{
        $scope.display += num;
      }
    };
  }]);
})();
