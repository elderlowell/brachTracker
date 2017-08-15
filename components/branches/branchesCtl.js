angular.module('branchApp').controller('branchesCtl', function($scope, branchesSvc) {

  $scope.getBranchList = function() {
    branchesSvc.getBranchList()
      .then(function(res) {
        $scope.branchList = res;
      });
  }

  $scope.getBranchList();

})
