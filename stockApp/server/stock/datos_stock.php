<?php
/*
------------------------------------------------------------------------------
------------------------------------------------------------------------------

---- ██╗░░░░░███████╗░█████╗░  ███████╗██╗░░░██╗███╗░░██╗███████╗░██████╗ ---- 
---- ██║░░░░░██╔════╝██╔══██╗  ██╔════╝██║░░░██║████╗░██║██╔════╝██╔════╝ ---- 
---- ██║░░░░░█████╗░░██║░░██║  █████╗░░██║░░░██║██╔██╗██║█████╗░░╚█████╗░ ---- 
---- ██║░░░░░██╔══╝░░██║░░██║  ██╔══╝░░██║░░░██║██║╚████║██╔══╝░░░╚═══██╗ ---- 
---- ███████╗███████╗╚█████╔╝  ██║░░░░░╚██████╔╝██║░╚███║███████╗██████╔╝ ---- 
---- ╚══════╝╚══════╝░╚════╝░  ╚═╝░░░░░░╚═════╝░╚═╝░░╚══╝╚══════╝╚═════╝░ ---- 

---- Prueba Fullstack para IBEC Internacional --------------------------------
---- leorecord@hotmail.com ---------------------------------------------------
------------------------------------------------------------------------------
------------------------------------------------------------------------------
*/
if (isset($_GET['op'])) {
  header("Access-Control-Allow-Origin: http://localhost:4200");
  require '../conexion.php';
  //sleep(2);

  $mysqli->set_charset('utf8');
  $op = $_GET['op'];

  switch ($op) {
    case 1:
      $new_request=$mysqli->prepare("SELECT id_producto, descripcion FROM productos");
    break;
    case 2:
      $new_request=$mysqli->prepare("SELECT ci, nombre FROM clientes"); 
    break;
  }
  $new_request->execute();
  $result = $new_request->get_result();

    if ($result->num_rows > 0) {
      while($regs = $result->fetch_array()) { 
        $data[]=$regs;
      }
      echo json_encode($data);
    } else { echo json_encode(array('error' => true)); }
    $new_request->close();
  $mysqli->close();
}
?>