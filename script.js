// var x = 5;
// var y = 7;
// var z = x + y;
// console.log(z);
// var A = 'Hello';
// var B = ' world!';
// var C = A + B;
// console.log(C);

// function SumNPrint(x1, x2) {
//     var x3 = x1 + x2;
//     console.log(x3);
//  }
//  SumNPrint(x,y);
//  SumNPrint(A,B);

//  if (C.length > z) {
//     console.log(C);
//  } else if (z > C.length) {
//     console.log(z);
//  } else {
//     console.log("good job!");
//  }

// var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
// var L2 = ["Apple", "Banana", "Kiwi", "Orange"];
// function findTheBanana(array) {
//    for (let index = 0; index < array.length; index++) {
//        const element = array[index];
//        if (array[index] === "Banana") {
//            alert("found the Banana in " + [index])
//        }
//    }}
// findTheBanana(L1);
// findTheBanana(L2);

// L1.forEach(element => {
//     if (element === "Banana") {
//         alert("We found a banana in the first array")
//     } 
//  });
//  L2.forEach(element => {
//     if (element === "Banana") {
//         alert("We found a banana in the second array")
//     }
//  });

// /*function greetingFunc() {
//     var d = new Date();
//     var h = d.getHours();
//     if (h>=5 && h<12) {
//         console.log("Good morning!");
//     } else if (h>=12 && h<18) {
//         console.log("Good afternoon!");
//     } else if (h>=18 && h<20) {
//         console.log("Good evening!");
//     } else if (h>=20 && h<24 ||  h<5) {
//         console.log("Good night!");
//     }
// }
//  greetingFunc();*/

function greetingFunc() {
    var d = new Date();
    var h = d.getHours();
    var E = document.getElementById("greeting");
    if (h>=5 && h<12) {
        E.innerHTML=" Good morning, I am Jessica Zheng";
    } else if (h>=12 && h<18) {
        E.innerHTML+=" Good afternoon, I am Jessica Zheng";
    } else if (h>=18 && h<20) { 
        E.innerHTML=" Good evening, I am Jessica Zheng";
    } else  {
        E.innerHTML="Good night, I am Jessica Zheng"; 
    } }
 //greetingFunc();

var L = window.location.href;
console.log(L);
if (L.includes("index.html")) { /* run only for index.html page */
   greetingFunc();
}

function addYear() {
    var d= new Date();
    var y = d.getFullYear();
    var E = document.getElementById("copyYear");
    E.innerHTML+=y;
 }

// function showList() {
//     document.getElementById("FavList").style.display = "block";
//     document.getElementById("SeeMoreBTN").style.display = "none";
// }
$("#readLess").click(function(){
    $("#longIntro").hide();
    $("#readLess").hide();  
    $("#readMore").show();    

  });
   $("#readMore").click(function(){
    $("#longIntro").show();
    $("#readLess").show();
    $("#readMore").hide();    
  });

function validate() {
    var userName = document.getElementById("UserName");
    var userEmail = document.getElementById("UserEmail");
    var userText = document.getElementById("Usertext");
    var msg = document.getElementById("ValidateMsg");
    if (!userName.checkValidity() || !userEmail.checkValidity() || !userText.checkValidity()) {
        msg.innerHTML = "Please fill out the form correctly so I can get back to you :)";
    }
 }

 // Initialize and add the map
let map;

async function initMap() {
 // The location of CMU
 const position = { lat: 40.441224964750766, lng:-79.95778878418706};
 // Request needed libraries.
 //@ts-ignore
 const { Map } = await google.maps.importLibrary("maps");
 const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

 // The map, centered at CMU
 map = new Map(document.getElementById("map"), {
   zoom: 12,
   center: position,
   mapId: "DEMO_MAP_ID",
 });
 // The marker, positioned at CMU
 const marker = new AdvancedMarkerElement({
   map: map,
   position: position,
   title: "CMU",
 });
}
initMap();

function activeNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}