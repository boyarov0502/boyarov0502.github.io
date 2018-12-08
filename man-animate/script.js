$(window).load(function(){
	setTimeout(function () {
		pupilsMoveTopLeft();
		scrollShow();
	}, 1000)
});


var s = Snap(300, 300);
		face = s.circle(150, 150, 100);
		eyeLeft = s.circle(100, 100, 50);
		eyeRight = s.circle(200, 100, 50);
		pupilLeft = s.circle(100, 100, 15);
		pupilRight = s.circle(200, 100, 15);
		eyes = s.group(eyeLeft, eyeRight);
		pupils = s.group(pupilLeft, pupilRight);

eyes.attr({
	fill: "#bada55",
	stroke: "#000000",
	strokeWidth: 4
});
pupils.attr({
	fill: "#000433"
});

function pupilsMoveTopLeft() {
	pupilLeft.animate( {cx: 80, cy: 87}, 250, function pupilsMoveBottom() {
		setTimeout(function(){
			pupilLeft.animate({cy: 115}, 640);
		}, 150);
	});
	pupilRight.animate({cx: 180, cy: 88}, 250, function pupilsMoveBottom() {
		setTimeout(function(){
			pupilRight.animate({cy: 115}, 640);
		}, 150);
	});
}
function pupilsMoveRight() {
	pupilLeft.animate( {cx: 100}, 500, function(){setTimeout(function(){pupilsMoveLeft()}, 2800)} );
	pupilRight.animate({cx: 200}, 500);
}



var scroll = s.rect(15, 35, 20, 20, 8)

scroll.attr({
	fill: '#004D52',
	stroke: '#FFFFFF',
	strokeWidth: 1,
	opacity: 0
});

function scrollShow() {
	scroll.animate( {opacity: 1}, 400, function(){ scrolling() } );
	// scroll.animate( {opacity: 1}, 400 );
}
function scrolling() {
	scroll.animate( {height: 100}, 600, function(){ scrollToBottom() } );
}
function scrollToBottom() {
	scroll.animate( {y: 115, height: 20}, 600, function(){ scrollHide() } );
}
function scrollHide() {
	scroll.animate( {opacity: 0}, 400, function(){ scrollRotate() } );
}
function scrollRotate() {
	scroll.animate( {y: 35}, 3000, function(){ scrollShow() } );
}