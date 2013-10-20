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


}