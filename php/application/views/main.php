<?php
$this->load->view('inc/header');
?>
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
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