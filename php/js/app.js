function GoTaxiCtrl($scope, $http) {

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

  // get coordiantes
  $scope.getCoordinates = function() {
    $scope.latitude = Android.getLatitude();
    $scope.longitude = Android.getLongitude();
    return true;
  };

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
      latitude: 0, // initial map center latitude
      longitude: 0, // initial map center longitude
    },
    markers: [], // an array of markers,
    zoom: 8, // the zoom level
  });

}

// which services to inject ?
GoTaxiCtrl.$inject = ['google-maps'];