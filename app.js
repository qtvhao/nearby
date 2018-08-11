var getRandomIndex = function (myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)];
};
var RecController = function ($http, $scope, RecService) {
    var scope = $scope;
    scope.fetchRec = function () {
        RecService.all().then(function (resp) {
            scope.recs = resp.data;
            scope.rec = getRandomIndex(scope.recs);
        });
    };
    scope.fetchRec();
    scope.like = function () {
        RecService.like(scope.rec);
        scope.recsLiked = RecService.getLikedRecs();
        scope.fetchRec();
    };
    scope.pass = function () {
        RecService.pass(scope.rec);
        scope.fetchRec();
    };
};
var RecService = function ($http, ENDPOINTS) {
    return {
        all: function () {
            return $http.get(ENDPOINTS.V2.RECS.ALL);
        },
        like: function (rec) {
            var recsLiked = localStorage.recsLiked;
            if (!recsLiked || !recsLiked.length) {
                recsLiked = [];
            } else {
                recsLiked = JSON.parse(recsLiked);
            }
            recsLiked.push(rec.id);
            recsLiked = jQuery.unique(recsLiked);
            localStorage.recsLiked = JSON.stringify(recsLiked);
        },
        pass: function (rec) {
            var recsPassed = localStorage.recsLiked;
            if (!recsPassed || !recsPassed.length) {
                recsPassed = [];
            } else {
                recsPassed = JSON.parse(recsPassed);
            }
            recsPassed.push(rec.id);
            recsPassed = jQuery.unique(recsPassed);
            localStorage.recsPassed = JSON.stringify(recsPassed);
        },
        getLikedRecs: function () {
            return localStorage.recsLiked;
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
