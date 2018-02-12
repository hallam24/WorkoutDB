app.controller('WorkoutCtrl', ['$scope', 'WorkoutService',
    // we inject WorkoutService  inject becuse we call getAll method for get all student  
function ($scope, WorkoutService) {
    // this is base url   
    var baseUrl = '/api/workout/';
    // get all info from databse  

    $scope.getExercises = function () {
        var apiRoute = baseUrl + 'GetExercises';
        var _exercise = WorkoutService.getAll(apiRoute);
        _exercise.then(function (response) {
            $scope.exercises = response.data;
        },
        function (error) {
            console.log("Error: " + error);
        });

    }

    $scope.doTimeout = function () {
            console.log("Hello World!");
    }

    $scope.getExercises();
    
    $scope.doTimeout();
    
    

}]);