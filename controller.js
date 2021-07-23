var app = angular.module("myApp", []);

app.controller("myController", function($scope, $http) {
        var token_for_api = "7cf3685e0da46779e5c6226af716b024700cd4bb";
        var req = {
            method: 'GET',
            url: "http://172.26.41.151:8080/api/panel/seo/city/",
            headers: {
                'Authorization': "token " + token_for_api
            },
        }
        $http(req).then(function successCallback(response) {
        var apiData = response.data.count;
            $scope.count = apiData;
            console.log("Services  ",apiData)
            return apiData; 
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    return response
  });
})
