
angular.module('Namegame')
	.constant("baseURL","https://www.googleapis.com/books/v1/volumes?q=inauthor:")
	.service('nameFactory', ['$http', 'baseURL', function($http, baseURL){
		this.getNames = function(name) {
			console.log("------------ in services")
			console.log("--------------URL is: " + baseURL+name)
			return $http.get(baseURL+name);
		}
	}]);