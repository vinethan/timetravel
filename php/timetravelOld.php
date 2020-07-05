<?php
//include auth.php file on all secure pages
include("../auth.php");
?>
<html>
<head>
<link href="../images/tt.PNG" rel="shortcut icon" />
<meta content="origin" id="mref" name="referrer">
<link rel="stylesheet" href="../css/timetravel.css" />
<link rel="stylesheet" href="../bootstrap/css/bootstrap.min.css" type="text/css"/>
<link rel="stylesheet" href="../font-awesome/css/font-awesome.min.css">
<script type="text/javascript" src="../script/jquery.min.js"></script>
<script type="text/javascript" src="../bootstrap/js/bootstrap.min.js"></script>

<meta http-equiv='cache-control' content='no-cache, no-store, must-revalidate'>
<meta http-equiv='expires' content='0'>
<meta http-equiv='pragma' content='no-cache'>
</head>
<body>
<p class='header'>Hi <?php echo $_SESSION['username']; ?>!... Welcome to Time Travel App! </p>


<div class='basic-con'>
	<div class='cat' data-cat='1'>Quiz</div>
	<div class='cat' data-cat='2'>Videos</div>
	<div class='cat' data-cat='3'>Riddles</div>
	<div class='cat' data-cat='4'>OMG Facts</div>
	<div class='cat' data-cat='5'>Health</div>
	<div class='cat' data-cat='5'>Host</div>
</div>

<div class='con hide'>
	<div class='ch' data-cat='O'>Olympics</div>
	<div class='ch' data-cat='P'>Politics</div>
	<div class='ch' data-cat='A'>Avengers</div>
	<div class='ch' data-cat='G'>Game of Thrones</div>
	<div class='ch' data-cat='W'>World Cup</div>
	<div class='ch' data-cat='H'>Hollywood</div>
</div>

<div class='ch back hide' onclick='location.reload();'>Go back to Main Menu</div>
<div id="quiz"></div>
<button id="submit" class="hide">Submit Quiz</button>
<!-- <button id="next" class="next hide">Next</button> -->
<div id="results"></div>

<div class='v-con hide'>
	<div class='label'>Milk is not good for health</div>
	<iframe width="720" height="315"src="https://www.youtube.com/embed/FBA0h2x129s"></iframe>
</div>

 <script type="text/javascript" src="script/script.js"/>
</body>
</html>