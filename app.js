'use strict';

// window.onload = choosePic;

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


displayRandomPictures();   
 

 



// var shuffle = function(array) {
//     var tmp, i, j;
//     for (index = array.length; i>1;) {

//     }
// }


// var allPictures = 

// function getRandomPicture(randomPic, diplayImages) {
//     var randomPic = pictureArray[Math.floor(Math.random() * pictureArray.length)];
//     var diplayImages = document.getElementById("getRandomPicture").innerHTML = "<img src='" + randomPic + "'>";
//     for (var pictureIndex = 0; pictureIndex < pictureArray.length; pictureArray++)
   
// }


// document.body.innerHTML = ("<img src='" + randomPic + "'>");
//  = function(randomPic) {

//     {
// //         var picture1 =
//         var picture2 = 
//         var picture3

//     }


//     //     }


//     // }
//     var picture1 =
// var picture2
//     var picture3