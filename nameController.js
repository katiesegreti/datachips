app.controller('nameController', ['$scope', function($scope) {
  $scope.today = new Date();

   $scope.everybodys = [
    {
      name: "Lita",
      gender: "F"
    },
    {
      name: "Mommy",
      gender: "F"
    },
    {
      name: "Daddy",
      gender: "M"
    },
    {
      name: "Big Guy",
      gender: "M"
    },
    {
      name: "Kyomi",
      gender: "F"
    }
    ];

}]);