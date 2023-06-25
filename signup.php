<?php

$con= mysqli_connect('localhost','root','','user');

if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}


$name1=$_POST["name"];
$phone1=$_POST["phone"];
$email1=$_POST["email"];
$id1=$_POST["id"];
$location1=$_POST["location"];
$designation1=$_POST["designation"];
$organization1=$_POST["organization"];
$passwd1=$_POST["passwd"];

$sql="insert into account values('".$name1."','".$phone1."','".$email1."','".$id1."','".$location1."','".$designation1."','".$organization1."','".$passwd1."');";



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
            <div class="content" style="height:250px;">
                <h1>The Account is Successfully Created!!</h1>
                <a href="uidpro.html"> Click here to go to the Login page </a> 
            </div>
          </div> 
     </body>
 </html>    ';
		
}


?>