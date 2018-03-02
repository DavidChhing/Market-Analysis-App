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



function getRandomPicture(elementId) {
    
   var holdPictures = [];
   
    while (holdPictures.length < 3 ) {
        var randomPic = pictureArray[Math.floor(Math.random() * pictureArray.length)];
        // var diplayImages = document.getElementById(elementId).innerHTML = "<img src='" + randomPic + "'>";
        if (!holdPictures.includes(randomPic) ){
            holdPictures.push(randomPic)
        }  
    };
   console.log(holdPictures)


    
    
    // }
};
    // (pictureArray.length !=3) {

getRandomPicture("getRandomPicture1");   
// getRandomPicture("getRandomPicture2");   
// getRandomPicture("getRandomPicture3");   

 



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