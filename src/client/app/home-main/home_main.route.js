(function() {
    'use strict';

    angular
    .module('jlart.home_main')
    .config(configure);

    configure.$inject = ['$stateProvider', '$urlRouterProvider'];

    function configure($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home_main', {
                controller: 'HomeMainController',
                controllerAs: 'vm',
                templateUrl: 'app/home_main/home_main.html',
                url: '/'
            });
    }
})();

