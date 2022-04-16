// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// character types
// lowercase, uppercase, numeric, special characters
function selectCriteria() {
  window.alert("Select password criteria");
  var selectLength = window.prompt("How long do you want your password to be?");
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
// use this function to ask initial criteria questions
function generatePassword() {
  var criteria = selectCriteria();
//   function logResponses() {
//     if (selectLength === "yes" || selectLength === "YES")
//   }
}

// use this function to meet acceptance criteria: must be between 8 and 128 characters















// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);