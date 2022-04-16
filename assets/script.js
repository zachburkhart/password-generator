// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// character types
// lowercase, uppercase, numeric, special characters
function selectCriteria() {
  window.alert("Select password criteria");
  var selectLowercase = window.confirm("Include lowercase letters?");
  var selectUppercase = window.confirm("Include uppercase letters?");
  var selectNumeric = window.confirm("Include numbers?");
  var selectSpecial = window.confirm("Include special characters?");
}

// this is the generatePassword function that's called when you click the button
// use this function to ask initial criteria questions
function generatePassword() {
  var criteria = selectCriteria();
}

// length of password
var selectLength = window.prompt("How long do you want your password to be?");
// use this function to meet acceptance criteria: must be between 8 and 128 characters















// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);