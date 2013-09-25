<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="dcterms.created" content="Tue, 23 Apr 2013 09:33:31 GMT">
    <meta name="description" content="">
    <meta name="keywords" content="">
	<link href="css/style.css" rel="stylesheet" type="text/css" media="screen" />
    <title></title>
    
    <!--[if IE]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
  </head>
  <body>
  	<div id="wrapper">
	<?php include 'header.php'; ?>
		 
		  
		  <div id="login-wrapper">
		  
  		  	  <div id="login">
			  	   <h2>Sign In </h2>
			   
			   	   <form name ="form" action="/incomplete.php">
			   			  <h3> Email </h3>
  			   		 	  <input type="text" name="user" class="textInput"><br>
  					 	  <h3>Password</h3> 
					 	  <input type="password" name="password" class="textInput"><br>
  						   <input type="submit" value="Sign In" class="submitButton"><br>
 			 	   </form>
			  
			  	   <a href="forgotpassword.html">Forgot your password?</a>
			  </div>
			 
			 <div id="logintext">
			 	  <h2> You're going to need your Optiol account to: </h2> 
				  <h3>Add online job postings</h3>
				  <p> Add in a listing for a job you want done quickly to our job repository.</p>
				  <h3>Find online job postings</h3>
				  <p>Look throughout our job repository to find a job that you're interested in doing.</p>
				  <h3>Keep track of your stats</h3>
				  <p>Ratings, completed jobs, and offered jobs can all be tracked by you.</p>
				  
			 </div>
		   
		  </div>	 
   </div>
        
        <?php include 'footer.php'; ?>
   
  
  </body>
</html>