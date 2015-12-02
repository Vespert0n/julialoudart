(function() {
    'use strict';

    angular
    .module('jlart.homeMain')
    .directive('homeMain', homeMain);

    homeMain.$inject = [];

    function homeMain() {
        var directive = {
            bindToController: true,
            controller: HomeMainController,
            controllerAs: 'vm',
            replace: true,
            restrict: 'E',
            scope: {}, 
            templateUrl: 'app/home_main.html' 
        };

        return directive;
    }

    function HomeMainController() {
        var vm = this;
    }
})();
