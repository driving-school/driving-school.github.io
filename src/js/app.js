app = angular.module('drvSchool', ['lumx']);
app.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
             if (this.pageYOffset >= 50) {
                 scope.classAdd = true;
             } else {
                 scope.classAdd = false;
             }
            scope.$apply();
        });
    };
});