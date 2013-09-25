var firstNameInput;
var lastNameInput;
var nameWarning;

var usernameInput;
var usernameWarning;

var passwordOneInput;
var passwordOneWarning;

var passwordTwoInput;
var passwordTwoWarning;

var emailInput;
var emailWarning;

var postalCodeInput;
var postalCodeWarning;

var termsAgreed; 

var NAME_WARNING_ID = "nameWarning";
var USERNAME_WARNING_ID = "usernameWarning";
var PASSWORD_ONE_WARNING_ID = "passwordOneWarning";
var PASSWORD_TWO_WARNING_ID = "passwordTwoWarning";
var EMAIL_WARNING_ID = "emailWarning";
var POSTAL_WARNING_ID = "postalWarning";
var TERMS_ID = "terms";

window.onload=function initialize(){
	init();
	populateLists();
}

function init()
{
	firstNameInput = document.form.firstName;
	lastNameInput = document.form.lastName;
	nameWarning = document.getElementById(NAME_WARNING_ID);
	
	usernameInput = document.form.username;
	usernameWarning = document.getElementById(USERNAME_WARNING_ID);
	
	passwordOneInput = document.form.password1;
	passwordOneWarning = document.getElementById(PASSWORD_ONE_WARNING_ID);
	
	passwordTwoInput = document.form.password2;
	passwordTwoWarning = document.getElementById(PASSWORD_TWO_WARNING_ID);

	emailInput = document.form.email;
	emailWarning = document.getElementById(EMAIL_WARNING_ID);
	
	postalCodeInput = document.form.postal;
	postalCodeWarning = document.getElementById(POSTAL_WARNING_ID);
	
	termsAgreed = document.getElementById(TERMS_ID);
}

function populateLists(){
	var list = document.getElementById("day");
	for(var i=1; i<=31; i++){
		var opt = document.createElement("option");
		opt.text = i;
		list.add(opt, null);
	}

	list = document.getElementById("year");
	for(var i=1930; i<=2013; i++){
		var opt = document.createElement("option");
		opt.text = i;
		list.add(opt, null);
	}
	list.value = 1995;
}

function validateForm()
{
	if(validateFirstName() 
	&& validateLastName() 
	&& validateUsername 
	&& validatePasswordOne() 
	&& validatePasswordTwo() 
	&& validateBirthday()
	&& validateEmail()
	&& validatePostalCode()
	&& validateTermsAgreement()){
		return true;
	}
	alert("You have some information missing.");
	return false;
}

//Will make sure that the Optiol terms of use have been agreed to
function validateTermsAgreement(checkbox) {
		 if (termsAgreed.checked) {
		 	return true
		 } else {
		   return false;
		 }
}

/*
Users can only have names
-with only letters
-less than 32 characters
-greater than 0 characters
*/
function validateFirstName()
{
	var fname = firstNameInput.value;
	var lname = lastNameInput.value;
	
	if(fname.length==0){
		nameWarning.innerHTML = "You can't leave these first name empty";
		return false;
	}else if(fname.length>32){
		nameWarning.innerHTML = "Names cannot exceed 32 characters.";
		return false;
	}else if(!(lettersOnly(fname) && lettersOnly(lname))){
		nameWarning.innerHTML = "Please enter letters only.";
		return false;
	}else{
		nameWarning.innerHTML = "";
		return true;
	}
}

//Works the same way as first names
function validateLastName()
{
	var fname = firstNameInput.value;
	var lname = lastNameInput.value;
	
	if(lname.length==0){
		nameWarning.innerHTML = "You can't leave the last name empty.";
		return false;
	}else if(lname.length>32){
		nameWarning.innerHTML = "Names cannot exceed 32 characters.";
		return false;
	}else if(!(lettersOnly(fname) && lettersOnly(lname))){
		nameWarning.innerHTML = "Please enter letters only";
		return false;
	}else{
		nameWarning.innerHTML = "";
		return true;
	}
}

/*

*/
function validateUsername()
{
	var uname = usernameInput.value;
	if(uname.length==0){
		usernameWarning.innerHTML = "This field cannot be empty.";
		return false;
	}else if(uname.length>32){
		usernameWarning.innerHTML = "Usernames cannot exceed 32 characters.";
		return false;
	}else if(!lettersAndNumbersOnly(uname)){
		usernameWarning.innerHTML = "Usernames can only contain letters, numbers, underscores and periods.";
		return false;
	}else{
		usernameWarning.innerHTML = "";
		return true;
	}
}

function validatePasswordOne()
{
	var pass = passwordOneInput.value;
	
	if(pass.length==0){
		passwordOneWarning.innerHTML = "This field cannot be empty.";
		return false;
	}else if(pass.length<6){
		passwordOneWarning.innerHTML = "Your password must be at least 6 characters long.";
		return false;
	}else if(pass.length>32){
		passwordOneWarning.innerHTML = "Your password cannot exceed 32 characters.";
		return false;
	}else{
		passwordOneWarning.innerHTML = "";
		return true;
	}
}

