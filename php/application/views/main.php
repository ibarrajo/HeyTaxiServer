<?php
$this->load->view('inc/header');
?>
<style>
  #map-canvas {
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px
  }
</style>
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
<script>
// This example adds a marker to indicate the position
// of Bondi Beach in Sydney, Australia
function initialize() {
var mapOptions = {
zoom: 8,
center: new google.maps.LatLng(32.5250, 117.0333),
mapTypeId: google.maps.MapTypeId.ROADMAP
}
var map = new google.maps.Map(document.getElementById('map-canvas'),
                            mapOptions);

var image = base_url + 'img/beachflag.png';
var myLatLng = new google.maps.LatLng(latitude, longitude);
var beachMarker = new google.maps.Marker({
  position: myLatLng,
  map: map,
  icon: image
});
}

google.maps.event.addDomListener(window, 'load', initialize);

</script>
<body>
	<div data-ng-app>
		<div data-ng-controller="GoTaxiCtrl">
			<div id="map-canvas"></div>
			<button data-ng-click="getCoordinates()">Get Coordinates</button>
		</div>
	</div>

<?php
$this->load->view('inc/footer');
?>