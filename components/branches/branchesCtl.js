angular.module('branchApp').controller('branchesCtl', function($scope, branchesSvc) {

  $scope.getBranchList = function() {
    branchesSvc.getBranchList()
      .then(function(res) {
        $scope.branchList = res;
      });
  }

  $scope.getBranchList();

  $scope.sortOrder = function(heading) {
    $scope.activeHeader = heading;
  }

})
