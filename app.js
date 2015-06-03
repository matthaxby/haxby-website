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
//
// var turnOff = function (bg) {
//   bg.style.display = "none", 2000;
// };
//
// var turnOn = function (bg) {
//   bg.style.display = "block", 2000;
// };
//
//
// setTimeout(turnOff(layerOne), 2000);
// setTimeout(turnOn(layerTwo), 2000);
