angular.module('WandererApp', [])
.controller('GameController', function GameController($scope) {
        $scope.responses = [];

        $scope.addUserResponse = function() {
            $scope.responses.unshift({text: $scope.userResponseText, type: 'user', responder: 'User'});
            $scope.userResponseText = '';
        };

        $scope.addSystemResponse = function() {
            $scope.responses.unshift({text: $scope.systemResponseText, type: 'system', responder: 'System'});
            $scope.systemResponseText = '';
        };

        $scope.generateSystemResponse = function() {
            $scope.systemResponseText = $scope.userResponseText;
        };

        $scope.processUserInput = function() {
            var delay = 500;
            $scope.generateSystemResponse();
            $scope.addUserResponse();
            setTimeout(function() {
                $scope.addSystemResponse();
                $scope.$apply();
            }, delay);
        };
    });