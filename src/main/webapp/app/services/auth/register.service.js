(function () {
    'use strict';

    angular
        .module('designPatternExamplesApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
