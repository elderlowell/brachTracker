angular.module('branchApp').service('branchesSvc', function($http) {

  this.getBranchList = function() {
    return $http.get('branch-changes.json')
      .then(function(response) {
        return response.data;
      }).catch(function(err) {
        console.log(err);
      });
  };

});
