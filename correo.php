<?php
  $destinatario = 'adriana_osorio11@outlook.com';
  // esto es al correo al que se enviará el mensaje
  $nombre = $_POST['nombre'];
  $asunto = $_POST['asunto'];
  $mensaje = $_POST['mensaje'];
  $email = $_POST['email'];

  $header = "Enviado desde la página Leslie Osorio";
  $mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre;

  mail($destinatario, $asunto, $mensajeCompleto, $header);
  echo "<script>alert('correo enciado exitosamente')</script>";
  echo "<script> setTimeout(\"location.href='index.html'\", 1000)</script>";

?>