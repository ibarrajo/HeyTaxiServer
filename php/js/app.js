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
    var coordinates;

    coordinates.latitude = Android.getLatitude();
    coordinates.longitude = Android.getLongitude();

    $('#debug').text(JSON.stringify(coordinates));
    Android.showToast(JSON.stringify(coordinates));
    alert(JSON.stringify(coordinates));
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
}