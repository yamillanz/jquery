<?php
include("database.php");

if (isset($_POST["nombre"]) && !empty($_POST["descripcion"])) {
    $smt = $cnnMyql->prepare("INSERT INTO tb_tareas (nombre, descripcion) VALUES (:nombre, :descripcion)");
    $smt->bindParam(":nombre", $_POST["nombre"]);
    $smt->bindParam(":descripcion", $_POST["descripcion"]);
    $smt->execute();
    echo "Agregado!";
}
