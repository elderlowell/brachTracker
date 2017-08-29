angular.module('branchApp').controller('branchCtl', function($scope, $stateParams, branchSvc) {

  $scope.getCurrentBranchInfo = function(id) {
    branchSvc.getCurrentBranchInfo(id)
      .then(function(res) {
        // console.log(res);
        $scope.currentInfo = $scope.getLastOfBranch(res);
        // console.log($scope.currentInfo);
      });
  }

  $scope.getCurrentBranchInfo($stateParams.id);

  $scope.getLastOfBranch = function(array) {
    var mostRecent = 0;
    for (i = 0; i < array.length; i++) {
      array[i].filingDate = Date.parse(array[i].filingDate);
    }
    for (j = 0; j < array.length; j++) {
      if (array[j].filingDate > mostRecent) {
        mostRecent = j;
      }
    }
    return array[mostRecent];
  }

//functions to help with displaying the data
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

  $scope.toggleShow = function(info) {
    info.hide = !info.hide;
  };

});
