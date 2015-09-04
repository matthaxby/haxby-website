app.controller('MainController', ['$scope', function($scope) {
  $scope.projects = [
    {image: "images/Ghost.png", description: "Ghost Game"},
    {image: "images/Orc-Fight.png", description: "Orc Fight"},
    {image: "images/Reddit-Clone.png", description: "Reddit Clone"}
  ]

  $scope.currentIndex = 0
  $scope.direction = 'left'

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
