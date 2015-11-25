(function() {
    'use strict';

    angular
    .module('jlart.splash')
    .directive('splashLanding', splashLanding);

    splashLanding.$inject = [];

    function splashLanding() {
        var directive = {
            bindToController: true,
            controller: SplashController,
            controllerAs: 'vm',
            replace: true,
            restrict: 'E',
            scope: {}, 
            templateUrl: 'app/splash.html' 
        };

        return directive;
    }

    function SplashController() {
    
    }
})();
