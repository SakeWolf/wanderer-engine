describe("GameController", function() {
    beforeEach(module("WandererApp"));

    var $controller;

    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
    }));

    describe('game', function() {
        var $scope, controller;

        beforeEach(function() {
            $scope = {};
            controller = $controller('GameController', {$scope: $scope});
        });

        describe('addUserResponse', function() {
            it('adds a user input into the list of responses to display in the viewport', function() {
                $scope.userResponseText = "User Input";
                var expectedResponse = {text: $scope.userResponseText, type: 'user', responder: 'User'};
                $scope.addUserResponse();
                expect($scope.responses).toContain(jasmine.objectContaining(expectedResponse));
            });
        });

        describe('addSystemResponse', function() {
            it('adds a system input into the list of responses to display in the viewport', function() {
                $scope.systemResponseText = "System Response";
                var expectedResponse = {text: $scope.systemResponseText, type: 'system', responder: 'System'};
                $scope.addSystemResponse();
                expect($scope.responses).toContain(jasmine.objectContaining(expectedResponse));
            });
        });

        describe('generateSystemResponse', function() {
            it('generates a system response based upon the user response', function() {
                $scope.userResponseText = "I said what?!";
                $scope.generateSystemResponse();
                expect($scope.systemResponseText).toEqual($scope.userResponseText);
            });
        });
    });
});