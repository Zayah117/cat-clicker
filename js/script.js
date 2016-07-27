var Cat = function(name, image) {
	this.name = name;
	this.image = image;
	this.timesClicked = 0;
	this.nameLabel = null;
	this.imageView = null;
	this.clickLabel = null;
};

Cat.prototype.clicker = function(timesClicked, clickLabel) {
	timesClicked += 1;
	clickLabel.html("Times clicked: " + timesClicked);
	return timesClicked;
};

function initializeKittyCat(kittyCat) {
	$('#main').append('<figure><h4 id="' + kittyCat.name + '-name"></h4><img id="' + kittyCat.name + '-image"><figcaption id="' + kittyCat.name + '-times-clicked">Times clicked: 0</figcaption></figure>')

	kittyCat.nameLabel = $("#" + kittyCat.name + "-name");
	kittyCat.imageView = $("#" + kittyCat.name + "-image");
	kittyCat.clickLabel = $("#" + kittyCat.name + "-times-clicked");

	kittyCat.nameLabel.html(kittyCat.name);
	kittyCat.imageView.attr("src", kittyCat.image);
}

bob = new Cat('Bob', 'images/bob.jpg');
sally = new Cat('Sally', 'images/sally.jpg');
cats = [bob, sally];

for (var i = cats.length - 1; i >= 0; i--) {
	initializeKittyCat(cats[i]);
}

bob.imageView.click(function(e) {
	bob.timesClicked = bob.clicker(bob.timesClicked, bob.clickLabel);
});

sally.imageView.click(function(e) {
	sally.timesClicked = sally.clicker(sally.timesClicked, sally.clickLabel);
});