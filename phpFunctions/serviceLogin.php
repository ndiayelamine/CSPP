<?php
//settaggio parametri DB
include 'configDB.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$user = $request->userName;
$userPwd = $request->loginPass;

/* Setto il nome del db */
$conn = new mysqli($servername, $nomeUtente, $password, $nome_db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

/* Preparo la query */
$query = "SELECT NOME_UTENTE, PASSWORD FROM MEMBRI WHERE NOME_UTENTE='" . mysqli_real_escape_string($conn, $user) . "' AND PASSWORD='" . mysqli_real_escape_string($conn, $userPwd) . "'";

$result = $conn->query($query);

$row = $result->fetch_assoc();

/* Se trovo corrispondenze vuol dire che i dati sono corretti */ 
if ($row['NOME_UTENTE'] == $user && $row['PASSWORD'] == $userPwd) {
  /* Avvio la sessione e salvo i dati di login */
  session_start();
  $_SESSION['nomeUtente'] = $user;
  $_SESSION['passwd'] = $userPwd;
  /* Setto i cookie per l'accesso */
  $nome_cookie = $_SESSION['nomeUtente'];
  setcookie("nome_utente", $nome_cookie, time() + 3600);
  /* Lo reindirizzo all home page */
  echo "loginOK";
  //header("refresh:0;url=../home.php");
} else {
  echo "loginKO";
    //header("refresh:0;url=../index.php");
}
/* Chiudo la connessione */
$conn->close();
?>
