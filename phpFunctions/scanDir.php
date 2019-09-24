<?php
$rootDir = $_SERVER['DOCUMENT_ROOT'];
$pathFolder = $_GET["path"];

/*config path foto*/
$relativePath = $rootDir."/CSPP".$pathFolder;
//$relativePath = $rootDir.$pathFolder;

//settaggio parametri DB
include 'configDB.php';

$allData = array(); 
// run through content of root directory
$allData = dirToArray($relativePath, $pathFolder, null);
echo json_encode(array_values($allData));


// function scanDirectories($relativePath, $allData){
//     $dirContent = scandir($relativePath);
//     foreach($dirContent as $key => $content) {
//         // filter all files not accessible
//         $path = $relativePath.'/'.$content;
//         if(!in_array($content, $invisibleFileNames)) {
//             // if content is file & readable, add to array
//             if(is_file($path) && is_readable($path)) {
//                 // save file name with path
//                 $allData[] = ".".$pathFolder."/".$content;
//             // if content is a directory and readable, add path and name
//             }elseif(is_dir($path) && is_readable($path)) {
//                 // recursive callback to open new directory
//                 $allData = scanDirectories($path, $allData);
//             }
//         }
//     }
// }

function dirToArray($relativePath, $pathFolder, $nomeDir) {
  
    $result = array();
    $subDir = "";
    // set filenames invisible if you want
    $invisibleFileNames = array(".", "..", ".htaccess", ".htpasswd");

    $dirContent = scandir($relativePath);
    foreach ($dirContent as $key => $value)
    {
        $path = $relativePath.DIRECTORY_SEPARATOR.$value;
        if (!in_array($value, $invisibleFileNames))
        {
            if (is_dir($path))
            {
                $result[$value] = dirToArray($path, $path, $value);
            }
            else
            {
                if($pathFolder !== "/immagine"){
                    $len = strlen($relativePath) - strlen($nomeDir);
                    $result[0] = substr($pathFolder, $len);
                    $result[] = "immagine/".$nomeDir."/".$value;
                }
            }
        }
    }
   
    return $result;
 }

 function startsWith ($string, $startString) 
 { 
     $len = strlen($startString); 
     return (substr($string, 0, $len) === $startString); 
 }

 function endsWith($string, $endString) 
 { 
     $len = strlen($endString); 
     if ($len == 0) { 
         return true; 
     } 
     return (substr($string, -$len) === $endString); 
 } 
?>