var layerOne = document.getElementById("layer-one");
var layerTwo = document.getElementById("layer-two");


var path = document.querySelector('path');
var length = path.getTotalLength();


path.style.transition = path.style.WebkitTransition =  'none';

path.style.strokeDasharray = length + ' ' + length;
path.style.strokeDashoffset = length;

path.getBoundingClientRect();

path.style.transition = path.style.WebkitTransition =
  'stroke-dashoffset 2s ease-in-out';

path.style.strokeDashoffset = '0';

var turnOff = function () {
  layerOne.style.display = "none";
};

var turnOn = function () {
  layerTwo.style.opacity = "1";
  layerTwo.style.transition = "opacity .25s ease-in-out"
};


setTimeout(turnOff, 2000);
setTimeout(turnOn, 800);
