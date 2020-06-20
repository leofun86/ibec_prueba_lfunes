<?php
    header("Access-Control-Allow-Origin: http://localhost:4200");
    require 'conexion.php';
    //sleep(2);

    $mysqli->set_charset('utf8');

    $new_request=$mysqli->prepare("SELECT * FROM stock WHERE id_producto=1");
    $new_request->execute();
    $result = $new_request->get_result();

      if ($result->num_rows == 1) {
        $data = $result->fetch_assoc();
        echo json_encode(array($data));
      } else { echo json_encode(array('error' => true)); }
      $new_request->close();
    $mysqli->close();
?>