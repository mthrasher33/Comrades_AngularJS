
var myyoprojectServices = angular.module('myyoprojectServices', []);

 myyoprojectServices.service('dataService', function(){
 	// var _dataObj = {};
 	// this.dataObj = _dataObj;
 	return {
 		firstName: '',
 		lastName : '',
  	}

 });

 myyoprojectServices.factory('UserData', function(){
 	return {
 		FirstName: '',
 		LastName: '',
 		Username: '',
 		Hobbies: {

 			Archery: {"name" : "archery", "value" : 'false', "match" : 'false'},
 			Astronomy: {"name" : "astronomy", "value" : 'false', "match" : 'false'},
 			Backpacking: {"name" : "backpacking", "value" : 'false', "match" : 'false'},
 			Baseball: {"name" : "baseball", "value" : 'false', "match" : 'false'},
 			Basketball: {"name" : "basketball", "value" : 'false', "match" : 'false'},
 			Blacksmithing: {"name" : "blacksmithing", "value" : 'false', "match" : 'false'},
 			Cycling: {"name" : "cycling", "value" : 'false', "match" : 'false'},
 			Dodgeball: {"name": "dodgeball", "value" : 'false', "match" : 'false'},
 			Driving: {"name" : "driving", "value" : 'false', "match" : 'false'},
 			Fishing: {"name" : "fishing", "value" : 'false', "match" : 'false'},
 			Flying: {"name" : "flying", "value" : 'false', "match" : 'false'},
 			Foraging: {"name" : "foraging", "value" : 'false', "match" : 'false'},
 			Graffiti: {"name" : "graffiti", "value" : 'false', "match" : 'false'},
 			Hiking: {"name" : "hiking", "value" : 'false', "match" : 'false'},
 			Horseshoes: {"name" : "horseshoes", "value" : 'false', "match" : 'false'},
 			Homebrewing: {"name" : "homebrewing", "value" : 'false', "match" : 'false'},
 			Hunting: {"name" : "hunting", "value" : 'false', "match" : 'false'},
 			Jogging: {"name" : "jogging", "value" : 'false', "match" : 'false'},
 			Juggling: {"name" : "juggling", "value" : 'false', "match" : 'false'},
 			Kayaking: {"name" : "kayaking", "value" : 'false', "match" : 'false'},
 			LARPing: {"name" : "larping", "value" : 'false', "match" : 'false'},
 			Machining: {"name" : "machining", "value" : 'false', "match" : 'false'},
 			Magic: {"name" : "magic", "value" : 'false', "match" : 'false'},
 			Music: {"name" : "music", "value" : 'false', "match" : 'false'},
 			Origami: {"name" : "origami", "value" : 'false', "match" : 'false'},
 			Painting: {"name" : "painting", "value" : 'false', "match" : 'false'},
 			Parkour: {"name" : "parkour", "value" : 'false', "match" : 'false'},
 			Pottery: {"name" : "pottery", "value" : 'false', "match" : 'false'},
 			Photography: {"name" : "photography", "value" : 'false', "match" : 'false'},
 			Quilting: {"name" : "quilting", "value" : 'false', "match" : 'false'},
 			Reading: {"name" : "reading", "value" : 'false', "match" : 'false'},
 			Rugby: {"name" : "rugby", "value" : 'false', "match" : 'false'},
 			Skateboarding: {"name" : "skateboarding", "value" : 'false', "match" : 'false'},
 			Skiing: {"name" : "skiing", "value" : 'false', "match" : 'false'},
 			Scouting: {"name" : "scouting", "value" : 'false', "match" : 'false'},
 			Scrapbooking: {"name" : "scrapbooking", "value" : 'false', "match" : 'false'},
 			Scultping: {"name" : "sculpting", "value" : 'false', "match" : 'false'},
 			Taxidermy: {"name" : "taxidermy", "value" : 'false', "match" : 'false'},
 			Walking: {"name" : "walking", "value" : 'false', "match" : 'false'},
 			Whittling: {"name" : "whittling", "value" : 'false', "match" : 'false'},
 			Woodworking: {"name" : "woodworking", "value" : 'false', "match" : 'false'},
 			Writing: {"name" : "writing", "value" : 'false', "match" : 'false'},
 			Yoga: {"name" : "yoga", "value" : 'false', "match" : 'false'}
 		}
 	};
 });

 myyoprojectServices.factory('FavoritesData', function(){
 	return {
 		name: ''
 	};
 });