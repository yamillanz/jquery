<?php

    include("database.php");
    $sentencia = $cnnMyql->prepare("UPDATE tb_tareas SET nombre = :nombre, descripcion=:descripcion WHERE id = :id");
    $sentencia->bindParam(":id", $_POST['id']);
    $sentencia->bindParam(":nombre", $_POST['nombre']);
    $sentencia->bindParam(":descripcion", $_POST['descripcion']);
    $sentencia->execute();