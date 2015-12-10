(function() {
    'use strict';

    angular
    .module('jlart.homeMain')
    .directive('homeMain', homeMain)
    .controller('HomeMainController', HomeMainController);

    function homeMain() {
        var directive = {
            bindToController: true,
            controller: HomeMainController,
            controllerAs: 'vm',
            replace: true,
            restrict: 'E',
            scope: {}, 
            templateUrl: 'app/home-main/home_main.html' 
        };

        return directive;
    }

    function HomeMainController() {
        var vm = this;
    }
})();
