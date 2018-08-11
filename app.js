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
var RecService = function ($http, ENDPOINTS) {
    return {
        all: function () {
            return $http.get(ENDPOINTS.V2.RECS.ALL);
        }
    };
};
angular
    .module('myApp', [])
    .constant('ENDPOINTS', {
        V2: {
            RECS: {
                ALL: 'https://qtvhao.github.io/nearby/api/v2/recs/core.json'
            }
        }
    })
    .service('RecService', RecService)
    .controller('RecController', RecController);
