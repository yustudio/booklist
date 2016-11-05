angular.module('Namegame', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

	$stateProvider
		.state('app',{
			url  : '/',
			views:{
				// 'header@' : {
				// 	templateUrl : 'common/header/header.view.html',
				// 	controller  : "HeaderController"
				// },
				'content@':{
					templateUrl : "views/home.html",
					controller  : "HomeController"
				}
				// 'footer' :{
				// 	templateUrl : "common/footer/footer.view.html",
				// 	controller  : "FooterController"
				// }
			}
		})		

	$urlRouterProvider.otherwise('/');
	})

.directive('personTile', function(){

	return {
		restrict: 'A',
		scope: {
			p: '=person'  // private scope containing object p
		},		
		templateUrl: 'views/person-template.html',
		link: function (scope, elem, attrs) {
			scope.hello = function() {
				alert("hello, this is " + scope.p.authors)
			}
		}
	}
})

