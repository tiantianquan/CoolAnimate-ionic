// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('MainCtrl', function($scope, $element, $ionicSlideBoxDelegate) {
  //movebox 换页时会被挤进另外一页
  var num;


  // $element.on('mousemove', function(x) {
  //   num = 90;

  //   $scope.style = {
  //     '-webkit-transform': rotateY(x.clientX)
  //   }
  // })
  $scope.slideHasChanged=function($index){
    $scope.style = {
      '-webkit-transform': rotateY(180*$index*2)+' '+rotate(180*$index)
      // '-webkit-transform': rotate(180*$index*3)
    }
  }
})


function rotateY(num) {
  return 'rotateY(' + num + 'deg)';
}

function rotate(num) {
  return 'rotate(' + num + 'deg)';
}