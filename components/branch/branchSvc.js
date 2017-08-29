angular.module('branchApp').service('branchSvc', function($http) {

  this.getCurrentBranchInfo = function(id) {
    return $http.get('branch-changes.json')
      .then(function(response) {
        var allEntries = [];
        for (i =0; i < response.data.length; i++) {
          if (response.data[i].code === parseInt(id)) {
            allEntries.push(response.data[i]);
          }
        }
        return allEntries;
      }).catch(function(err) {
        console.log(err);
      });
  };

});
