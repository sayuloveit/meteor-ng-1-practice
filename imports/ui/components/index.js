import angular from 'angular';
import angularMeteor from 'angular-meteor';
import todosList from './todosList/todosList';
import navigation from './navigation/navigation';

import template from './index.html';

class MainAppCtrl {}

const name = 'mainApp'

export default angular.module(name, [
  angularMeteor,
  todosList.name,
  navigation.name
])
  .component(name, {
    templateUrl: 'imports/ui/components/index.html',
    controller: MainAppCtrl
  });
