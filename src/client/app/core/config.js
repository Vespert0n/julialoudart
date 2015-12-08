(function() {

    'use strict';

    angular
        .module('jlart.core')
        .config(configure);

    configure.$inject = ['$stateProvider', '$urlRouterProvider'];

    function configure($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('julialoudart', {
                url: '/julialoudart',
                templateUrl: '../../index.html'
            });

    }

})();
