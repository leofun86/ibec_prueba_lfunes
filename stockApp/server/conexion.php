<?php
    $mysqli = new mysqli('localhost', 'root', '', 'prueba_ibec');
    if ($mysqli->connect_errno) { echo 'Ha habido un error =>'.$mysqli->connect_error; }
?>