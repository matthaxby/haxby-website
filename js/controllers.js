app.controller('MainController', ['$scope', function($scope) {
  $scope.projects = [
    {image: "images/Ghost.png", title: "Ghost", description: "Ghost is a word game where 2 players take turns adding letters to an unfinished word. A player wins when the other player either completes a word or adds a letter that can’t be a word.", technical: "Google OAuth, Express, Handlebars, Mongo, Node, SASS and the tricky parsing of a library of 27,000 words."},
    {image: "images/Orc-Fight.png", title: "Orc Fight!", description: "A side project while learning Javascript, Orc Fight! simulates a fight between two characters that use different moves at random until one character wins.", technical: "Javascript, HTML, CSS, Multi-Media, recursion"},
    {image: "images/Reddit-Clone.png", title: "Reddit Clone", description: "The Reddit Clone was an exercise in making single page apps using Angular. A user can create posts, as well as comment and vote.", technical: "Angular, SASS, injected a relative date module"},
    {image: "images/Animation.gif", title: "Fun SASS animation", description: "I'm addicted to testing animations on CodePen, this was one of my first use of some of the finer points on keyframe animations and SASS logic", technical: "HTML, SASS"}
  ]

  $scope.menuToggle = false
  $scope.logoToggle = false
  $scope.currentIndex = 0
  $scope.direction = 'left'

  $scope.toggleLogo = function() {
    $scope.logoToggle = !$scope.logoToggle
  }

  $scope.toggleMenu = function() {
    $scope.menuToggle = !$scope.menuToggle
  }
  $scope.setCurrentProjectIndex = function (index) {
    $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right'
    $scope.currentIndex = index
  }
  $scope.isCurrentProjectIndex = function (index) {
    return $scope.currentIndex === index
  }
  $scope.prevProject = function () {
    $scope.direction = 'left'
    $scope.currentIndex = ($scope.currentIndex < $scope.projects.length - 1) ? ++$scope.currentIndex : 0
  }
  $scope.nextProject = function () {
    $scope.direction = 'right'
    $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.projects.length - 1
  }
}])
