import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Tasks } from '../../../api/tasks.js';

import template from './todosList.html';

class TodosListCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.helpers({
      tasks() {
        return Tasks.find({});
      }
    })
  }
}

const name = 'todosList';

export default angular.module(name, [
    angularMeteor
]).component(name, {
    templateUrl: 'imports/ui/components/todosList/todosList.html',
    controller: ['$scope', TodosListCtrl]
})
