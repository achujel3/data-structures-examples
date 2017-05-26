(function() {
    'use strict';

    angular
        .module('designPatternExamplesApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('designpatterns', {
            abstract: true,
            parent: 'app'
        });
    }
})();