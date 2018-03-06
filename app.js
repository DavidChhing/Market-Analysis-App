'use strict';

var counter = 0;

function addCounter() {
    document.getElementById("getRandomPicture").addEventListener("click", trackPicClick)
}

function trackPicClick(event) {
    if (event.target.tagName == "IMG") {
        var index = event.target.src.lastIndexOf("/");
        var filePath = event.target.src.substring(index + 1);
        for (var imageIndex = 0; imageIndex < pictureArray.length; imageIndex++) {
            var item = pictureArray[imageIndex];
            if (item.filePath.indexOf(filePath) !== -1) {
                item.y++;
            }
        }
        counter++;
        var multiplier = counter/15;
        displayRandomPictures();
        if (counter % 15 ==0) {
            alert("You can stop right there, thats 15x \n Unless...You want to play again.");
        } else {
            document.getElementById("chartContainer").innerHTML = "";
        }
    }
}

var Product = function(name, filePath) {
    this.label = name;
    this.filePath = filePath;
    this.y = 0;
}


var pictureArray = [];
pictureArray.push(
    new Product("Star Wars Bag", "Pictures/bag.jpg"),
    new Product("Banana Cutter", "Pictures/banana.jpg"),
    new Product("Yellow Boots", "Pictures/boots.jpg"),
    new Product("Lumpy Chair", "Pictures/chair.jpg"),
    new Product("Action Figure", "Pictures/cthulhu.jpg"),
    new Product("Dragon Meat", "Pictures/dragon.jpg"),
    new Product("Pen-stils", "Pictures/pen.jpg"),
    new Product("Pizza Scissors", "Pictures/scissors.jpg"),
    new Product("Shark Bag", "Pictures/shark.jpg"),
    new Product("Baby Broom", "Pictures/babysweep.jpg"),
    new Product("Uni-meat", "Pictures/unicorn.jpg"),
    new Product("USB Tail", "Pictures/usb.jpg"),
    new Product("Water Can Can", "Pictures/water_can.jpg"),
    new Product("Whine Glass", "Pictures/wine_glass.jpg"),
);

function displayRandomPictures() {
    var holdPictures = [];
    var sendImage = document.getElementById("getRandomPicture");
    sendImage.innerHTML="";
        while (holdPictures.length < 3 ) {
        var randomPic = pictureArray[Math.floor(Math.random() * pictureArray.length)];
        if (!holdPictures.includes(randomPic) ){
            holdPictures.push(randomPic)
        }  
    }
    for (var index = 0; index < holdPictures.length; index++) {
        var image = document.createElement("img");

         image.src = holdPictures[index].filePath;
         sendImage.appendChild(image);
    }
}

window.addEventListener("load", addCounter);

window.addEventListener("load", displayRandomPictures);

window.addEventListener("load", function() {
    document.getElementById("show-chart-button").addEventListener("click", showChart);
})

function showChart() {
	var chart = new CanvasJS.Chart("chartContainer", {
		title:{
			text: "Bus Mall"
		},
		data: [              
		{
			type: "column",
			dataPoints: pictureArray
		}
		]
	});
	chart.render();
}