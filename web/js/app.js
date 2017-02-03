var app = angular.module('app', ['ng-token-auth', 'ui.router']);

app.config(function($authProvider) {
	$authProvider.configure({
		apiUrl: 'http://localhost:3000'
	});
});

app.config(function($stateProvider,$urlRouterProvider) {
  	$urlRouterProvider.otherwise("/hello");

	var helloState = {
		name: 'hello',
		url: '/hello',
		templateUrl: 'views/hello.html'
	}

	var aboutState = {
		name: 'about',
		url: '/about',
		templateUrl: 'views/about.html'
	}

	var loginState = {
		name: 'login',
		url: '/login',
		templateUrl: 'views/login.html'
	}

	$stateProvider.state(helloState);
	$stateProvider.state(aboutState);
	$stateProvider.state(loginState);
});


app.controller('IndexCtrl', function($scope, $auth) {
    $scope.handleLoginBtnClick = function() {
      $auth.submitLogin($scope.loginForm)
        .then(function(resp) {
          console.log('funcionou');
        })
        .catch(function(resp) {
          console.log('nao funcionou');
        });
    };
  });