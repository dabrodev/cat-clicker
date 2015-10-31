var counter = 0;

var elem = document.getElementById('cat-pic');
var p = document.createElement("span");
p.innerHTML = 0;
document.getElementById("log").appendChild(p);

elem.addEventListener('click', function(){
  counter += 1;

  p.innerHTML = counter;
  document.getElementById("log").appendChild(p);

}, false);
