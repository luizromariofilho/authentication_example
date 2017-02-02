angular.module('app', ['ng-token-auth'])
	.config(function($authProvider) {
        $authProvider.configure({
            apiUrl: 'http://localhost:3000/'
        });
    });