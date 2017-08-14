angular.module('branchApp').controller('branchesCtl', function($scope, branchesSvc) {

  $scope.getBranchList = function() {
    $scope.branchList = branchesSvc.getBranchList();
  }

  $scope.getBranchList();

})