function validatePasswordTwo()
{
	var passOne = passwordOneInput.value;
	var passTwo = passwordTwoInput.value;
	
	if(passTwo.length==0){
		passwordTwoWarning.innerHTML = "This field cannot be empty.";
		return false;
	}else if(!(passOne==passTwo)){
		passwordTwoWarning.innerHTML = "Your passwords do not match.";
		return false;
	}else{
		passwordTwoWarning.innerHTML = "";
		return true;
	}
}

function validateBirthday()
{
	var birthDay = document.getElementById("day");
	var birthMonth = document.getElementById("month");
	var birthYear = document.getElementById("year");
	
	var warning = document.getElementById("ageWarning");
	
	
	birthDay = birthDay.options[birthDay.selectedIndex].value;
	birthMonth = birthMonth.options[birthMonth.selectedIndex].value;
	birthYear = birthYear.options[birthYear.selectedIndex].value;
	
	if(!above13(birthDay, birthMonth, birthYear)){
		warning.innerHTML = "You must be above 13 years of age to register.";
		return false;
	}else{
		warning.innerHTML = "";
		return true;
	}
}

function validateEmail()
{
	var email = emailInput.value;
	var beforeAt = email.slice(0, email.indexOf('@'));
	var afterAt = email.substring(email.indexOf('@')+1);
	var afterAtBeforeNextDot = afterAt.substring(0, afterAt.indexOf('.'));
	
	if(email.length==0){
		emailWarning.innerHTML = "This field cannot be empty.";
		return false;
	}else if(!(beforeAt.length!=0 && afterAtBeforeNextDot.length!=0 && lettersAndNumbersOnly(beforeAt) && lettersAndNumbersOnly(afterAt))){
		emailWarning.innerHTML = "Please enter valid email address";
		return false;
	}else{
		emailWarning.innerHTML = "";
		return true;
	}	
}

function validatePostalCode()
{
	var code = postalCodeInput.value;
	
	if(code.length==0){
		postalWarning.innerHTML = "This field cannot be empty.";
		return false;
	}else if(code.length!=6){
		postalWarning.innerHTML = "Please enter valid postal code.";
		return false;
	}
	for(var i=0; i<code.length; i++)
	{
		var ch = code.charAt(i);
		if(i%2==0){
			if(!lettersOnly(ch)){
				postalWarning.innerHTML = "Please enter a valid postal code";
				return false;
			}
		}else{
			if(!numbersOnly(ch)){
				postalWarning.innerHTML = "Please enter a valid postal code";
				return false;
			}
		}
	}
	postalWarning.innerHTML = "";
	return true;
}

function noConsecutiveDoubles(str, ch)
{
	for(var i=0; i<str.length; i++){
		var ch1 = str.charAt(i);
		var ch2 = str.charAt(i+1);
		if(ch1==ch2) return false;
	}
	return true;
}

function lettersOnly(str)
{
	for(var i=0; i<str.length; i++){
	
		var key = str.charAt(i).charCodeAt(0);
		
		if(!(key>='a'.charCodeAt(0) && key<='z'.charCodeAt(0) || 
			 key>='A'.charCodeAt(0) && key<='Z'.charCodeAt(0))){
			 return (false);
		}
	}
	return (true);
}

function numbersOnly(str)
{
	for(var i=0; i<str.length; i++){
	
		var key = str.charAt(i).charCodeAt(0);
		
		if(!(key>='0'.charCodeAt(0) && key<='9'.charCodeAt(0))){
			 return (false);
		}
	}
	return (true);
}

function lettersAndNumbersOnly(str)
{
	for(var i=0; i<str.length; i++){
	
		var key = str.charAt(i).charCodeAt(0);
		
		if(!(key>='a'.charCodeAt(0) && key<='z'.charCodeAt(0) || 
			 key>='A'.charCodeAt(0) && key<='Z'.charCodeAt(0) ||
			 key>='0'.charCodeAt(0) && key<='9'.charCodeAt(0) ||
			 key=='_'.charCodeAt(0) || key=='.'.charCodeAt(0))){
			 return false;
		}
	}
	return true;
}

function above13(birthDay, birthMonth, birthYear)
{
	var curDate = new Date();
	
	var curDay = curDate.getDate();
	var curMonth = curDate.getMonth();
	var curYear = curDate.getFullYear();
	
	var age = (curYear - birthYear) + (curMonth - birthMonth)/11 + (curDay-birthDay)/30/11;
	
	if(age<13){
		return false;
	}else{
		return true;
	}
}
