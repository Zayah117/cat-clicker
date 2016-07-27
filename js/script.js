var Cat = function(name, image) {
	this.name = name;
	this.image = image;
	this.timesClicked = 0;
	this.figure = null;
	this.nameLabel = null;
	this.imageView = null;
	this.clickLabel = null;
	this.deleteButton = null
};

Cat.prototype.clicker = function(timesClicked, clickLabel) {
	timesClicked += 1;
	clickLabel.html("Love points: " + timesClicked);
	return timesClicked;
};


function initializeKittyCat(kittyCat) {
	$('#main').append('<figure id="' + kittyCat.name + '-figure"><h4 id="' + kittyCat.name + '-name"></h4><img id="' + kittyCat.name + '-image"><figcaption id="' + kittyCat.name + '-times-clicked">Love points: 0</figcaption><button id="' + kittyCat.name + '-button">Delete Cat :(</button></figure>')

	kittyCat.figure = $("#" + kittyCat.name + "-figure");
	kittyCat.nameLabel = $("#" + kittyCat.name + "-name");
	kittyCat.imageView = $("#" + kittyCat.name + "-image");
	kittyCat.clickLabel = $("#" + kittyCat.name + "-times-clicked");
	kittyCat.deleteButton = $("#" + kittyCat.name + "-button");

	kittyCat.nameLabel.html(kittyCat.name);
	kittyCat.imageView.attr("src", kittyCat.image);

	kittyCat.imageView.click(function(e){
		kittyCat.timesClicked = kittyCat.clicker(kittyCat.timesClicked, kittyCat.clickLabel);
	})

	kittyCat.deleteButton.click(function() {
		kittyCat.figure.remove();
	});
}

function checkName(name, array){
	return array.indexOf(name) > -1;
}

cats = [];

$('#button').click(function() {
	myName = $('#cat-name').val();
	myColor = $('#color-select').val();


	if (checkName(myName, cats) === false && myName != "") {
		cats.push(myName);
		window[myName] = new Cat(myName, 'images/colors/' + myColor + '.png');
		initializeKittyCat(window[myName]);
	} else {
		window.alert("Name not valid.");
	}

	
});