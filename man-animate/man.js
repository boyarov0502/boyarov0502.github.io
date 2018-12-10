var s = Snap(500.92, 552.42)

Snap.load("svg-man-1.svg", function (svg) {
	s.append(svg);

	var leftArm = s.select('#Path_12'),
			leftWrist = s.select('#Rectangle_2'),
			leftHand = s.select('#Ellipse_4').drag();

	function test1() {
		leftWrist.animate({transform: "matrix(1,0,0.2867,1,-115,-1)"}, 300);
		leftArm.animate({transform: "matrix(1,0,0.2867,1,-115,-1)"}, 300);
		leftHand.animate({transform: "matrix(0.9613,-0.2756,0.2756,0.9613,-113.1,10.7545)"}, 300, function(){test2()});
	};
	function test2() {
		leftWrist.animate({transform: "skewY(0)"}, 300);
		leftArm.animate({transform: "skewY(0)"}, 300);
		leftHand.animate({transform: "rotate(0)"}, 300, function(){test1()});
	};

	function moveLeft() {
		leftHand.animate({transform: 'matrix(0.1219,0.9925,-0.9925,0.1219,518,71)'}, 0);
		leftWrist.animate({transform: 'matrix(0.9848,-0.1736,0.1736,0.9848,492,156)'}, 0);
		leftArm.animate({transform: 'matrix(1,0,0.1763,1,330,130)'}, 0, function(){
			setTimeout(function(){
				moveRight()
			}, 250);
		});
	}
	function moveRight() {
		leftHand.animate({transform: 'matrix(0.0595,-0.9982,0.9982,0.0595,515.181,164.338)'}, 0);
		leftWrist.animate({transform: 'matrix(1,-0.02,0.02,1,533.575,146.915)'}, 0);
		leftArm.animate({transform: 'matrix(1,0,0,1,377.121,132.225)'}, 0, function(){
			setTimeout(function(){
				moveLeft()
			}, 250)
		});
	}

	window.onload = function letsStart() {
		test1();
	}

});
