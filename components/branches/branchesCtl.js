angular.module('branchApp').controller('branchesCtl', function($scope, branchesSvc) {

  $scope.getBranchList = function() {
    branchesSvc.getBranchList()
      .then(function(res) {
        $scope.branchList = res;
        $scope.activeHeader = 'name';
        $scope.sortDirection = '+';
      });
  };

  $scope.getBranchList();

  $scope.sortOrder = function(heading) {
    if ($scope.activeHeader === heading) {
      if ($scope.sortDirection === '+') {
        $scope.sortDirection = '-';
      }
      else {
        $scope.sortDirection = '+';
      }
    }
    else {
      $scope.activeHeader = heading;
      $scope.sortDirection = '+';
    }
  };

})
