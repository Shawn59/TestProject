appRoute.directive('emailsEditor', function ($mdConstant) {
    // одна из регулярок на проверку формата email из кучи разных вариаций))
    var  EMAIL_PATTERN = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return {
        //изолир скоуп
        $scope: {},
        templateUrl: 'app/components/emailsEditor.html',
        link: function($scope, element, attrs, mdChipsCtrl) {
            $scope.listEmails = [];
            var self = this;

            $scope.name = attrs.name || 'emailsEditorChips';
            $scope.id = attrs.id;
           /* angular.element(document).ready(function () {
                var elem = angular.element(document.querySelector('#IIIDDD'));
                f = elem.find('input')[0];
                f.onblur = function () {
                    var chip = f.value.trim();
                    if (chip != '') {
                        $scope.listEmails.push(chip);
                        f.value = '';
                    }
                }
            });*/
            //массив ключей для формирования чипа
            $scope.keys = [
                $mdConstant.KEY_CODE.ENTER,
                $mdConstant.KEY_CODE.COMMA
            ];
            /*Задаем функцию, которая будет вызываться при изменении переменной word, ее имя находится в attrs.habraHabr*/
                /*$scope.$watch(attrs.habraHabr,function(value){
                    element.text(value+attrs.habra);
                });*/
                //    border-bottom: solid 2px red
                $scope.changeChips = function(chip, index) {
                    $scope.lastChip = {
                      'chip': chip,
                      'index': index
                    };
                    angular.element(document.querySelector('#' + $scope.id)).ready(function () {

                        if (!EMAIL_PATTERN.test($scope.lastChip.chip)) {
                            var elem = angular.element(document.querySelectorAll('md-chip'));
                            elem[elem.length-1].style = 'border-bottom: 2px solid red';
                            //d.class('email-notValid');
                            //elem.addClass('email-notValid');
                        }
                       /* var elem = angular.element(document.querySelector('#IIIDDD'));
                        f = elem.find('input')[0];*/
                    });
                    if (!EMAIL_PATTERN.test(chip)) {
                        var elem = angular.element(document.querySelector('md-chip'));
                    }
                };

                $scope.addRandomEmail = function () {
                   var email = Math.random().toString(36).substr(2, 7) + '@gmail.com';
                   // оригинальная директива chips крошится при добавлении дубликата
                   // решил не циклить в поисках уникального, просто пропускаю ^^,
                   if ($scope.listEmails.indexOf(email) == -1) {
                       $scope.listEmails.push(email);
                   }
                };

                $scope.showCount = function () {
                    alert('Количество почтовых ящиков = ' + $scope.listEmails.length);
                };
        }
    }
    /*return  {
        template: [
            '<button type="button">HHHHH</button>',
        ]
    }*/
});