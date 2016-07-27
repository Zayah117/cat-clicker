var Cat = function(name, nameLabel, image, imageView, timesClicked, clickLabel) {
	this.name = name;
	this.nameLabel = nameLabel;
	this.image = image;
	this.imageView = imageView;
	this.timesClicked = timesClicked;
	this.clickLabel = clickLabel;
};

Cat.prototype.clicker = function(timesClicked, clickLabel) {
	timesClicked += 1;
	clickLabel.html("Times clicked: " + timesClicked);
	return timesClicked;
};

function initializeKittyCat(kittyCat) {
	kittyCat.nameLabel.html(kittyCat.name);
	kittyCat.imageView.attr("src", kittyCat.image);
}

bob = new Cat('Bob', $('#name'), 'images/bob.jpg', $('#cat-image'), 0, $('#times-clicked'));
sally = new Cat('Sally', $('#name-2'), 'images/sally.jpg', $('#cat-image-2'), 0, $('#times-clicked-2'));
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