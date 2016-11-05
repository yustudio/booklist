
angular.module('Namegame')		
		.controller('HomeController', ['$scope','nameFactory', function($scope, nameFactory){
			console.log('Running HomeController');

			$scope.submitName = function() {
				nameFactory.getNames($scope.filterName)
				.then(
					function(response){
						console.log("response is  " + response);
	//					console.log(JSON.stringify(response,null,2));
						var persons = response["data"]["items"];
						console.log("size of data: " + persons.length)
						// console.log("persons " + JSON.stringify(persons[1], null, 2));						
						$scope.persons = persons;

					},
					function(response) {
	                	$scope.message = "Error: "+response.status + " " + response.statusText;
	            	}
				)
			}

			$scope.orderByDate = function(item) {
			    var parts = item.volumeInfo.publishedDate.split('-');
			    console.log("parts before ---- " + parts)

			    if (parts.length == 1) {
			    	parts[1] = "01";
			    	parts[2] = "01";
			    } else if (parts.length == 2) {
			    	parts[2] = "01";
			    }

			    console.log("parts after ----" + parts)

			    var date = new Date(parseInt(parts[0]), 
			                        parseInt(parts[1]), 
			                        parseInt(parts[2]));

			    console.log("new date ----" + date)
			    return date;
			};

		}])

// .filter('orderByDate', function($filter)
// {
//     return function(input)
//     {
//         if(input == null){ return ""; }
//         var _date = $filter('date')(new Date(input), 'dd/MM/yyyy');
//         return _date.toUpperCase();
//     };
// });



