var clickCounter = $('#times-clicked');
var timesClicked = 0;

$('#cat-image').click(function(e) {
	// console.log("Click!");
	timesClicked += 1;
	clickCounter.html("Times clicked: " + timesClicked);
});