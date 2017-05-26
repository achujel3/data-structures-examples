(function() {
    'use strict';

    angular
        .module('designPatternExamplesApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('strategy', {
            parent: 'app',
            url: '/strategy',
            data: {
                authorities: [],
                pageTitle: '01. Strategy Design Pattern'
            },
            views: {
                'content@': {
                    templateUrl: 'app/designpatterns/01strategy/strategy.html',
                    controller: 'StrategyController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();