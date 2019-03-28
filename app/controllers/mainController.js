appRoute.controller('mainController', function($scope,myConstants, $locale) {

    // Буду считать что все емейлы в массиве валидные, проверку в линке директиве делать не буду
    $scope.listEmails = [
      'sdfsd@dfd.df',
      'sdfsd@fdsf.sd',
      'sdfsdfsd@dfds.dd'
    ];

    $scope.addRandomEmail = function () {
        var email = Math.random().toString(36).substr(2, 7) + '@gmail.com';
        // оригинальная директива chips крошится при добавлении дубликата
        // решил не циклить в поисках уникального, просто пропускаю ^^,
        if ($scope.listEmails.indexOf(email) == -1) {
            $scope.listEmails.push(email);
        }
    };

    $scope.showCount = function () {
        var count = 0;
        angular.forEach($scope.listEmails, function (email) {
            if (myConstants.EMAIL_PATTERN.test(email)) {
                count++;
            }
        });
        alert('Количество почтовых ящиков = ' + count);
    };
});