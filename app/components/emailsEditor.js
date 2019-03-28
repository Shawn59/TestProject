appRoute.directive('emailsEditor', function ($mdConstant, myConstants, $timeout) {
    return {
        //изоляция скоупа. Список емейлов передём в качестве аттрибуа
        scope: {
            'listEmails': '=emails'
        },
        // директива работает только в качестве тега
        restrict: 'E',
        templateUrl: 'app/components/emailsEditor.html',

        link: function (scope, element, attrs) {
            var self = this;
            //require
            if (attrs.id && scope.listEmails && Array.isArray(scope.listEmails)) {
                scope.id = attrs.id;
                //массив ключей событий для формирования блока
                scope.keys = [
                    $mdConstant.KEY_CODE.ENTER,
                    $mdConstant.KEY_CODE.COMMA
                ];
            }

            scope.changeChips = function (chip, index) {
                // на слуачай, если в инпут запишут несколько емейлов.
                if (chip.trim() != '') {
                    var customEmails = chip.split(' '),
                        countNewEmails = 0;
                    if (customEmails.length > 1) {
                        scope.listEmails.splice(index, 1);
                        for (var i = 0; i < customEmails.length; i++) {
                            if (scope.listEmails.indexOf(customEmails[i]) == -1) {
                                scope.listEmails.push(customEmails[i]);
                                countNewEmails++;
                            }
                        }
                    } else {
                        countNewEmails++;
                    }

                    if (countNewEmails) {
                        self.changeListEmails(countNewEmails)
                    }
                }

               /* var customEmails = chip.trim().split(' '),
                    chipName = null;
                if (customEmails.length > 1) {
                    scope.listEmails.splice(index, 1);
                    for (var i = 0; i < customEmails.length; i++) {
                        if (myConstants.EMAIL_PATTERN.test(customEmails[i]) && scope.listEmails.indexOf(customEmails[i]) == -1) {
                            scope.listEmails.push(customEmails[i]);
                        }
                    }
                } else {
                    chipName = chip;
                }
                angular.element(document.querySelector('#' + scope.id)).ready(function () {
                    if (chipName && !myConstants.EMAIL_PATTERN.test(chipName)) {
                        var elem = angular.element(document.querySelectorAll('md-chip'));
                        elem[elem.length - 1].style = 'border-bottom: 2px solid red';
                    }
                });*/
            };

            self.changeListEmails = function (countNewEmails) {
                angular.element(document.querySelector('#' + scope.id)).ready(function () {
                    // думаю нет особо думать о производительности в данном контексте
                    for (var i = scope.listEmails.length - countNewEmails; i <= scope.listEmails.length - 1; i++) {
                        if (!myConstants.EMAIL_PATTERN.test(scope.listEmails[i])) {
                            var elem = element.find('md-chip');
                            elem[i].style = 'border-bottom: 2px solid red';
                        }
                    }
                });
            };

            element.ready(function () {
                var elemInput = element.find('input');
                // я до последнего верил в силу keyup. Но он не хотел нормально работать)) Поэтому так:
                elemInput.on('paste', function (event) {
                    var customEmails = '';
                    if ((customEmails = event.clipboardData.getData('Text')).trim() != '') {
                        customEmails = customEmails.split(' ');
                        var countNewEmails = 0;
                        for (var i = 0; i < customEmails.length; i++) {
                            // дубли отбрасываем
                            if (scope.listEmails.indexOf(customEmails[i]) == -1) {
                                scope.listEmails.push(customEmails[i]);
                                countNewEmails++;
                            }
                        }
                        if (countNewEmails) {
                            self.changeListEmails(countNewEmails);
                        }
                        $timeout(function () {
                            elemInput.val('');
                        }, 20);
                        element.blur();
                    }
                });
            });
        }
    }
});