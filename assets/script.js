// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Setting up an array for all the possible letters, numbers, and special characters
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// character types
// lowercase, uppercase, numeric, special characters
// use this function to ask initial criteria questions
function selectCriteria() {
  window.alert("Select password criteria");
  var selectLength = window.prompt("How long do you want your password to be? Must be at least 8 and no more than 128.");
  var selectLowercase = window.prompt("Include lowercase letters? Enter YES or NO");
  var selectUppercase = window.prompt("Include uppercase letters? Enter YES or NO");
  var selectNumeric = window.prompt("Include numbers? Enter YES or NO");
  var selectSpecial = window.prompt("Include special characters? Enter YES or NO");
  console.log(
    "Length: " + selectLength + " -- " 
    + "Lowercase: " + selectLowercase + " -- " 
    + "Uppercase: " + selectUppercase + " -- " 
    + "Numbers: " + selectNumeric + " -- "
    + "Special: " + selectSpecial)
};

// this is the generatePassword function that's called when you click the button
function generatePassword() {
  // ask criteria questions
  var criteria = selectCriteria();
  //gather the responses to generate a password
  if (selectLength > 7 && selectLength < 129) {
    
  }
  if (selectLowercase === "yes" || selectLowercase === "YES") {

  };
  if (selectUppercase === "yes" || selectUppercase === "YES") {
  
  };
  if (selectNumeric === "yes" || selectNumeric === "YES") {

  };
  if (selectSpecial === "yes" || selectSpecial === "YES") {

  };















// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);