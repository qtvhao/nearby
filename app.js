var getRandomIndex = function (myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)];
};
var RecController = function ($http, $scope, RecService) {
    var scope = $scope;
        RecService.all().then(function (resp) {
            scope.recs = resp.data;
            scope.rec = getRandomIndex(scope.recs);
        })
};
angular
    .module('myApp', [])
    .service('RecService', function ($http) {
        return {
            all: function () {
                return $http.get('https://qtvhao.github.io/nearby/api/v2/recs/core.json')
            }
        };
    })
    .controller('RecController', RecController);
