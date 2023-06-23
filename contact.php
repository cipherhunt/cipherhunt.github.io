<?php
$name1=$_POST["Name"];
$name2=$_POST["Email"];
$name3=$_POST["Subject"];
$name4=$_POST["Message"];

$con= mysqli_connect('localhost','root','','user');

$sql="insert into contact values('".$name1."','".$name2."','".$name3."','".$name4."');";
$rs = mysqli_query($con,$sql);


if($rs)
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
                <h1>Thank you for Messaging us. Our representatives will contact you soon.</h1>
                <a href="index.html"> Click here to go to the homepage.</a> 
            </div>
          </div> 
     </body>
 </html>    

        ';
		
}
