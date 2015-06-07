var layerOne = document.getElementById("layer-one");
var layerTwo = document.getElementById("layer-two");
var progressBar = document.getElementById("progress-bar");
var container = document.getElementById('container');

var startDate = new Date (2015, 3, 20);
var endDate = new Date(2015, 9, 20);
var today = new Date();
var totalTime = endDate - startDate;
var timeSinceStart = today - startDate;
progressBar.style.height = (timeSinceStart / totalTime) * 40 + 'em';

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
  layerOne.style.display = "hidden";
};

var turnOn = function () {
  layerTwo.style.opacity = "1";
  layerTwo.style.transition = "opacity .25s ease-in-out"
};

setTimeout(turnOn, 800);
setTimeout(turnOff, 1500);
