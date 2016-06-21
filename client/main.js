import angular from 'angular';
import angularMeteor from 'angular-meteor';
import mainApp from '../imports/ui/components/index';

angular.module('App', [
  angularMeteor,
  mainApp.name
]);
