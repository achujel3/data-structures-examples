(function() {
    'use strict';

    angular
        .module('designPatternExamplesApp')
        .controller('StrategyController', StrategyController);


    StrategyController.$inject = ['$timeout', 'Auth', 'LoginService', 'StrategyService'];

    function StrategyController($timeout, Auth, LoginService, StrategyService) {


        StrategyService.getStrategies().then(function(response) {
            console.log(response);
        });

    }
})();