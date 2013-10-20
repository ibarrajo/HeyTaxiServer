var goTaxi = angular.module('gotaxi', ["google-maps"]);

function isAndroid()
{
  return (typeof Android === "undefined") ? false : true;
}
 
goTaxi.controller('GoTaxiCtrl', ['$scope', function($scope) {

  // read
  $scope.getInventory = function() {
    var getInventoryURL = base_url + 'Welcome/prueba';
    console.log(getInventoryURL);
    $http({method: 'GET', url: getInventoryURL}).success(
      function(data, status, headers, config) {
        $scope.items = data;
      }
      );
  };

  $scope.getCoordinates = function() {
    if (isAndroid()) {
      var cor = JSON.parse(Android.getCoordinates());
      $scope.latitude = cor.latitude;
      $scope.longitude = cor.longitude; 
      if ($scope.latitude == 0 && $scope.longitude == 0)
        setTimeout( $scope.getCoordinates, 1000);
    }
    else {
       navigator.geolocation.getCurrentPosition($scope.setCoordinates);
    }
    // I forgot why i put this return here =/
    return true;
  };

  $scope.setCoordinates = function() {
       $scope.latitude = position.coords.latitude;
       $scope.longitude = position.coords.longitude; 
  };

 // default location
  $scope.center = {
      latitude: 32.5089045,
      longitude: -116.99014840000001
  };

  $scope.latitude = 32.5089045;
  $scope.longitude = -116.99014840000001;

  $scope.zoom = 4;

  $scope.markers = [];

  $scope.markerLat = null;
  $scope.markerLng = null;

 $scope.geolocationAvailable = $scope.getCoordinates() ? true : false;

  $scope.centerMap = function () {

      if ($scope.geolocationAvailable) {

          navigator.geolocation.getCurrentPosition(function (position) {

              $scope.center = {
                  latitude: Android.getLatitude(),
                  longitude: Android.getLongitude()
              };

              $scope.$apply();
          }, function () {

          });
      }   
  };



  //$scope.getCoordinates();


  angular.extend($scope, {
    center: {
      latitude: $scope.latitude, // initial map center latitude
      longitude: $scope.longitude, // initial map center longitude
    },
    markers: [], // an array of markers,
    zoom: 17, // the zoom level
  });


}]);