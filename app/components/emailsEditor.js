appRoute.directive('emailsEditor', function ($mdConstant) {
    // одна из регулярок на проверку формата email из кучи разных вариаций))
    var EMAIL_PATTERN = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return {
        //изоляция скоупа
        scope: {
            'emails': '='
        },
        // директива работает только в качестве тега
        restrict: 'E',
        templateUrl: 'app/components/emailsEditor.html',
        link: function (scope, element, attrs) {
            if (!scope.emails) {
                scope.emails = [];
            }
            scope.name = attrs.name || 'emailsEditorChips';
            //require
            scope.id = attrs.id || 'emailsEditorChipsId';

            //массив ключей для формирования чипа
            scope.keys = [
                $mdConstant.KEY_CODE.ENTER,
                $mdConstant.KEY_CODE.COMMA
            ];

            scope.changeChips = function (chip, index) {
                var customEmails = chip.trim().split(' '),
                    chipName = null;
                if (customEmails.length > 1) {
                    scope.emails.splice(index, 1);
                    for (var i = 0; i < customEmails.length; i++) {
                        if (EMAIL_PATTERN.test(customEmails[i]) && scope.emails.indexOf(customEmails[i]) == -1) {
                            scope.emails.push(customEmails[i]);
                        }
                    }
                } else {
                    chipName = chip;
                }
                angular.element(document.querySelector('#' + scope.id)).ready(function () {
                    if (chipName && !EMAIL_PATTERN.test(chipName)) {
                        var elem = angular.element(document.querySelectorAll('md-chip'));
                        elem[elem.length - 1].style = 'border-bottom: 2px solid red';
                    }
                });
            };
        }
    }
});