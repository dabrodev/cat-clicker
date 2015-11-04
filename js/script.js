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
    catElem.innerHTML = cat.cats[i].name;
}

// Counter
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
