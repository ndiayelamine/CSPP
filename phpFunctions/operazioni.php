<?php
//settaggio parametri DB
include 'configDB.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$user = $request->nomeUtente;
$dataOra = $request->dataOra;
$titolo = $request->titolo;
$messaggio = $request->messaggio;
$tipo = $request->tipo;

/* Mi collego al db */
$conn = new mysqli($servername, $nomeUtente, $password, $nome_db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$query = "INSERT INTO EVENTI (NOME, TIPO, MESSAGGIO, DATA_ORA, NOME_UTENTE) VALUES ('" . mysqli_real_escape_string($conn, $titolo) . "'" .
 "," . "'" . mysqli_real_escape_string($conn, $tipo) . "'" .
 "," . "'" . mysqli_real_escape_string($conn, $messaggio) . "'" .
 "," . "'" . mysqli_real_escape_string($conn, $dataOra) . "'" .
 "," . "'" . mysqli_real_escape_string($conn, $user) . "')";

$result = $conn->query($query);

if($result == 1){
    echo "insertOK";
}else{
    echo "insertKO";
}

$conn->close();

?>