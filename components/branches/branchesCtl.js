angular.module('branchApp').controller('branchesCtl', function($scope, branchesSvc) {

  $scope.getBranchList = function() {
    branchesSvc.getBranchList()
      .then(function(res) {
        $scope.activeHeader = 'name';
        $scope.sortDirection = '+';
        var branchCodeList = $scope.findUniqueBranches(res);
        var lastOfEachBranch = $scope.getLastOfEachBranch(branchCodeList, res);
        $scope.openBranches = $scope.getOpenBranches(lastOfEachBranch);
      });
  };

  $scope.getBranchList();

//functions that run inside getBranchList to narrow down all branch changes to find current open branches
  //returns array of all unique branch codes
  $scope.findUniqueBranches = function(array) {
    let unique = [...new Set(array.map(item => item.code))];
    return unique;
  }

  //returns array of most recent entries for each branch
  $scope.getLastOfEachBranch = function(nums, array) {
    var newArray = [];
    for (i = 0; i < nums.length; i++) {
      var tempArray = [];
      for (j = 0; j < array.length; j++) {
        if (array[j].code === nums[i]) {
          array[j].filingDate = Date.parse(array[j].filingDate);
          tempArray.push(array[j]);
        }
      }
      var mostRecent = 0;
      for (k = 0; k < tempArray.length; k++) {
        if (tempArray[k].filingDate > mostRecent) {
          mostRecent = k;
        }
      }
      var recentItem = tempArray[mostRecent];
      newArray.push(recentItem);
    }
    return newArray;
  };

  //returns array of branches where licensing close date = ""
  $scope.getOpenBranches = function(array) {
    var newArray = [];
    for (i = 0; i < array.length; i++) {
      if (array[i].closeDateLicensing === "") {
        newArray.push(array[i]);
      }
    }
    return newArray;
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

  $scope.toggleShow = function(branch) {
    branch.hide = !branch.hide;
  }

})
