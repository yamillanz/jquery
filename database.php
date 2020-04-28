<?php
   $cnnMyql = new PDO("mysql:host=localhost; dbname=test", "root", "");
   $cnnMyql->exec("set names utf8");    
?>