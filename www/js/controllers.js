angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('FriendsCtrl', function($scope, Friends) {
    $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
    $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {})

.controller("ExampleController", function($scope, $cordovaCamera, $http, camFindTokenService, camFindResultService, nutritionixDataService, $timeout, $interval) {
    $scope.resturant = 'KFC';


    $scope.takePicture = function() {
        var options = {
            quality: 75,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: true,
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


    //var token = ' ';


    //var food = 'undefined';

    //var nutriondetails = ' ';

$scope.runServices = function () {
  

   var myDataPromise = camFindTokenService.getData();

    myDataPromise.then(function(result) { // this is only run after $http completes
        console.log("result name " + result);

        $scope.token = result;


        mytick = function tick() {
            food = camFindResultPromise($scope.token);

            if ($scope.food === undefined) {
                $timeout(tick, 5000);
                console.log($scope.food + ' is undefined');
            }
            else
            {      console.log($scope.food + ' not undefined');
                  return 'exit function';
            }
        };
        $timeout(mytick, 5000);

    });


camFindResultPromise = function(token) {

        console.log($scope.token);

        var myDataPromise = camFindResultService.getData($scope.token = token);

        myDataPromise.then(function(result) { // this is only run after $http completes
            console.log("result name " + result);

            $scope.food = result;
            if(result !== undefined)
            {
              console.log(result);
              //$alert('food is not underfine')
              $scope.food = $scope.food.replace(' ', '%20');
              nutritionixResultPromise($scope.food, $scope.resturant);
              return 'end function';
            }

        });

        return $scope.food;
   }

 nutritionixResultPromise = function(food,resturant) {
    var myDataPromise = nutritionixDataService.getData($scope.food = food,$scope.resturant = resturant);

        myDataPromise.then(function(result) { // this is only run after $http completes
            //console.log("result name " + result);

            $scope.id = result.data.hits[0]._id;
            $scope.brand_name = result.data.hits[0].fields.brand_name;
            $scope.item_name =result.data.hits[0].fields.item_name;
            $scope.nf_calories =result.data.hits[0].fields.nf_calories;
            $scope.nf_total_fat =result.data.hits[0].fields.nf_total_fat;
            console.log(result);
            console.log("result data " +result.data);
            console.log("result data " +result.data.hits[0]._id);
            console.log("result data " +result.data.hits[0].fields.brand_name);
            console.log("result data " +result.data.hits[0].fields.item_name);
            console.log("result data " +result.data.hits[0].fields.nf_calories);
            console.log("result data " +result.data.hits[0].fields.nf_total_fat);
        //$scope.$apply();
            //food = result;
            //food = food.replace(' ', '%20');

        });
      }

}



   


    



});