<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Log in</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body style="background: linear-gradient(140deg, purple, darkblue, lightblue); background-repeat: no-repeat; margin: auto; center; height: 100vh; overflow: auto; margin-bottom: 100px;">

<nav class="navbar navbar-expand-sm">
<h1 class="title" href="#">NMovies</h1><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-tv" viewBox="0 0 16 16">
  <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2"/>
</svg>
  <div class="container-fluid collapse navbar-collapse justify-content-end">
    <!-- Links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="index.php" style="color: white;">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="noAccSite.php" style="color: white;">Movies</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="login.php" style="color: white;">Log in</a>
      </li>
    </ul>
  </div>
</nav>

<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mb_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['login'])) {
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    if (!empty($email) && !empty($password)) {
        $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows === 1) {
            $user = $result->fetch_assoc();
            if (password_verify($password, $user['password'])) {
                $_SESSION['user'] = $user;
                header("Location: site.php");
                exit;
            } else {
                echo "<div class='alert alert-danger'>Invalid password!</div>";
            }
        } else {
            echo "<div class='alert alert-danger'>No account found with this email!</div>";
        }
        $stmt->close();
    } else {
        echo "<div class='alert alert-warning'>All fields are required</div>";
    }
}

$conn->close();
?>

<div class="container mt-5 bg-dark" style="width: 50%; height: auto; box-shadow: 0 0 10px; border-radius: 20px; padding: 20px; position: relative;">
    <h3 style="text-align: center; font-weight: 900; color: white;">Login</h3>
    <form method="POST" action="" style="display: grid; margin-top: 30px;">
        <div class="mb-3">
            <label for="email" class="form-label" style="color: white;">Email</label>
            <input type="email" class="form-control" id="email" name="email" placeholder="Enter email..." required>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label" style="color: white;">Password</label>
            <input type="password" class="form-control" id="password" name="password" placeholder="Enter password..." required>
        </div>
        <button type="submit" name="login" class="btn btn-primary" style="font-weight: 900; width: 100%;">Login</button>
        <br>
        <p style="text-align: center; margin-top: 50px; color: white;">Don't have an account?</p>
        <a type="submit" name="login" class="btn btn-success" href="signup.php" style="font-weight: 900; width: 100%;">Sign up</a>
    </form>
</div>

</body>
</html>