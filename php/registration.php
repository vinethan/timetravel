<!DOCTYPE html>
<html>
<head>
<link href="../images/tt.PNG" rel="shortcut icon" />
<meta content="origin" id="mref" name="referrer">
<title>Registration</title>
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
<?php
require('db.php');
require('InitilizeSessionVariables.php');
initAllSessionVariable();

if (isset($_REQUEST['username']) && isset($_REQUEST['email']) && isset($_REQUEST['password']) 
			&& isset($_REQUEST['confirmPassword']) && ($pwdValidationMsg == null || $pwdValidationMsg === "")){
        // removes backslashes
	$username = stripslashes($_REQUEST['username']);
			//escapes special characters in a string
	$username = mysqli_real_escape_string($con,$username); 
	
	$email = strtoupper(stripslashes($_REQUEST['email']));
	$password = stripslashes($_REQUEST['password']);
	$password = mysqli_real_escape_string($con,$password);
	
	$cpassword = stripslashes($_REQUEST['confirmPassword']);
	$cpassword = mysqli_real_escape_string($con,$cpassword);
	$creation_date = date("Y-m-d H:i:s");
	$queryRegCheck = "SELECT * FROM `users` WHERE UPPER(email)='$email' and password='".md5($password)."'";
	$resultRegCheck = mysqli_query($con,$queryRegCheck) or die(mysql_error());
		
	$rowsCheck = mysqli_num_rows($resultRegCheck);
	if($rowsCheck == null || $rowsCheck==0) {
		$_SESSION['regFailedMsg'] = "";
		$query = "INSERT into `users` (username, password, email, creation_date) VALUES ('$username', '".md5($password)."', '$email', '$creation_date')";
		$result = mysqli_query($con,$query);
		if($result){
			header("Location: registrationSuccess.php");
		}
	} else {
		$_SESSION['regFailedMsg'] = "User already registerd.";
		header("Location: registrationFailure.php"); 
	}
}else{
?>
<div class="container">
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
		 <h4 class="text-success text-center">Registration</h4>
		 <h6  id="errorMessage" class="text-danger text-center"></h6>
			<div class="form">
				<form name="registration" action="" method="post" id="registrationForm"  onSubmit="return validateRegistration();" >
				<div class="form-group">
					<div class="input-group">
						<div class="input-group-prepend">
							<span class="input-group-text"> <i class="fa fa-user"></i> </span>
						</div>
						<input type="text" name="username" class="form-control" placeholder="Username" required />
					</div>
				</div>
				<div class="form-group">
					<div class="input-group">
						<div class="input-group-prepend">
							<span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
						</div>
						<input type="email" name="email" class="form-control" placeholder="Email" required />
					</div>
				</div>
				<div class="form-group">
					<div class="input-group">
						<div class="input-group-prepend">
							<span class="input-group-text"> <i class="fa fa-lock"></i> </span>
						</div>
						<input type="password" name="password" id="password" class="form-control" placeholder="password" required />
						 <i onclick="displayPassword('password')" class="fa fa-eye-slash"></i>
						
					</div>
				</div> 
				<div class="form-group">
					<div class="input-group">
						<div class="input-group-prepend">
							<span class="input-group-text"> <i class="fa fa-lock"></i> </span>
						</div>
						<input type="password" name="confirmPassword" id="confirmPassword"  class="form-control" placeholder="Confirm Password" required />
						<i onclick="displayPassword('confirmPassword')" class="fa fa-eye-slash"></i>
					</div>
				</div> 
				<div class="form-group">
					<input name="submit" type="submit" value="Register"  class="btn btn-primary btn-block"/>
				</div>
			</form>
		</div>
		<hr>
		<div class="row">
			<div style="width:50%;text-align:left;" class="text-left"> 
				<a href="#">Forgot password?</a>
			</div>
			<div style="width:50%;text-align:right;" class="text-right">
				<a href='login.php'>Login</a>
			</div>
		</div>
		</article>
		</div>
		</aside> 
	</div>
	<script>
		function displayPassword(a) {
			x=document.getElementById(a);
			var c=x.nextElementSibling
			if (x.getAttribute('type') == "password") {
				c.removeAttribute("class");
				c.setAttribute("class","fa fa-eye");
				x.removeAttribute("type");
				x.setAttribute("type","text");
			} else {
				x.removeAttribute("type");
				x.setAttribute('type','password');
				c.removeAttribute("class");
				c.setAttribute("class","fa fa-eye-slash");
			}
		}
		
		 function validateRegistration() {
            var a = document.getElementById("password").value;
            var b = document.getElementById("confirmPassword").value;
			var errMsg = document.getElementById("errorMessage");
            if (a!=b) {
               errMsg.textContent = "Passwords do no match";
               return false;
            }
			return true;
        }
	</script>
<?php } ?>
</div>
</body>
</html>