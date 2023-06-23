<?php

if (!isset($_GET['submit'])) {
  $email1= $_GET["email"];
  $passwd1 = $_GET["passwd"];
  $con= mysqli_connect('localhost','root','','user');
  $sql="select * from account where email='".$email1."' and password='".$passwd1."';";
  echo $sql;
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
<html>
    <head>
        <title>My Web page</title>
        <link rel="stylesheet" href="6.css">
     </head>
     <body>
        <div class="container">
            <div class="content">
                <h1>Details Entered Are Invalid</h1> 
            </div>
          </div> 
     </body>
 </html>    

        ';
  }
  
}
mysqli_close($con);

?>
