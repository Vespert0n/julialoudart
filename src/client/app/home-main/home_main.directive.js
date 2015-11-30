(function() {
    'use strict';

    angular
    .module('jlart.homeMain')
    .directive('homeMain', homeMain);

    homeMainLanding.$inject = [];

    function homeMain() {
        var directive = {
            bindToController: true,
            controller: HomeMainController,
            controllerAs: 'vm',
            replace: true,
            restrict: 'E',
            scope: {}, 
            templateUrl: 'app/homeMain.html' 
        };

        return directive;
    }

    function HomeMainController() {
    
    }
})();
