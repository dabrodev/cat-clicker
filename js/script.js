// Cat Data

var cat = {
  cats: [
    {
      name: "Kitty",
      imgSrc: "img/cat1.jpg"
    },
    {
      name: "Johnny",
      imgSrc: "img/cat2.jpg"
    },
    {
      name: "Lucia",
      imgSrc: "img/cat3.jpg"
    }
  ]
};

// Cat  - List Names
var catList = document.getElementById('cat-list');
var catElem;

for (var i = 0; i < cat.cats.length; i++) {
    catElem = document.createElement("li");
    catList.appendChild(catElem);
    catElem.className = "cat" + (i+1);
    catElem.innerHTML = cat.cats[i].name;
}

// Display Cat on click on cat name
var catName = document.getElementsByTagName('li');
var catPicArea = document.getElementById('cat-show');


var catArea = [ function() {
  catPicArea.innerHTML = '<img src="' + cat.cats[0].imgSrc + '">';
},
function() {
  catPicArea.innerHTML = '<img src="' + cat.cats[1].imgSrc + '">';
},
function() {
  catPicArea.innerHTML = '<img src="' + cat.cats[2].imgSrc + '">';
}
];

for( var i=0; i < catName.length; i++) {

catName[i].addEventListener('click', catArea[i], false);

}

// Counter
/*
var elem = document.getElementById('cat-pic');
var counterArea = document.createElement("span");
counterArea.innerHTML = 0;
document.getElementById("log").appendChild(counterArea);
var counter = 0;

elem.addEventListener('click', function(){
  counter += 1;
  counterArea.innerHTML = counter;
  document.getElementById("log").appendChild(counterArea);
}, false);
*/
