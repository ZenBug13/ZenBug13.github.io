angular.module('myApp', [])
.controller("indexController", function($scope){
  $scope.plz="plz";
  $scope.experience = [
    {
      name:"Penna Turnpike",
      image:"app/assets/img/Penna.jpg"
    },
    {
      name:"BNY Mellon",
      image:"app/assets/img/BNYM.jpg"
    },
    {
      name:"Penn State",
      image:"app/assets/img/psu.gif"
    }
  ];
});
