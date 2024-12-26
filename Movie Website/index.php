<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie Website</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>

<nav class="navbar navbar-expand-sm">
<h1 class="title" href="#">NMovies</h1><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-tv" viewBox="0 0 16 16">
  <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2"/>
</svg>
  <div class="container-fluid collapse navbar-collapse justify-content-end">
    <!-- Links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="index.php">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="noAccSite.php">Movies</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="login.php">Log in</a>
      </li>
    </ul>
  </div>
</nav>
<div class="container mt-3">
  <h1 style="font-size: 50px;">Watch Movies with your friends</h1>
  <br>
  <p>Discover some movies and tv shows that interest you.</p>
<div style="display: flex; gap: 10px;">
  <a class="btn btn-primary" href="noAccSite.php">Watch Now</a>
  <a class="btn btn-success" href="login.php">Log in</a>
</div>
<div style="position: absolute; right: -740px; bottom: -133px;">
  <img src="img/bg.png" width="450" height="450">
</div>

</div>

</section>
</body>
</html>