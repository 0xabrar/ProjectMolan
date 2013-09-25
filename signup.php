
<?PHP
require_once("./include/membersite_config.php");

if(isset($_POST['submitted']))
{
   if($fgmembersite->RegisterUser())
   {
        $fgmembersite->RedirectToURL("registercomplete.php");
   }
}

?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="dcterms.created" content="Tue, 23 Apr 2013 09:33:31 GMT">
    <meta name="description" content="">
    <meta name="keywords" content="">
	<link href="css/style.css" rel="stylesheet" type="text/css" media="screen" />
    <title>Optiol - Sign Up</title>
    
    <!--[if IE]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
	<script src="signupValidate.js"></script>
	<style type="text/css">
		.signupWarning {
			font-size: 12px;
			color: red;
		}
	</style>
  </head>
  <body>
  
      <div id="wrapper">
	<?php include 'header.php';?>
        
        
	 <div id="login-wrapper">
  	 <div id="login">
         <h2>Sign Up </h2>
				   
	<form name="form" onsubmit="return validateForm()" action='<?php echo $fgmembersite->GetSelfScript(); ?>' method="post" accept-charset='UTF-8'>
		 
            <!-- Change  -->
            <input type='text' style='display:none; width:10px; height:3px;' name='<?php echo $fgmembersite->GetSpamTrapInputName(); ?>' />
            <input type='hidden' name='submitted' id='submitted' value='1'/>
            
                 <h3> Name </h3>
  		 <input type="text" name="firstName" class="textInput nameSignup" placeholder="First" onblur="validateFirstName()" />
		 <input type="text" name="lastName" class="textInput nameSignup2" placeholder="Last" onblur="validateLastName()" /></br>
		 <p class="signupWarning" id="nameWarning" name="test"></p>
	         <h3>Username</h3> 
		 <input type="text" name="username" class="textInput" onblur="validateUsername()"/><br>
	         <p class="signupWarning" id="usernameWarning"></p>
		 <h3>Create a password</h3> 
		 <input type="password" name="password1" class="textInput" onblur="validatePasswordOne()"/><br>
		 <p class="signupWarning" id="passwordOneWarning"></p>
		 <h3>Confirm your password</h3> 
		 <input type="password" name="password2" class="textInput" onblur="validatePasswordTwo()"/><br>
		 <p class="signupWarning" id="passwordTwoWarning"></p>
						  
		 <h3>Birthday</h3> 
		 <select name="day" id="day" style="width:50px; margin-right:0%;" onchange="validateBirthday()">
		 </select>
						  
						
						  	   <select name="month"  id="month" style="margin-right:0%;" onchange="validateBirthday()">
						  	   <option value="01">January</option>
  						  	   <option value="02">February</option>
						  	   <option value="03">March</option>
						  	   <option value="04">April</option>
						  	   <option value="05">May</option>
						  	   <option value="06">June</option>
						  	   <option value="07">July</option>
						  	   <option value="08">August</option>
						  	   <option value="09">September</option>
						  	   <option value="10">October</option>
						  	   <option value="11">November</option>
						  	   <option value="12">December</option>
							   </select>
						 
						  <select name="year" id="year" style="width:100px;" onchange="validateBirthday()">
						  </select>
						  <p class="signupWarning" id="ageWarning"></p>
						  
						  <h3>Gender</h3> 
					 	  <select name="gender">
  						  <option value="male">Male</option>
  						  <option value="female">Female</option>
						  <option value="other">Other</option>
						  </select>
						  
						  <h3>Your current email adddress</h3> 
					 	  <input type="text" name="email" class="textInput" onblur="validateEmail()"></br>
						  <p class="signupWarning" id="emailWarning"></p>
						  
						  <h3>Location</h3> 
					 	  <select name="province" id="province" style="width:75px; margin-right:0%;"  "> 
						  		  <option value="AB">AB</option>
								  <option value="BC">BC</option>
								  <option value="MB">MB</option>
								  <option value="NB">NB</option>
								  <option value="NL">NL</option>
								  <option value="NT">NT</option>
								  <option value="NS">NS</option>
								  <option value="NU">NU</option>
								  <option value="ON">ON</option>
								  <option value="PE">PE</option>
								  <option value="QC">QC</option>
								  <option value="SK">SK</option>
								  <option value="YT">YT</option>
						  
						  </select>  
						  
						  <input type="text" name="postal" style="float:right; margin-right:10px; border:1px solid;" placeholder="Postal Code" onblur="validatePostalCode()">  <br>
						  <p class="signupWarning" id="postalWarning"></p>
						  
						  <input id="terms" type="checkbox" class="labelsign">
						  <h3 style="display:inline;font-size:13px;" id="underlinea">I agree to the Optiol <a href="/footer/information/termsofuse.html">
						  Terms of Use</a>  
						  and <a href="/footer/information/privacypolicy.html">Privacy Policy</a>.</h3>
						   <br><br>
						
		
						  
  						   <input type="submit" value="Sign Up" class="submitButton"><br>
 			 	   </form>
			  
			  	   
			  </div>
			 
			 <div id="logintext">
			 	  <h2> Create a new Optiol account</h2> 
				  <h3>Add online job postings </h3>
				  <p> Add an online posting for a job you want done quickly. Your job can range anything from <br>
				  lawn mowing to getting someone to deliver your groceries. This will be added to our <br>
				  database. Other users looking through our listings are sure to find your job in no time. </p>
				  
				  <h3>Find online jobs postings</h3>
				  <p>Look through our job repository to find a job that's right for you.<br>
				  Listings can be narrowed down to your community and to specific things that you're interested <br>
				  in doing. Know a specific individual who you know offers good jobs? Search for the user to see <br>
				  what other jobs he has to offer.
				  </p>
				  
				  
				  <h3>Build up a database of working experiences</h3>
				  <p>Keep track of all the jobs you've completed and offered. Completed jobs are great working <br>
				  experiences and a good way to get in contact with some of your community's members. Our <br>
				  peer-rating system ensures that when you choose someone to work with, you know that they're <br>
				  excellent co-workers. </p>
				  
				 <img src="images/ladder.jpg" width="150" height="150" alt="ladder"/ style="margin-right:15%; margin-left:-5%;
				 margin-top:1%;">
				 <img src="images/house.jpg" width="150" height="150" alt="" / style="margin-right:15%">
				 <img src="images/garden.jpg" width="150" height="150" alt="" border="0">
			 </div>
		   
		  </div>
		  
		  
		   
			 
   </div>
	
	<?php include 'footer.php';?>	
	
  </body>
</html>