appRoute.controller('mainController', function($scope, $locale) {

    self = this;
    $scope.listEmails = [
      'sdfsd@dfd.df',
      'sdfsd@fdsf.sd',
      'sdfsdfsd@dfds.dd'
    ];

    self.addRandomEmail = function () {
        var email = Math.random().toString(36).substr(2, 7) + '@gmail.com';
        // оригинальная директива chips крошится при добавлении дубликата
        // решил не циклить в поисках уникального, просто пропускаю ^^,
        if (scope.listEmails.indexOf(email) == -1) {
            scope.listEmails.push(email);
        }
    };

    self.showCount = function () {
        alert('Количество почтовых ящиков = ' + $scope.listEmails.length);
    };
});