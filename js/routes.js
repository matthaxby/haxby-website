app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/about.html'
    })
    .when('/projects', {
      templateUrl: 'templates/projects.html'
    })
    .when('/about', {
      templateUrl: 'templates/about.html'
    })
    .when('/contact', {
      templateUrl: 'templates/contact.html'
    })
}])
