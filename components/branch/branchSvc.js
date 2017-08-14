angular.module('branchApp').service('branchSvc', function($http) {

  this.getBranchInfo = function(id) {
    return $http.get('branch-changes.json')
      .then(function(response) {
        for (i =0; i < response.data.length; i++) {
          if (response.data[i].code === parseInt(id)) {
            return response.data[i];
          }
        }
      }).catch(function(err) {
        console.log(err);
      });
  };

});
