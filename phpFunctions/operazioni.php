<?php
//settaggio parametri DB
include 'configDB.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

/* Mi collego al db */
$conn = new mysqli($servername, $nomeUtente, $password, $nome_db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$tipoOP = $request->tipoOperazione;

if($tipoOP == "NE"){
    $user = $request->nomeUtente;
    $dataOra = $request->dataOra;
    $titolo = $request->titolo;
    $messaggio = $request->messaggio;
    $tipo = $request->tipo;
    echo insertEvento($conn, $user, $dataOra, $titolo, $messaggio, $tipo);
}
if($tipoOP == "CV"){
    $url = $request->urlVideo;
    $nome = $request->nomeVideo;
    $descrizione = $request->descVideo;
    $codiceVideo = getVideoID($url);
    $urlImg = "https://img.youtube.com/vi/".$codiceVideo."/0.jpg";
    echo insertVideo($conn, $url, $nome, $descrizione, $urlImg);
}

$conn->close();

function insertEvento($conn, $user, $dataOra, $titolo, $messaggio, $tipo){
    $query = "INSERT INTO EVENTI (NOME, TIPO, MESSAGGIO, DATA_ORA, NOME_UTENTE) VALUES ('" . mysqli_real_escape_string($conn, $titolo) . "'" .
    "," . "'" . mysqli_real_escape_string($conn, $tipo) . "'" .
    "," . "'" . mysqli_real_escape_string($conn, $messaggio) . "'" .
    "," . "'" . mysqli_real_escape_string($conn, $dataOra) . "'" .
    "," . "'" . mysqli_real_escape_string($conn, $user) . "')";

    $result = $conn->query($query);

    if($result == 1){
        return "insertOK";
    }else{
        return "insertKO";
    }
}

function insertVideo($conn, $url, $nome, $descrizione, $urlImg){

    $query = "INSERT INTO VIDEO (URL_VIDEO, NOME, DESCRIZIONE, URL_IMMAGINE) VALUES ('" . mysqli_real_escape_string($conn, $url) . "'" .
    "," . "'" . mysqli_real_escape_string($conn, $nome) . "'" .
    "," . "'" . mysqli_real_escape_string($conn, $descrizione) . "'" .
    "," . "'" . mysqli_real_escape_string($conn, $urlImg) . "')";

    $result = $conn->query($query);

    if($result == 1){
        return "insertOK";
    }else{
        return "insertKO";
    }
}


function getVideoID($url){
    // https://youtu.be/uxsTnvIYKOo
    // https://www.youtube.com/watch?v=l7kFjFNL-fw

    $link1 = "https://youtu.be/";
    $link2 = "https://www.youtu.be/";
    $link3 = "https://www.youtube.com/watch?v=";
    $link4 = "https://youtube.com/watch?v=";
    if(strpos($url, $link1) !== false){
        return str_replace($link1, '', $url);
    }
    if(strpos($url, $link2) !== false){
        return str_replace($link2, '', $url);
    }
    if(strpos($url, $link3) !== false){
        return str_replace($link3, '', $url);
    }
    if(strpos($url, $link4) !== false){
        return str_replace($link4, '', $url);
    }
}
?>