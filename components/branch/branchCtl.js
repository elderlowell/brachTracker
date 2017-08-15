angular.module('branchApp').controller('branchCtl', function($scope, $stateParams, branchSvc) {

  $scope.getBranchInfo = function(id) {
    branchSvc.getBranchInfo(id)
      .then(function(res) {
        $scope.branchInfo = res;
      });
  }

  $scope.getBranchInfo($stateParams.id);

});
