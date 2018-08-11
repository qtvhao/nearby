var getRandomIndex = function (myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)];
};
angular.module('myApp', []).controller('RecController', function ($http, $scope) {
    $http.get('https://qtvhao.github.io/nearby/api/v2/recs/core.json').then(function (resp) {
        var scope = $scope;
        scope.recs = resp.data;
        scope.rec = getRandomIndex(scope.recs);
    })
});
