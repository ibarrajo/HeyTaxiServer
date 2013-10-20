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


  // get coordiantes
  $scope.getCoordinates = function() {
    $scope.latitude = 0;
    $scope.longitude = 0;
    $scope.latitude = Android.getLatitude();
    $scope.longitude = Android.getLongitude();
  };


  // update
  $scope.editProduct = function(item) {
    
  };

  // create
  $scope.createProduct = function(item) {
    
  };

  // create
  $scope.deleteProduct = function(item_id) {
    
  };

  $scope.getCoordinates();


  // This example adds a marker to indicate the position
// of Bondi Beach in Sydney, Australia
function initialize() {
  var mapOptions = {
    zoom: 4,
    center: new google.maps.LatLng($scope.latitude, $scope.longitude),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);

  var image = 'images/beachflag.png';
  var myLatLng = new google.maps.LatLng($scope.latitude, $scope.longitude);
  var beachMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
}