angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var friends = [{
        id: 0,
        name: 'Scruff McGruff'
    }, {
        id: 1,
        name: 'G.I. Joe'
    }, {
        id: 2,
        name: 'Miss Frizzle'
    }, {
        id: 3,
        name: 'Ash Ketchum'
    }];

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

.factory('camFindTokenService', function($http) {

    var getData = function() {



        var req = {
            method: 'POST',
            url: 'https://camfind.p.mashape.com/image_requests?image_request[locale]=en_US&image_request[remote_image_url]=http://tastywokcuisine.com/wp-content/uploads/2013/04/ShrimpFriedRice3.jpg',
            headers: {
                'X-Mashape-Key': 'b7gwKEwrKWmshNp0pl6lOWFO774jp1K9HEPjsnupEdvqB0ikGk',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        }



        return $http(req).then(function(result) {
            //console.log(result);
            return result.data.token;
        });




    };




    return {
        getData: getData
    };
})


.factory('camFindResultService', function($http) {

    var getData = function(token) {

        var req = {
            method: 'GET',
            url: 'https://camfind.p.mashape.com/image_responses/' + token,
            headers: {
                'X-Mashape-Key': 'b7gwKEwrKWmshNp0pl6lOWFO774jp1K9HEPjsnupEdvqB0ikGk',
            },
        }



        return $http(req).then(function(result) {
            //console.log(result);
            return result.data.name;
        });




    };




    return {
        getData: getData
    };
})


.factory('nutritionixDataService', function($http) {

    var getData = function(food, resturant) {

        var req = {
            method: 'GET',
            url: 'https://api.nutritionix.com/v1_1/search/'+resturant+'%20'+food +'?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=80fbbce8&appKey=f00f0559be1828bf7113ee64afcfa9f6',
          }



        return $http(req).then(function(result) {
            console.log(result);
            return result;
        });




    };




    return {
        getData: getData
    };
});