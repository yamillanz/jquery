<?php
    include("database.php");
    $result = $cnnMyql->query("SELECT * FROM tb_tareas")->fetchAll(PDO::FETCH_OBJ);
    echo json_encode($result);
   // $cnnMyql = null;
