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

    this.uploadFolder = function(form_data){
        return response = $http.post('./phpFunctions/caricaAlbum.php', form_data, {
            //withCredentials: false,
            headers: {'Content-Type': undefined,'Process-Data': false},
            transformRequest: angular.identity
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

    this.caricaVideo = function (datiVideo) {
        return response = $http({
            method: 'POST',
            url: './phpFunctions/operazioni.php',
            data: datiVideo,
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

    this.getSelectMembri = function () {
        return response = $http({
            method: 'GET',
            url: './phpFunctions/getMembri.php',
        });
    }
});
