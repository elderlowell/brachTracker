angular.module('branchApp').controller('branchCtl', function($scope, $stateParams, branchSvc) {

  $scope.getBranchInfo = function(id) {
    $scope.branchInfo = branchSvc.getBranchInfo(id);
    console.log();
  }

  $scope.getBranchInfo($stateParams.id);

});
