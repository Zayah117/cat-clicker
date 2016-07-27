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
		deleteCat(kittyCat, cats);
	});
}

function validName(name, catArray){
	if (name == "") {
		return false;
	}
	for (var i = catArray.length - 1; i >= 0; i--) {
		if (name == catArray[i].name) {
			return false;
		}
	}
	return true;
}

function deleteCat(kittyCat, catArray) {
	kittyCat.figure.remove();
	for (var i = catArray.length - 1; i >= 0; i--) {
		if (catArray[i] === kittyCat) {
			catArray.splice(i, 1);
		}
	}
}

cats = [];

$('#button').click(function() {
	myName = $('#cat-name').val();
	myColor = $('#color-select').val();


	if (validName(myName, cats)) {
		window[myName] = new Cat(myName, 'images/colors/' + myColor + '.png');
		initializeKittyCat(window[myName]);
		cats.push(window[myName]);
	} else {
		window.alert("Name not valid.");
	}

	
});