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
    header("Access-Control-Allow-Origin: http://localhost:4200");
    require '../conexion.php';
    sleep(1.5);

    $mysqli->set_charset('utf8');

    $new_request=$mysqli->prepare("SELECT * FROM stock");
    $new_request->execute();
    $result = $new_request->get_result();

      if ($result->num_rows > 0) {
        $data=[];
        $producto=[];
        $cliente=[];
        while($regs = $result->fetch_array()) { 
          //Datos del producto
          $request_productos=$mysqli->prepare('SELECT * FROM productos WHERE id_producto="'.$regs['id_producto'].'"');
          $request_productos->execute(); $result_productos=$request_productos->get_result();
          while($regs_prod = $result_productos->fetch_assoc()) { $producto=$regs_prod; }
          //Datos del cliente
          $request_clientes=$mysqli->prepare('SELECT * FROM clientes WHERE ci="'.$regs['ci_cliente'].'"');
          $request_clientes->execute(); $result_clientes=$request_clientes->get_result();
          while($regs_cli = $result_clientes->fetch_assoc()) { $cliente=$regs_cli; }

          $data[]=array(
            'id'=> $regs['id'],
            "producto" => $producto,
            "cliente" => $cliente,
          );
        }
        //echo $cliente;
        //echo '<br>----------------------';
        //echo '<br>----------------------<br>';
        //echo $producto;
        //echo '<br>----------------------';
        //echo '<br>----------------------<br>';
        echo json_encode($data);
      } else { echo json_encode(array('error' => true)); }
      $new_request->close();
    $mysqli->close();
?>