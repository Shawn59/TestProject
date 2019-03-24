appRoute.directive('emailsEditor', function ($mdConstant) {
    // одна из регулярок на проверку формата email из кучи разных вариаций))
    var EMAIL_PATTERN = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return {
        //изолир скоуп
        scope: {},
        templateUrl: 'app/components/emailsEditor.html',
        link: function (scope, element, attrs) {
            scope.listEmails = [];
            scope.name = attrs.name || 'emailsEditorChips';
            scope.id = attrs.id || 'emailsEditorChipsId';

            //массив ключей для формирования чипа
            scope.keys = [
                $mdConstant.KEY_CODE.ENTER,
                $mdConstant.KEY_CODE.COMMA
            ];
            scope.changeChips = function (chip, index) {
                var chipName = chip;
                angular.element(document.querySelector('#' + scope.id)).ready(function () {
                    if (!EMAIL_PATTERN.test(chipName)) {
                        var elem = angular.element(document.querySelectorAll('md-chip'));
                        elem[elem.length - 1].style = 'border-bottom: 2px solid red';
                    }
                });
            };

            scope.addRandomEmail = function () {
                var email = Math.random().toString(36).substr(2, 7) + '@gmail.com';
                // оригинальная директива chips крошится при добавлении дубликата
                // решил не циклить в поисках уникального, просто пропускаю ^^,
                if (scope.listEmails.indexOf(email) == -1) {
                    scope.listEmails.push(email);
                }
            };

            scope.showCount = function () {
                alert('Количество почтовых ящиков = ' + scope.listEmails.length);
            };
        }
    }
});