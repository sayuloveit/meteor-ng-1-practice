import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import todosList from './todosList/todosList';
import navigation from './navigation/navigation';

import template from './index.html';

class MainAppCtrl {}

const name = 'mainApp'

export default angular.module(name, [
  angularMeteor,
  uiRouter,
  todosList.name,
  navigation.name
])
  .component(name, {
    templateUrl: 'imports/ui/components/index.html',
    controller: MainAppCtrl
  })
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
      $locationProvider.html5Mode(true).hashPrefix('!');
      $urlRouterProvider.otherwise('/');

      $stateProvider
          .state('home', {
              url: '/',
              template: '<main-app></main-app>'
          });
  }]);
