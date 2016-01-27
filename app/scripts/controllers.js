//console.log("controllers.js called");
var myyoprojectCtrls = angular.module('myyoprojectCtrls', []);

myyoprojectCtrls.controller('editController', function($scope){
  "ngInject";
	$scope.message = "I am the edit controller!";
});

myyoprojectCtrls.controller('aboutController', function($scope){
  "ngInject";
	$scope.message = "I am the about controller!";
});

myyoprojectCtrls.controller('contactController', function($scope){
  "ngInject";
	$scope.message = "I am the contact controller!";
});

myyoprojectCtrls.controller('homeController', function($scope){
  "ngInject";
	$scope.message = "I am the home controller!";
});

myyoprojectCtrls.controller('registrationController', function($scope, UserData){
  "ngInject";

	$scope.message = "I am the registration controller!";
	// $scope.firstName = dataService.dataObj;
	// $scope.lastName = dataService.dataObj;
	$scope.UserData = UserData;
});

 myyoprojectCtrls.controller('profileviewController', function($scope, $routeParams, $http){
  "ngInject";

    $scope.message;
    $scope.conversation = [];
    $scope.chunkedData;

 		$http.get('communists/' + $routeParams.communistName + '.json').success(function(data){
 			$scope.communist = data;
 		}); 

  function chunk(arr, size) {
    var newArr = [];
    for (var i=0; i<arr.length; i+=size) {
      newArr.push(arr.slice(i, i+size));
    }
    return newArr;
  }

  function communistResponse(){

    $scope.communist.quote;
    var allSentences = $scope.communist.quote.match( /\S.*?\."?(?=\s|$)/g);

    var randIndex = Math.floor((Math.random() * (allSentences.length)));
   return allSentences[randIndex];
  }


  
  $scope.sendMessage = function(){
    $scope.conversation.push($scope.message);
    $scope.conversation.push(communistResponse());    
    $scope.chunkedData = chunk($scope.conversation, 2);
  }

  $scope.clearMessage = function(){
    $scope.chunkedData = [];
    $scope.conversation = [];
  }

 	});

myyoprojectCtrls.controller('favoritesController', function($scope, $http, UserData){
	 "ngInject";

  //get names of famous communists from local JSON file
 	$http.get("communists/communists.json")
 		.then(function(response){
 		$scope.communists = response.data.communists;

	$scope.message = "I am the favorites controller";
	$scope.UserData = UserData;
	});
});

myyoprojectCtrls.controller('listviewController', function($scope, $http, UserData, FavoritesData){
	//Get user data via factory
	$scope.UserData = UserData;
	$scope.favorites = [];
  $scope.chunkedData = [];
  $scope.communists = [];
  $scope.randomName = '';
  $scope.filters = {};



  function chunk(arr, size) {
    var newArr = [];
    for (var i=0; i<arr.length; i+=size) {
      newArr.push(arr.slice(i, i+size));
    }

    return newArr;
  }

	$scope.loadMore = function(){
		for (var i = 0; i<25; i++){
			$scope.communists.push($scope.allCommunists[$scope.counter]);
		}
	};


	//get names of famous communists from local JSON file
 	$http.get("communists/communists.json")
 		.then(function(response){
 		$scope.communists = response.data.communists;
    $scope.randomName = $scope.communists[Math.floor((Math.random() * $scope.communists.length))].name;

    $scope.chunkedData = chunk($scope.communists, 3);

 		$http.get("http://en.wikipedia.org/w/api.php?action=query&prop=revisions&titles=" + response.data.communists + "&prop=pageimages&format=json&pithumbsize=400&indexpageids")
        .then(function (response){
        	$scope.communistImage = response;
        });
 	});

 	//add communist to favorites if clicked
 	$scope.addToFavorites = function(item){
 		item.isFavorite = true;
 //		var index = $scope.communists.indexOf(item);
 		// $scope.favorites.push(item);
 		// FavoritesData.name = item.name;
 		// console.log(item);
 		// console.log($scope.favorites[0].name);
 		//console.log($scope.favorites[1].name);
 		//$scope.favorites = FavoritesData;
 	};

 	// $scope.shareFavorites = function(){
 	// 	$scope.favorites = FavoritesData;
 	// 	alert("shareFavorites was called!");
 	// };

 	//delete communist if clicked
 	$scope.delete = function(item){
    var commyIndex = $scope.communists.indexOf(item);
 		var chunkedIndex = $scope.chunkedData.indexOf(item);
 		$scope.communists.splice(commyIndex,1);
    $scope.chunkedData = chunk($scope.communists, 3);

 	}

 	$scope.strongComrades = function(communist){
 		var counter = 0;
 	//	var similarities = [];
 	//	alert(communist.hobbies);
 		//retrieves hobbies user has selected
 		for(var data in UserData.Hobbies){
 			if(!UserData.Hobbies.hasOwnProperty(data)) continue;
 			var hobby = UserData.Hobbies[data];	
 			 for(var info in hobby){			
 			 	if(!hobby.hasOwnProperty(info)) continue;
 			 	
 			 	//if the user likes the hobby, see if the communist likes it too
 			 	if(hobby[info] == true){
 			 //	alert("User's hobby:" + hobby['name']);
 			 		for(var commyHobby in communist.hobbies){
 			 	//		alert(commyHobby);
 			 			if(communist.hobbies[commyHobby] === hobby['name']){
 					//		alert(communist.name + " likes " + communist.hobbies[commyHobby] +" too!");
 			 				counter++;
							
							//alert(hobby['name']);
 			 				//alert(hobby['match']);


 			 				hobby['match'] = 'true'; 

 			 			//	communist.similarities.push(hobby['name']);
 			 			//	alert(communist.similarities);
 			 			//	similarities.push(hobby['name']);
 			 		//	alert(communist.similarities);

 			 			}
 			 		}
 			 	}
 			}
 		}

   // console.log(communist);

 		if(counter>1){
 			communist.similarities = "Strong Comrades"; 
 		}
 		if(counter==1){
 			communist.similarities[0] = "Mild Comrades";
 		}
 		if(counter<1){
 			communist.similarities = "Weak Comrades"
 		}

 		return [counter,communist.similarities];

 		// if (counter>1){
 		// //	communist.similarities = [];
 		// 	return true;
 		// } else {
 		// 	communist.similarities = [];
 		// 	return false;
 		// } 
 	};

 	//shuffle array
 	function shuffle(o){
    	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
	}

	$scope.showModal = false;
    $scope.toggleModal = function(communist){
    	$scope.communist = communist;
        $scope.showModal = !$scope.showModal;
    };
});

myyoprojectCtrls.directive('modal', [function () {
    return {
      template: '<div class="modal fade">' + 
          '<div class="modal-dialog">' + 
            '<div class="modal-content">' + 
              '<div class="modal-header">' + 
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + 
                '<h4 class="modal-title">{{ title }}</h4>' + 
              '</div>' + 
              '<div class="modal-body" ng-transclude></div>' + 
            '</div>' + 
          '</div>' + 
        '</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
        scope.title = attrs.title;

        scope.$watch(attrs.visible, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
  }]);


