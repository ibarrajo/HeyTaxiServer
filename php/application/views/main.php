<?php
$this->load->view('inc/header');
?>
<style>
  html, body, #map-canvas {
    height: 100%;
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
zoom: 4,
center: new google.maps.LatLng(-33, 151),
mapTypeId: google.maps.MapTypeId.ROADMAP
}
var map = new google.maps.Map(document.getElementById('map-canvas'),
                            mapOptions);

var image = 'img/beachflag.png';
var myLatLng = new google.maps.LatLng(-33.890542, 151.274856);
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

			<div class="container">

				<span>LAT:{{latitude}} LONG:{{longitude}}</span>
				<button data-ng-click="getCoordinates()">Get Coordinates</button>
				<br>
				<hr>
				<br>
				<div id="map-canvas"></div>
			</div>

		</div>
	</div>

<?php
$this->load->view('inc/footer');
?>