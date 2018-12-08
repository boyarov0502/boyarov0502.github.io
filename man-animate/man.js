var s = Snap(1000, 705),
		wheat = {fill: '#f4e9b0'},
		marsala = {fill: '#a8575e'};

Snap.load("man.svg", function (f) {
	var man = f.selectAll('path, rect, circle, ellipse');
			s.append(man);

	s.selectAll('#Ellipse_4, #Rectangle_2, #Ellipse_3, #Path_7').attr(wheat);
	s.selectAll('#Path_12, #Path_9, #Path_8, #Path_10, #Path_11').attr(marsala);

	var leftArm = s.select('#Path_12'),
			leftWrist = s.select('#Rectangle_2'),
			leftHand = s.select('#Ellipse_4');

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
		moveLeft()
	}

});
