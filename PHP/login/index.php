<?php

// Primero la conexion con xamp, este debe estar activo
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}



//VARIABLES
$signActive = isset($_POST['changeForm']) ? filter_var($_POST['changeForm'], FILTER_VALIDATE_BOOLEAN) : false;
$formContent = $signActive ?
    '
        <h1 id="form-title">Crear Cuenta</h1>
        <input type="text" placeholder="Nombre" name="name" required />
        <input type="email" placeholder="Email" name="email" required />
        <input type="password" placeholder="Contraseña" name="password" required />
        <button id="form-button">Sign Up</button>
    ' :
    '
        <h1 id="form-title">Iniciar Sesión</h1>
        <input type="text" placeholder="name" name="name" style="display: none;" />
        <input type="email" placeholder="Email" name="email" required />
        <input type="password" placeholder="Contraseña" name="password" required />
        <button id="form-button">Login</button>
    ';


// SOLICITUDES DEL SERVER 
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Recoger y limpiar los datos del formulario
    $nombre = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);

    if (isset($_POST['entry'])) {

        if ($_POST["entry"] == "login") {
            $sql = "INSERT INTO users (name, email, password) VALUES ('$nombre', '$email', '$password')";

            if ($conn->query($sql) === TRUE) {
                echo "Usuario creado correctamente";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
        }
        if ($_POST["entry"] == "register") {
            $sql = "SELECT id, name, email, password, fecha_registro FROM users WHERE email = ?";

            $stmt = $conn->prepare($sql);
            $stmt->bind_param('s', $email);
            $stmt->execute();
            $result = $stmt->get_result();

            if ($result->num_rows > 0) {
                $fila = $result->fetch_assoc();
                // Verificar la contraseña ingresada con la contraseña hasheada
                echo is_string($password) . '  ' . is_string($fila['password']);
                if ($password == $fila['password']) {
                    echo "Haz ingresado correctamente";
                } else {
                    echo "contraseña incorrecta";
                }
            } else {
                echo "0 resultados";
            }
        }
    } else if (isset($_POST["changeform"])) {
    }
}







?>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Document</title>
</head>

<body>
    <div class="container">
        <div class="form-container">
            <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
                <input type="hidden" name="changeForm" value="<?php echo $signActive ? "true" : "false" ?> " />
                <input type="hidden" name="entry" value="<?php echo $signActive ? "login" : "register" ?>">
                <?php echo $formContent; ?>
            </form>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>Bienvenido de Nuevo!</h1>
                    <p>Para mantenerse conectado con nosotros, por favor inicie sesión con su información personal</p>
                    <button class="ghost" id="signIn">Iniciar Sesión</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>Hola, Amigo!</h1>
                    <p>Ingrese sus datos personales y comience el viaje con nosotros</p>
                    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
                        <button type="submit"><?php echo $signActive ? "Log in" : "Sign In"; ?></button>
                        <input type="hidden" name="changeForm" value="<?php echo $signActive ? "false" : "true" ?> " />
                        <input type="hidden" name="name">
                        <input type="hidden" name="email">
                        <input type="hidden" name="password">
                    </form>
                </div>
            </div>
        </div>
    </div>

</body>

</html>