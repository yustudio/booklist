
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

			// $scope.orderByDate = function(item) {
			//     var parts = item.volumeInfo.publishedDate.split('-');
			//     console.log("----" + parts)
			//     if (parts.length == 3)
			//     var date = new Date(parseInt(parts[2]), 
			//                         parseInt(parts[1]), 
			//                         parseInt(parts[0]));
			//     return date;
			// };

		}])

.filter('orderByDate', function($filter)
{
    return function(input)
    {
        if(input == null){ return ""; }
        var _date = $filter('date')(new Date(input), 'dd/MM/yyyy');
        return _date.toUpperCase();
    };
});



