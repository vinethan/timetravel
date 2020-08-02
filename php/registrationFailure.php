<!DOCTYPE html>
<?php
session_start();
?>
<html>
<head>
<link href="../images/tt.PNG" rel="shortcut icon" />
<meta content="origin" id="mref" name="referrer">
<title>Registration Successful</title>
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
		 <h4 class="text-danger text-center">Registration Failed</h4>
		 <p class="text-info text-center"><b><?php echo $_SESSION['regFailedMsg']; ?></b></p>
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
</div>
</body>
</html>