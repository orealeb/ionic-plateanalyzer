angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})

.factory('myService2', function($http) {

    var getData = function() {

     /** var req = {
 method: 'POST',
 url: 'https://camfind.p.mashape.com/image_requests?image_request[locale]=en_US&image_request[remote_image_url]=http://upload.wikimedia.org/wikipedia/en/2/2d/Mashape_logo.png',
 headers: {
  'X-Mashape-Key': 'b7gwKEwrKWmshNp0pl6lOWFO774jp1K9HEPjsnupEdvqB0ikGk',
   'Content-Type': 'application/x-www-form-urlencoded'
 },
 //data: { test: 'test' },
}

var token = ' ';
$http(req)
.success(function(data, status, headers, config) {
      token = data.token;
        console.log(data.token);

    }).
    error(function(data, status, headers, config) {
      console.log(error);
      // log error
    });
    
  console.log(token);**/

  var req = {
 method: 'POST',
 url: 'https://camfind.p.mashape.com/image_requests?image_request[locale]=en_US&image_request[remote_image_url]=http://tastywokcuisine.com/wp-content/uploads/2013/04/ShrimpFriedRice3.jpg',
 headers: {
  'X-Mashape-Key': 'b7gwKEwrKWmshNp0pl6lOWFO774jp1K9HEPjsnupEdvqB0ikGk',
   'Content-Type': 'application/x-www-form-urlencoded'
 },
 //data: { test: 'test' },
}



        return $http(req).then(function(result){
                    console.log(result);

            return result.data.token;
        });




    };




    return { getData: getData };
})


.factory('myService', function($http) {

    var getData = function(token) {

     /** var req = {
 method: 'POST',
 url: 'https://camfind.p.mashape.com/image_requests?image_request[locale]=en_US&image_request[remote_image_url]=http://upload.wikimedia.org/wikipedia/en/2/2d/Mashape_logo.png',
 headers: {
  'X-Mashape-Key': 'b7gwKEwrKWmshNp0pl6lOWFO774jp1K9HEPjsnupEdvqB0ikGk',
   'Content-Type': 'application/x-www-form-urlencoded'
 },
 //data: { test: 'test' },
}

var token = ' ';
$http(req)
.success(function(data, status, headers, config) {
      token = data.token;
        console.log(data.token);

    }).
    error(function(data, status, headers, config) {
      console.log(error);
      // log error
    });
    
  console.log(token);**/

var req = {
 method: 'GET',
 url: 'https://camfind.p.mashape.com/image_responses/'+token,
 headers: {
  'X-Mashape-Key': 'b7gwKEwrKWmshNp0pl6lOWFO774jp1K9HEPjsnupEdvqB0ikGk',
 },
 //data: { test: 'test' },
}



        return $http(req).then(function(result){
          console.log(result);
            return result.data.name;
        });




    };




    return { getData: getData };
});





