<?php

if (!isset($_POST['submit'])) {
  $email1= $_POST["email"];
  $passwd1 = $_POST["passwd"];
  $con= mysqli_connect('localhost','root','','user');
  $sql="select * from account where email='".$email1."' and password='".$passwd1."';";
  //echo $sql;
  $result=mysqli_query($con,$sql);
  $resultcheck=mysqli_num_rows($result);
  if($resultcheck>0)
  {
	echo '<html>
	<body>
	<script>
	location.replace("midpage.html");
	</script>
	</body>
	</html>';
	
	
	shell_exec("touch cookie");
	$com7="echo '".$email1."' >> cookie "; 
	shell_exec($com7);
  }
  else
  {
	  echo '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login Page</title>
  <link rel="stylesheet" href="uidpro.css">
</head>
<body>
    <div class="gif-background">
        <img src="https://i.gifer.com/9kGQ.gif" alt="GIF Background">
      </div>
      
  <div class="container">
    <h1 class="logo">Cipher Hunt</h1>
    <form class="form" action="login.php" method="get">
      <h1>Login</h1>
      <input type="text" placeholder="Email or Phone Number" name="email" required>
      <input type="password" placeholder="Password" name="passwd" required>
      <button type="submit">Login</button>
      <p class="signup-link">Don\'t have an account? <a href="uidprosignin.html">Sign up</a></p>
    </form>
    <p class="signup-link" style="color:red;"> Your Email or Password is Incorrect. Please Try again.</p>
  </div>
  
  <div class="background">
    <div class="encryption-object"></div>
  </div>
</body>
</html>';
  }
  
}
mysqli_close($con);

?>