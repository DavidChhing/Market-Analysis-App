'use strict';

var pictureArray = [
    "Pictures/bag.jpg",
    "Pictures/banana.jpg",
    "Pictures/boots.jpg",
    "Pictures/chair.jpg",
    "Pictures/cthulhu.jpg",
    "Pictures/dragon.jpg",
    "Pictures/pen.jpg",
    "Pictures/scissors.jpg",
    "Pictures/shark.jpg",
    "Pictures/babysweep.jpg",
    "Pictures/unicorn.jpg",
    "Pictures/usb.jpg",
    "Pictures/water_can.jpg",
    "Pictures/wine_glass.jpg",
];

function displayRandomPictures() {
    
   var holdPictures = [];
   
    while (holdPictures.length < 3 ) {
        var randomPic = pictureArray[Math.floor(Math.random() * pictureArray.length)];
        if (!holdPictures.includes(randomPic) ){
            holdPictures.push(randomPic)
        }  
    }
   
    for (var index = 0; index < holdPictures.length; index++) {
        var image = document.createElement("img");
        var sendImage = document.getElementById("getRandomPicture");
         image.src = holdPictures[index];
         sendImage.appendChild(image);
    }
}

window.addEventListener("load", displayRandomPictures);

 


window.addEventListener("load", function() {
    document.getElementById("show-chart-button").addEventListener("click", showChart);



})

window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer", {
		title:{
			text: "Bus Mall"              
		},
		data: [              
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "column",
			dataPoints: pictureArray
				{ label: "apple",  y: 10  },
				{ label: "orange", y: 15  },
				{ label: "banana", y: 25  },
				{ label: "mango",  y: 30  },
				{ label: "grape",  y: 28  }
			]
		}
		]
	});
	chart.render();
}
