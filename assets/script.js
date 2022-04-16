// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// character types
// lowercase, uppercase, numeric, special characters
// Setting up an array for all the possible letters, numbers, and special characters
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];


// this is the generatePassword function that's called when you click the button
function generatePassword() {
  // ask criteria questions
  window.alert("Answer the following questions to generate your secure password.");
  var selectLength = window.prompt("How long do you want your password to be? Must be at least 8 and no more than 128.");
  // alerting the user to meet the criteria if they didn't already
  if (selectLength < 8 || selectLength > 128) {
    alert("Please select a number between 8 and 128!");
    var selectLength = window.prompt("How long do you want your password to be? Must be at least 8 and no more than 128.");
  }
  var selectLowercase = window.prompt("Include lowercase letters? Enter YES or NO");
  var selectUppercase = window.prompt("Include uppercase letters? Enter YES or NO");
  var selectNumeric = window.prompt("Include numbers? Enter YES or NO");
  var selectSpecial = window.prompt("Include special characters? Enter YES or NO");
  // alerting the user to meet the criteria if they didn't already
  if (selectLowercase != "yes" && selectLowercase != "YES"
  && selectUppercase != "yes" && selectUppercase != "YES"
  && selectNumeric != "yes" && selectUppercase != "YES"
  && selectSpecial != "yes" && selectSpecial != "YES") {
    alert("Please select at least one type of character!");
    var selectLowercase = window.prompt("Include lowercase letters? Enter YES or NO");
    var selectUppercase = window.prompt("Include uppercase letters? Enter YES or NO");
    var selectNumeric = window.prompt("Include numbers? Enter YES or NO");
    var selectSpecial = window.prompt("Include special characters? Enter YES or NO");
  }
  console.log(
    "Length: " + selectLength + " -- " 
    + "Lowercase: " + selectLowercase + " -- " 
    + "Uppercase: " + selectUppercase + " -- " 
    + "Numbers: " + selectNumeric + " -- "
    + "Special: " + selectSpecial);
  var combinationBuild = [];
  var completedPassword = "";
  // gather the responses to generate a password
  if (selectLowercase === "yes" || selectLowercase === "YES") {
    for (var i of lower)
      combinationBuild.push(i);
  };
  if (selectUppercase === "yes" || selectUppercase === "YES") {
    for (var i of upper)
    combinationBuild.push(i);
  };
  if (selectNumeric === "yes" || selectNumeric === "YES") {
    for (var i of number)
      combinationBuild.push(i);
  };
  if (selectSpecial === "yes" || selectSpecial === "YES") {
    for (var i of special)
      combinationBuild.push(i);
  }

  // checking to make sure it's capturing the right character types
  console.log(combinationBuild);

  // returning a completed password
  for (var i = 0; i < selectLength; i++) {
    completedPassword += combinationBuild[Math.floor(Math.random() * combinationBuild.length)];
  }
  console.log(completedPassword);
  return completedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);