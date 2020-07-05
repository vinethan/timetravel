<!DOCTYPE html>
<html>
<head>
<link href="../images/tt.PNG" rel="shortcut icon" />
<meta content="origin" id="mref" name="referrer">
<title>Login</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="../css/style.css" />
<link rel="stylesheet" href="../bootstrap/css/bootstrap.min.css" type="text/css"/>
<link rel="stylesheet" href="../font-awesome/css/font-awesome.min.css">
<script type="text/javascript" src="../script/jquery.min.js"></script>
<script type="text/javascript" src="../bootstrap/js/bootstrap.min.js"></script>

<meta http-equiv='cache-control' content='no-cache, no-store, must-revalidate'>
<meta http-equiv='expires' content='0'>
<meta http-equiv='pragma' content='no-cache'>
</head>
<body>
<div class="container">
<?php
require('db.php');
session_start();
// If form submitted, insert values into the database.
if (isset($_POST['email'])){
        // removes backslashes
 $email = stripslashes($_REQUEST['email']);
        //escapes special characters in a string
 $email = mysqli_real_escape_string($con,$email);
 $password = stripslashes($_REQUEST['password']);
 $password = mysqli_real_escape_string($con,$password);
 //Checking is user existing in the database or not
 $query = "SELECT * FROM `users` WHERE email='$email' and password='".md5($password)."'";
 $result = mysqli_query($con,$query) or die(mysql_error());
 $rows = mysqli_num_rows($result);
   if($rows==1){
		$username = mysqli_fetch_assoc($result)["username"];	
		$_SESSION['username'] = $username;
		header("Location: timetravel.php");
    }else{
		header("Location: loginFailure.php");
	}
}else{
?>

	<div class="row"><aside class="col-sm-4"></aside><aside class="col-sm-4">&nbsp;<br/></aside> </div>
	<div class="row"><aside class="col-sm-4"></aside><aside class="col-sm-4">&nbsp;<br/></aside></div>
	<div class="row"><aside class="col-sm-4"></aside><aside class="col-sm-4">&nbsp;<br/></aside></div>
	<div class="row"><aside class="col-sm-4"></aside><aside class="col-sm-4">&nbsp;</aside></div>
	<div class="row"><aside class="col-sm-4"></aside><aside class="col-sm-4">&nbsp;</aside></div>
	<div class="row">
	   <aside class="col-sm-4"></aside> 
	   <aside class="col-sm-4">
	   <div class="card">
		<article class="card-body">
		 <h4 class="card-title text-center mb-4 mt-1"><font class="loginFont2">Time</font><font class="loginFont1"> Travel</font></h4>
		 <hr>
		 <h4 class="text-success text-center">Log In</h4>
		 <div class="form">
		 <form action="" method="post" name="login">
			 <div class="form-group">
			 <div class="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text"> <i class="fa fa-user"></i> </span>
				</div>
				<input type="email" name="email" class="form-control" placeholder="Email" required />
			</div>
			</div>
			<div class="form-group">
			<div class="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text"> <i class="fa fa-lock"></i> </span>
				</div>
				<input type="password" name="password"  class="form-control" placeholder="password" required />
			</div>
			</div> 
			<div class="form-group">
				<input name="submit" type="submit" value="Login"  class="btn btn-primary btn-block"/>
			</div> 
		</form>
		</div>
		<hr>
		<div class="row">
				<div style="width:50%;text-align:left;" class="text-left"> 
					<a href="#">Forgot password?</a>
				</div>
				<div style="width:50%;text-align:right;" class="text-right">
					<a href='registration.php'>Register Here</a>
				</div>
		</div>
	</article>
	</div>
	</aside> 
	</div>
<?php } ?>
</div>
</body>
</html>