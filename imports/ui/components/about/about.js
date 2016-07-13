import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './about.html';

class AboutCtrl {}

const name = 'about';

export default angular.module(name, [
    angularMeteor
]).component(name, {
    templateUrl: 'imports/ui/components/about/about.html',
    controller: AboutCtrl
})