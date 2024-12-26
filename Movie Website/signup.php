<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign up</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body style="min-height: 100vh; overflow: auto; margin-bottom: 100px;">

<nav class="navbar navbar-expand-sm">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <h1 class="title" style="display: inline; color: white;">NMovies</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-tv" viewBox="0 0 16 16">
                    <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2" />
                </svg>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
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

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['signup'])) {
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';
    $confirmPassword = $_POST['confirmPassword'] ?? '';
    
    if (!empty($email) && !empty($password) && !empty($confirmPassword)) {
        if ($password === $confirmPassword) {
          
            if (preg_match('/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,12}$/', $password)) {
                $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
                $stmt->bind_param("s", $email);
                $stmt->execute();
                $result = $stmt->get_result();

                if ($result->num_rows === 0) {
                    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
                    $stmt = $conn->prepare("INSERT INTO users (email, password) VALUES (?, ?)");
                    $stmt->bind_param("ss", $email, $hashedPassword);
                    if ($stmt->execute()) {
                        echo "<div class='alert alert-success'>Account created successfully! You can now log in.</div>";
                    } else {
                        echo "<div class='alert alert-danger'>Something went wrong. Please try again.</div>";
                    }
                } else {
                    echo "<div class='alert alert-danger'>Email already exists.</div>";
                }
                $stmt->close();
            } else {
                echo "<div class='alert alert-warning'>Password must be 8-12 characters long, contain at least one uppercase letter, and one number.</div>";
            }
        } else {
            echo "<div class='alert alert-danger'>Passwords do not match.</div>";
        }
    } else {
        echo "<div class='alert alert-warning'>All fields are required.</div>";
    }
}

$conn->close();
?>


    <div class="container mt-5 bg-dark" style="width: 500px; height: 500px; box-shadow: 0 0 10px; border-radius: 20px; padding: 20px; position: relative;">
    <h3 style="text-align: center; font-weight: 900; color: white;">Sign Up</h3>
    <form method="POST" action="" style="display: grid;">
        <div class="mb-3">
            <label for="email" class="form-label" style="color: white;">Email</label>
            <input type="email" class="form-control" id="email" name="email" placeholder="Enter email..." required>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label" style="color: white;">Password</label>
            <input type="password" class="form-control" id="password" name="password" placeholder="Enter password..." required>
        </div>
        <div class="mb-3">
            <label for="confirmPassword" class="form-label" style="color: white;">Confirm Password</label>
            <input type="password" class="form-control" id="confirmPassword" name="confirmPassword" placeholder="Confirm password..." required>
        </div>
        <button type="submit" name="signup" class="btn btn-success" style="font-weight: 900; width: 100%;">Sign Up</button>
        <p style="text-align: center; margin-top: 30px; color: white;">Already have an account?</p>
        <a href="login.php" class="btn btn-primary" style="font-weight: 900; width: 100%;s">Login</a>
    </form>
</div>
    
</body>
</html>