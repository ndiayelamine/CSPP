<?php
$rootDir = $_SERVER['DOCUMENT_ROOT'];
$pathFolder = $_GET["path"];

//settaggio parametri DB
include 'configDB.php';

$allData = array(); 
// set filenames invisible if you want
$invisibleFileNames = array(".", "..", ".htaccess", ".htpasswd");
// run through content of root directory
$dirContent = scandir($relativePath);
foreach($dirContent as $key => $content) {
    // filter all files not accessible
    $path = $relativePath.'/'.$content;
    if(!in_array($content, $invisibleFileNames)) {
        // if content is file & readable, add to array
        if(is_file($path) && is_readable($path)) {
            // save file name with path
            $allData[] = ".".$pathFolder."/".$content;
        // if content is a directory and readable, add path and name
        }elseif(is_dir($path) && is_readable($path)) {
            // recursive callback to open new directory
            $allData = scanDirectories($path, $allData);
        }
    }
}
echo json_encode(array_values($allData));
?>