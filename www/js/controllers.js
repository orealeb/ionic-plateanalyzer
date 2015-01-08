angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
})

.controller("ExampleController", function($scope, $cordovaCamera, $http, myService, myService2, $timeout, $interval) {
  //$scope.resturant = '';
    $scope.takePicture = function() {
        var options = { 
            quality : 75, 
            destinationType : Camera.DestinationType.DATA_URL, 
            sourceType : Camera.PictureSourceType.CAMERA, 
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };
 
        $cordovaCamera.getPicture(options).then(function(imageData) {
            $scope.imgURI = "data:image/jpeg;base64," + imageData;
        }, function(err) {
            // An error occured. Show a message to the user
        });
    }


var token = ' ';

    
var food ='undefined';


 var myDataPromise = myService2.getData();
    myDataPromise.then(function(result) {  // this is only run after $http completes
             console.log("result name "+result);

       token= result;


     //var count = 0;   
    mytick = function tick() {
         food = dataPromise(token);
        //$scope.posts = food;
          if(food == 'undefined'){
        $timeout(tick, 5000);
        console.log(food);
      //$scope.posts = food;
    
    }
    };//)();
    $timeout(mytick, 5000);
 
        //$interval(dataPromise(token), 50);
        //$interval.flush();

/**var timer = $timeout( dataPromise(token), 5000 );

timer.then( function( result ) {
  console.log(result);
  if ( result != 'undefined' ) {
  $timeout.cancel(timer)  } 
  else {
    // handle the error
  }
});**/

               // Simple GET request example :

       //console.log("data.name"+$scope.data.name);
    });

dataPromise = function(token) {
      
  console.log(token);

    var myDataPromise = myService.getData(token);

    myDataPromise.then(function(result) {  // this is only run after $http completes
             console.log("result name "+result);

       food= result;


   
           //console.log("data.name"+$scope.data.name);
      


        });

    return food;

//return food;




}

    $scope.callNutritionAPI = function (food, resturant) {
 if(food != 'undefined'){
                      //food = food.replace(' ', '%20');

                   // Simple GET request example :
      $http.get('https://api.nutritionix.com/v1_1/search/'+resturant+"%20"+food+'?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=80fbbce8&appKey=f00f0559be1828bf7113ee64afcfa9f6').
      success(function(data, status, headers, config) {
        console.log(data);
         //$scope.$apply(function function_name () {
                              //food = food.replace('%20', ' ');

        $scope.posts = food;      
        //console.log("In stuff" + food)});
        // this callback will be called asynchronously
        // when the response is available
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
    }}
 



//$scope.posts = food;






 
});


