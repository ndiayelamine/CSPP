app.service("cspp_service", function ($http) {

    this.submitForm = function (user) {
        return response = $http({
            method: 'POST',
            url: './mail/contattaci.php',
            data: user, //forms user object
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    }

    this.scanFolder = function (path) {
        return response = $http({
            method: 'GET',
            url: './phpFunctions/scanDir.php',
            params: {
                path: path
            }
        });
    }

    this.serviceLogin = function (loginData) {
        return response = $http({
            method: 'POST',
            url: './phpFunctions/serviceLogin.php',
            data: loginData,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    }

    this.creaEvento = function (datiEvento) {
        return response = $http({
            method: 'POST',
            url: './phpFunctions/operazioni.php',
            data: datiEvento,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    }

    this.getEventi = function () {
        return response = $http({
            method: 'GET',
            url: './phpFunctions/getEventi.php',
        });
    }
    
    this.getSelectVideo = function () {
        return response = $http({
            method: 'GET',
            url: './phpFunctions/getVideo.php',
        });
    }
});
