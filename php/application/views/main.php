<?php
$this->load->view('inc/header');
?>
<body>
	<div data-ng-app>
		<div data-ng-controller="GoTaxiCtrl">
			<google-map center="center" draggable="true" zoom="zoom" markers="markers" mark-click="true" style="height: 400px"></google-map>
			<button data-ng-click="getCoordinates()">Get Coordinates</button>
		</div>
	</div>

<?php
$this->load->view('inc/footer');
?>