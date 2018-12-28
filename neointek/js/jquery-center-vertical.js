// child: jquery object  e.g $(".active .slide-caption")
// parent: jquery object e.g $(".active.slide")
// property (string): CSS property to change depending on your CSS positioning e.g. "top", "margin-top" or "bottom"
function centerVertical(child, parent, property) {
  
	var parentHeight = parent.height(),
		  childHeight = child.height();
	
  	// Handle edge cases with padding or margins affecting child.height() calculation
	if (child.find("h1").length) {
		  childHeight = child.find("h1").height();
	}
	
  	// Position the child with an inline style
	child.css(property, (parentHeight - childHeight) / 2);
}
