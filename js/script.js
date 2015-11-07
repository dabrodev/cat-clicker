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
    },
    {
      name: "Eddie",
      imgSrc: "img/cat4.jpg"
    }
  ]
};

// Cat  - List cat names and display cat picture on click
var catList = document.getElementById('cat-list');
var catElem;
var catPicArea = document.getElementById('cat-show');

for (var i = 0; i < cat.cats.length; i++) {
    var catNew = cat.cats[i].name;
    catElem = document.createElement("li");
    catElem.className = "cat" + (i+1);

    catElem.innerHTML = catNew;
    var catPic = cat.cats[i].imgSrc;
    catElem.addEventListener('click', (function(param) {
      return function() {
        catPicArea.innerHTML = '<img src="' + param + '">';
      };
    })(catPic));

    catList.appendChild(catElem);
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
