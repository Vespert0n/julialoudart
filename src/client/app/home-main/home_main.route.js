(function() {
    'use strict';

    angular
    .module('jlart.homeMain')
    .config(configure);

    configure.$inject = ['$stateProvider', '$urlRouterProvider'];

    function configure($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('/', '/home');

        $stateProvider
            .state('home', {
                controller: 'HomeMainController',
                controllerAs: 'vm',
                templateUrl: 'app/home-main/home_wrapper.html',
                url: '/home'
            });
    }
})();

