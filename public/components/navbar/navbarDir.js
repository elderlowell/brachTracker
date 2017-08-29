(function() {
  'use strict';

  angular
    .module('branchApp')
    .directive('navbar', navbar);

  function navbar() {
    return {
      templateUrl: 'components/navbar/navbarTpl.html',
      controller: navbarCtl,
      controllerAs: 'navbar'
    }
  };

  function navbarCtl() {

  }
})();
