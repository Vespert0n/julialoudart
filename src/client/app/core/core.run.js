(function() {
    'use strict';

    angular
    .module('jlart.core')
    .run(runBlock);

    runBlock.$inject = ['$rootScope', '$state'];

    function runBlock($rootScope, $state, event, toState, toParams, fromState, fromParams) {
        $rootScope.$on('$stateChangeSuccess',
            function(event, toState, toParams, fromState, fromParams) {
                if (toState && toState.params && toState.params.autoActivateChild) {
                    $state.go(toState.params.autoActivateChild);
                }
        });
    }
})();
