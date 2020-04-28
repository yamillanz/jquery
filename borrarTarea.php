<?php 
    include("database.php");

    $sentencia = $cnnMyql->prepare("DELETE FROM tb_tareas WHERE id=:idp");
    $sentencia->bindParam(":idp", $_POST["id"]);
    $sentencia->execute();
    echo "Borrado Ejecutado!";

?>