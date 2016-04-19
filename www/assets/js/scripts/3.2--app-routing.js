
// JAVASCRIPT LAYER [3.2. APP: ROUTING]  ==============================================================================

// ====== INDEX  ======================================================================================================
// ==
// == A. ROUTES
// ==
// == B. DEFAULT ROUTE
// ==
// ====== INDEX  ======================================================================================================

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

// B. DEFAULT ROUTE +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

        $urlRouterProvider.otherwise('/home'); 

// B. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// A. ROUTES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

        $stateProvider

            // A.1. HOME PAGE -----------------------------------------------------------------------------------------

            .state('home', {
                url: '/home',
                templateUrl: 'pages/landing.html',

            })
        
            // A.1. END

        // A.3. END ---------------------------------------------------------------------------------------------------

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    }]);

// END OF FILE ========================================================================================================