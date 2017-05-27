(function() {
    'use strict';

    angular
        .module('designPatternExamplesApp')
        .factory('StrategyService', StrategyService);

    StrategyService.$inject = ['$http'];

    function StrategyService($http) {

        var dataPromise;

        var service = {
            getStrategies: getStrategies
        };

        return service;

        function getStrategies() {
            dataPromise = $http.get('designpatterns/strategies').then(function(result) {

                var response = {};
                response.strategies = result.data.strategies;
                return response;

            });
            return dataPromise;
        }
    }
})();