app.controller('cspp_Ctrl', function ($scope, $cookies, $location, $timeout, cspp_service) {
    $scope.myInterval = 3000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    $scope.formData = {
        name: "",
        email: "",
        phone: "",
        message: ""
    };
    $scope.errors = {
        name: "",
        email: "",
        phone: "",
        message: ""
    };
    $scope.eventoInserito = false;
    $scope.erroreEvento = false;
    $scope.listaEventi = {};
    $scope.inviato = false;
    $scope.isCorrectLogin = false;
    $scope.visitaConsolato = {};
    $scope.elezione2016 = {};
    $scope.partitaCalcio = {};
    $scope.festaFineAnno = {};
    $scope.liste = {};
    $scope.userName = "";
    $scope.loginPass = "";
    $scope.date = new Date();
    $scope.giorno = {};
    $scope.mese = {};
    $scope.titoloEvento = "";
    $scope.messaggioEvento = "";
    $scope.ora = {};
    $scope.minuto = {};
    $scope.tipo = {};
    $scope.loginData = {};
    $scope.listaVideoTeatro = {};
    //    $scope.dataEvento = {titolo:"", messaggio:"", tipo:"", dataOra: "", nomeUtente:""};

    //    for(i = 0; i < 10; i++){
    //        $scope.anni.push({"numero": $scope.date.getFullYear() + i});
    //    }

    $scope.mesi = [{
            "numero": 1,
            "nome": 'Gennaio'
        },
        {
            "numero": 2,
            "nome": 'Febbraio'
        },
        {
            "numero": 3,
            "nome": 'Marzo'
        },
        {
            "numero": 4,
            "nome": 'Aprile'
        },
        {
            "numero": 5,
            "nome": 'Maggio'
        },
        {
            "numero": 6,
            "nome": 'Giugno'
        },
        {
            "numero": 7,
            "nome": 'Luglio'
        },
        {
            "numero": 8,
            "nome": 'Agosto'
        },
        {
            "numero": 9,
            "nome": 'Settembre'
        },
        {
            "numero": 10,
            "nome": 'Ottobre'
        },
        {
            "numero": 11,
            "nome": 'Novembre'
        },
        {
            "numero": 12,
            "nome": 'Dicembre'
        }];

    $scope.ore = [];
    for (i = 0; i < 24; i++) {
        if (i < 9)
            $scope.ore.push({
                "hh": "0" + (i + 1)
            });
        else
            $scope.ore.push({
                "hh": (i + 1)
            });
    }

    $scope.minuti = [];
    for (i = 0; i < 60; i++) {
        if (i < 10)
            $scope.minuti.push({
                "mm": "0" + i
            });
        else
            $scope.minuti.push({
                "mm": i
            });
    }

    $scope.tipi = [{
        "nome": "Festa"
    }, {
        "nome": "Visita"
    }, {
        "nome": "Anniversario"
    }, {
        "nome": "Religiosa"
    }, {
        "nome": "Sportivo"
    }, {
        "nome": "Informazioni"
    }, {
        "nome": "Altro"
    }];

    $scope.giorni = [];
    $scope.anno = $scope.date.getFullYear();

    $scope.carousel_items = [
        {
            title: 'Il Baobab',
            src: './immagine/Baobab-tree.jpg',
            id: 0
        },
        {
            title: 'Car Rapide',
            src: './immagine/car_rapide.jpg',
            id: 1
        },
        {
            title: 'Il mare e le piroghe',
            src: './immagine/Galgui_Senegal.jpg',
            id: 2
        },
        {
            title: 'Isola di Gorée',
            src: './immagine/goree-senegal.jpg',
            id: 3
        },
        {
            title: 'Lago Retba: il suggestivo “Lago Rosa”',
            src: './immagine/lago-rosa.jpg',
            id: 4
        }
    ];

    $scope.loadPhoto = function (path, temp) {
        var response = cspp_service.scanFolder(path);
        response.then(
            function (data) {
                if (temp == 1) {
                    $scope.visitaConsolato = data.data;
                }
                if (temp == 2) {
                    $scope.elezione2016 = data.data;
                }
                if (temp == 3) {
                    $scope.partitaCalcio = data.data;
                }
                if (temp == 4) {
                    $scope.festaFineAnno = data.data;
                }
                if (temp == 5) {
                    $scope.liste = data.data;
                }
            },
            function (data) {}
        );
    }

    $scope.getVideo = function () {
        var response = cspp_service.getSelectVideo();
        response.then(
            function (data) {
                if (data.data != "0")
                    $scope.listaVideoTeatro = data.data;
                else
                    $scope.listaVideoTeatro = {};

                console.log($scope.listaVideoTeatro);
            },
            function (data) {
                console.log(data);
            }
        );
    }

    $scope.templateUrl = "liste.html";
    $scope.selected = 5;
    $scope.switchTemplate = function (temp) {
        if (temp == 1) {
            $scope.selected = 1;
            $scope.templateUrl = "visitaConsolato.html";
            //$scope.loadPhoto("/immagine/VisitaConsolato", temp);
        }
        if (temp == 2) {
            $scope.selected = 2;
            $scope.templateUrl = "elezione2016.html";
            //$scope.loadPhoto("/immagine/Elezione2016", temp);
        }
        if (temp == 3) {
            $scope.selected = 3;
            $scope.templateUrl = "partitaCalcio.html";
            //$scope.loadPhoto("/immagine/Partite", temp);
        }
        if (temp == 4) {
            $scope.selected = 4;
            $scope.templateUrl = "festaFineAnno.html";
            //$scope.loadPhoto("/immagine/FestaFineAnno", temp);
        }
        if (temp == 5) {
            $scope.selected = 5;
            $scope.templateUrl = "liste.html";
            //$scope.loadPhoto("/immagine/FestaFineAnno", temp);
        }
        if (temp == 6) {
            $scope.selected = 6;
            $scope.templateUrl = "listaVideo.html";
            //$scope.loadPhoto("/immagine/FestaFineAnno", temp);
        }
    }


    $scope.videotemplateUrl = "listaVideo.html";
    $scope.selectedVideo = 1;
    $scope.switchTemplateVideo = function (temp) {
        if (temp == 1) {
            $scope.selectedVideo = 1;
            $scope.videotemplateUrl = "listaVideo.html";
            //$scope.loadPhoto("/immagine/FestaFineAnno", temp);
        }
    }

    $scope.inviaMessaggio = function () {
        if ($scope.formData.name == "" || $scope.formData.name == undefined) {
            $scope.errors.name = "Nome è obbligatorio!";
        } else if ($scope.formData.email == "" || $scope.formData.email == undefined) {
            $scope.errors.email = "Email è obbligatorio!";
        } else if ($scope.formData.phone == "" || $scope.formData.phone == undefined) {
            $scope.errors.phone = "Numero di telefono è obbligatorio!";
        } else if ($scope.formData.message == "" || $scope.formData.message == undefined) {
            $scope.errors.message = "Il messaggio è obbligatorio!";
        } else {
            var response = cspp_service.submitForm($scope.formData);
            response.then(
                function (data) {
                    $scope.formData = {};
                    $scope.inviato = true;
                },
                function (data) {
                    $scope.inviato = false;
                }
            );
        }
    }

    $scope.serviceLogin = function () {
        if ($scope.userName != "" && $scope.loginPass != "") {
            $scope.loginData = {
                userName: $scope.userName,
                loginPass: $scope.loginPass
            };
            var response = cspp_service.serviceLogin($scope.loginData);
            response.then(
                function (data) {
                    if (data.data == "loginOK") {
                        $cookies.put('nomeUtente', $scope.userName);
                        $location.path('/operazioni');
                        $scope.isCorrectLogin = false;
                    } else {
                        $scope.isCorrectLogin = true;
                    }
                },
                function (data) {
                    $scope.isCorrectLogin = true;
                }
            );
        } else {
            $scope.isCorrectLogin = true;
        }
    }

    $scope.templateOperazioneUrl = "nuovoEvento.html";
    $scope.cambiaOperazione = function (tipo) {
        if (tipo == "NE") {
            $scope.erroreEvento = false;
            $scope.eventoInserito = false;
            $scope.templateOperazioneUrl = "nuovoEvento.html";
        }
        if (tipo == "IS") {
            $scope.templateOperazioneUrl = "inviaSms.html";
        }
        if (tipo == "CF") {
            $scope.templateOperazioneUrl = "caricaFoto.html";
        }
    }

    $scope.disconnetti = function () {
        $location.url('/');
    }

    $scope.reset = function () {
        $scope.giorno = {};
        $scope.mese = {};
        $scope.ora = {};
        $scope.minuto = {};
        $scope.titoloEvento = "";
        $scope.messaggioEvento = "";
        $scope.tipo = {};
        $scope.anno
        $scope.erroreEvento = false;
        if ($scope.eventoInserito)
            $scope.eventoInserito = false;

        //        $scope.giorno.numero = $scope.giorni[0].numero;
        //        $scope.mese.numero = $scope.mesi[0].numero;
        //        $scope.mese.nome = $scope.mesi[0].nome;
        //        $scope.anno = $scope.date.getFullYear();
        //        $scope.ora.hh = $scope.ore[0].hh;
        //        $scope.minuto.mm = $scope.minuti[0].mm;
        //        $scope.titoloEvento = "";
        //        $scope.messaggioEvento = "";
        //        $scope.tipo.nome = $scope.tipi[0].nome;
    }

    $scope.creaEvento = function () {
        $scope.nomeUtente = $cookies.get('nomeUtente');
        $scope.dataEvento = {
            dataOra: $scope.anno + "-" + $scope.mese.numero + "-" +
                $scope.giorno.numero + " " + $scope.ora.hh + ":" + $scope.minuto.mm + ":00",
            tipo: $scope.tipo.nome,
            messaggio: $scope.messaggioEvento,
            titolo: $scope.titoloEvento,
            nomeUtente: $scope.nomeUtente
        };
        if ($scope.anno != undefined && $scope.mese.numero != undefined && $scope.giorno.numero != undefined &&
            $scope.ora.hh != undefined && $scope.minuto.mm != undefined && $scope.tipo.nome != undefined &&
            $scope.messaggioEvento != undefined && $scope.titoloEvento != undefined) {
            if ($scope.anno == "" && $scope.mese.numero == "" && $scope.giorno.numero == "" &&
                $scope.ora.hh == "" && $scope.minuto.mm == "" && $scope.tipo.nome == "" &&
                $scope.messaggioEvento == "" && $scope.titoloEvento == "") {
                $scope.erroreEvento = true;
                $scope.eventoInserito = false;
            } else {
                var response = cspp_service.creaEvento($scope.dataEvento);
                response.then(
                    function (data) {
                        if (data.data == "insertOK") {
                            $scope.reset();
                            $scope.eventoInserito = true;
                            console.log(data);
                        } else {
                            $scope.eventoInserito = false;
                            console.log(data);
                        }

                    },
                    function (data) {
                        $scope.eventoInserito = false;
                        console.log(data);
                    }
                );
                $scope.erroreEvento = false;
            }
        } else {
            $scope.erroreEvento = true;
            $scope.eventoInserito = false;
        }
    }

    $scope.getEventi = function () {
        var response = cspp_service.getEventi();
        response.then(
            function (data) {
                if (data.data != "0")
                    $scope.listaEventi = data.data;
                else
                    $scope.listaEventi = {};

                console.log($scope.listaEventi);
            },
            function (data) {
                console.log(data);
            }
        );
    }

    $scope.splitString = function (string, nb) {
        var array = string.split(' ');
        return array[nb];
    }

    $scope.getDaysArray = function (month) { // month count is 2  
        $scope.month = month;
        $scope.year = $scope.anno;
        $scope.nDays = new Date($scope.year, $scope.month, 0).getDate();
        for (i = 1; i <= $scope.nDays; i++) {
            $scope.giorni.push({
                "numero": i
            });
        }
    }

    $scope.cambioData = function (mese) {
        $scope.giorni = [];
        $scope.getDaysArray(mese);
    }

    $scope.getDaysArray(1);
    $scope.loadPhoto("/immagine/VisitaConsolato", 1);
    $scope.loadPhoto("/immagine/Elezione2016", 2);
    $scope.loadPhoto("/immagine/Partite", 3);
    $scope.loadPhoto("/immagine/FestaFineAnno", 4);
    $scope.loadPhoto("/immagine/Liste", 5);
});

app.filter('split', function () {
    return function (input, splitChar, splitIndex) {
        // do some bounds checking here to ensure it has that index
        if (splitChar == "-" && splitIndex == "1") {
            var numMese = input.split(splitChar)[splitIndex];
            if (numMese == "01")
                return "Gen";
            if (numMese == "02")
                return "Feb";
            if (numMese == "03")
                return "Mar";
            if (numMese == "04")
                return "Apr";
            if (numMese == "05")
                return "Mag";
            if (numMese == "06")
                return "Giu";
            if (numMese == "07")
                return "Lug";
            if (numMese == "08")
                return "Aug";
            if (numMese == "09")
                return "Set";
            if (numMese == "10")
                return "Ott";
            if (numMese == "11")
                return "Nov";
            if (numMese == "12")
                return "Dec";
        } else {
            return input.split(splitChar)[splitIndex];
        }
    }
});
