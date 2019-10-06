<?php

if(!empty($_FILES)) {
    if($_POST['folderName']!="")
    {
        $foldername=$_POST['folderName'];
        if(!is_dir("../immagine/".$foldername))
            mkdir("../immagine/".$foldername);
        foreach($_FILES['file']['name'] as $i=>$name)
        {
            if(strlen($_FILES['file']['name'][$i]) > 1)
            {
                move_uploaded_file($_FILES['file']['tmp_name'][$i],"../immagine/".$foldername.'/'.$name);
            }
        }
        echo "Album caricato correttamente!";
    }
    else
        echo "Caricamento fallito!";
}else{
    echo "Errore: dati da caricare non disponibili";
}

?>