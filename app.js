var layerOne = document.getElementById("layer-one"),
    layerTwo = document.getElementById("layer-two"),
    progressBar = document.getElementById("progress-bar"),
    container = document.getElementById('container'),
    dropdown = document.getElementById('drop-down'),
    menu = document.getElementById('menu')

var startDate = new Date (2015, 3, 20);
var endDate = new Date(2015, 9, 9);
var today = new Date();
var totalTime = endDate - startDate;
var timeSinceStart = today - startDate;
container.style.paddingTop = 30 - (timeSinceStart / totalTime) * 30 + 'em';

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

dropdown.addEventListener('click', function() {
  menu.style.display = 'block'
})
