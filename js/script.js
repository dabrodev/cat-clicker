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
        counter = 0;
        counterArea.innerHTML = counter;
        catPicArea.innerHTML = '<img src=' + param + ' class="cat-pic">';
      };
    })(catPic));

    catList.appendChild(catElem);
}

// Counter

var elem = document.createElement("div");
console.log(elem);
var counterArea = document.createElement("span");


var counter = 0;

catPicArea.addEventListener('click', function() {
  counter += 1;
  counterArea.innerHTML = counter;
}, false);

document.body.appendChild(counterArea);
