angular
  .module('branchApp', ['ui.router', 'ngAnimate'])
  .config(function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider
      .otherwise('/');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'components/dashboard/dashboardTpl.html'
      })
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
