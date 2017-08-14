angular
  .module('branchApp', ['ui.router'])
  .config(function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider
      .otherwise('/');

    $stateProvider
      .state('branches', {
        url: '/branches',
        templateUrl: 'components/branches/branchesTpl.html',
        controller: 'branchesCtl'
      })
      .state('branch', {
        url: '/branch/:id',
        templateUrl: 'components/branch/branchTpl.html',
        controller: 'branchCtl'
      });

  });
