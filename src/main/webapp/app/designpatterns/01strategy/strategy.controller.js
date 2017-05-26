(function() {
    'use strict';

    angular
        .module('designPatternExamplesApp')
        .controller('StrategyController', StrategyController);


    StrategyController.$inject = ['$timeout', 'Auth', 'LoginService'];

    function StrategyController($timeout, Auth, LoginService) {



    }
})();