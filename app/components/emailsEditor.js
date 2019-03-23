appRoute.directive('emailsEditor', function () {

    return {
        //изолир скоуп
        $scope: {},
        templateUrl: 'app/components/emailsEditor.html',
        link: function($scope, element, attrs) {
            $scope.listEmails = [];
            /*Задаем функцию, которая будет вызываться при изменении переменной word, ее имя находится в attrs.habraHabr*/
                /*$scope.$watch(attrs.habraHabr,function(value){
                    element.text(value+attrs.habra);
                });*/
        }
    }
    /*return  {
        template: [
            '<button type="button">HHHHH</button>',
        ]
    }*/
});