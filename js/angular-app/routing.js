app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "./home.html",
            controller: "cspp_Ctrl"
        })
        .when('/innoSenegal', {
            templateUrl: "./inno.html",
            controller: "cspp_Ctrl"
        })
        .when('/membri', {
            templateUrl: "./membri.html",
            controller: "cspp_Ctrl"
        })
        .when('/proTeatrali', {
            templateUrl: "./progettiTeatrali.html",
            controller: "cspp_Ctrl"
        })
        .when('/eventi', {
            templateUrl: "./eventi.html",
            controller: "cspp_Ctrl"
        })
        .when('/contattaci', {
            templateUrl: "./contattaci.html",
            controller: "cspp_Ctrl"
        })
        .when('/foto', {
            templateUrl: "./foto.html",
            controller: "cspp_Ctrl"
        })
        .when('/video', {
            templateUrl: "./video.html",
            controller: "cspp_Ctrl"
        })
        .when('/ciboInteg', {
            templateUrl: "./ciboIntegrazione.html",
            controller: "cspp_Ctrl"
        })
        .when('/areaRiservata', {
            templateUrl: "./areaRiservata.html",
            controller: "cspp_Ctrl"
        })
        .when('/operazioni', {
            templateUrl: "./operazioni.html",
            controller: "cspp_Ctrl"
        })
        .otherwise({
            redirectTo: "/",
        });
}]);
