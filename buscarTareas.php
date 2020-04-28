<?php
    include("database.php");
    if (isset($_POST["valor"]) && !empty($_POST["valor"])) {
        $valor = $_POST["valor"];
        $resultado = $cnnMyql->query("SELECT * FROM tb_tareas WHERE nombre LIKE '%$valor%'")->fetchAll(PDO::FETCH_OBJ);
        echo json_encode($resultado);
    }
    
?>