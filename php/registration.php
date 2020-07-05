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
<div class="container">
<?php
require('db.php');
// If form submitted, insert values into the database.
if (isset($_REQUEST['username'])){
        // removes backslashes
 $username = stripslashes($_REQUEST['username']);
        //escapes special characters in a string
 $username = mysqli_real_escape_string($con,$username); 
 $email = stripslashes($_REQUEST['email']);
 $email = mysqli_real_escape_string($con,$email);
 $password = stripslashes($_REQUEST['password']);
 $password = mysqli_real_escape_string($con,$password);
 $creation_date = date("Y-m-d H:i:s");
        $query = "INSERT into `users` (username, password, email, creation_date)
VALUES ('$username', '".md5($password)."', '$email', '$creation_date')";
        $result = mysqli_query($con,$query);
        if($result){
            header("Location: registrationSuccess.php");
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
		 <h4 class="text-success text-center">Registration</h4>
			<div class="form">
				<form name="registration" action="" method="post">
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
					<input name="submit" type="submit" value="Register"  class="btn btn-primary btn-block"/>
				</div>
			</form>
		</div>
		</article>
		</div>
		</aside> 
	</div>
<?php } ?>
</div>
</body>
</html>