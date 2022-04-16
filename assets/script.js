// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var selectCriteria = window.alert("Select password criteria");
var selectLowercase = window.prompt("Include lowercase letters?");
var selectUppercase = window.prompt("Include uppercase letters?");
var selectNumeric = window.prompt("Include numbers?");
var selectSpecial = window.prompt("Include special characters?");

// character types
// lowercase, uppercase, numeric, special characters














// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);