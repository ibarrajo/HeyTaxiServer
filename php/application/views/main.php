<?php
$this->load->view('inc/header');
?>
<style>
  #map-canvas {
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px;
    display: block;
  }
</style>
<body>
<div data-ng-app="gotaxi">
	<div data-ng-controller="GoTaxiCtrl">
		<google-map center="center" id="map-canvas"  draggable="true" zoom="zoom" markers="markers" mark-click="true" style="height: 400px"></google-map>
		<button data-ng-click="getCoordinates()">Find Me!</button><span>Lat:{{latitude}} Long: {{longitude}}</span>
	</div>
</div>

<?php
$this->load->view('inc/footer');
?>