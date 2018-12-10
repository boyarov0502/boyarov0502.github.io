var s = Snap(500.92, 552.42)

Snap.load("svg-man-1.svg", function (svg) {
	s.append(svg);

	var leftArm = s.select('#Path_12'),
			leftWrist = s.select('#Rectangle_2'),
			leftHand = s.select('#Ellipse_4');

	function moveLeft() {
		leftWrist.animate({transform: "matrix(1,0,0.2867,1,-115,-1)"}, 300);
		leftArm.animate({transform: "matrix(1,0,0.2867,1,-115,-1)"}, 300);
		leftHand.animate({transform: "matrix(0.9613,-0.2756,0.2756,0.9613,-113.1,10.7545)"}, 300, function(){moveRight()});
	}
	function moveRight() {
		leftWrist.animate({transform: "skewY(0)"}, 300);
		leftArm.animate({transform: "skewY(0)"}, 300);
		leftHand.animate({transform: "rotate(0)"}, 300, function(){moveLeft()});
	}

	window.onload = function () {
		moveLeft();
	}();

});
