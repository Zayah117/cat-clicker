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
	clickLabel.html("Love points: " + timesClicked);
	return timesClicked;
};


function initializeKittyCat(kittyCat) {
	$('#main').append('<figure><h4 id="' + kittyCat.name + '-name"></h4><img id="' + kittyCat.name + '-image"><figcaption id="' + kittyCat.name + '-times-clicked">Love points: 0</figcaption></figure>')

	kittyCat.nameLabel = $("#" + kittyCat.name + "-name");
	kittyCat.imageView = $("#" + kittyCat.name + "-image");
	kittyCat.clickLabel = $("#" + kittyCat.name + "-times-clicked");

	kittyCat.nameLabel.html(kittyCat.name);
	kittyCat.imageView.attr("src", kittyCat.image);

	kittyCat.imageView.click(function(e){
		kittyCat.timesClicked = kittyCat.clicker(kittyCat.timesClicked, kittyCat.clickLabel);
	})
}

bob = new Cat('Bob', 'images/colors/grey.png');
sally = new Cat('Sally', 'images/colors/black.png');
max = new Cat('Max', 'images/colors/white.png');
sebastian = new Cat('Sebastian', 'images/colors/blue.png');
lilly = new Cat('Lilly', 'images/colors/purple.png');
tiger = new Cat('Tiger', 'images/colors/orange.png');

cats = [bob, sally, max, sebastian, lilly, tiger];

for (var i = 0; i < cats.length; i++) {
	initializeKittyCat(cats[i]);
}

$('#button').click(function() {
	console.log('hi');
});