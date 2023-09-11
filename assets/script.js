// create the strings that I can use to make passwords
function generatePassword() {
    var lowerCaseSet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var upperCaseSet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var numSet = ["0","1","2","3","4","5","6","7","8","9"];
    var specialCharSet = ["!","@","#","$","%","^","&","*","+","?",">","<","~","=","|","_","(",")","-",":",";","'","[","]","{","}"];
    var selectedArray = [];

    var passwordLength = getPasswordLength();

    var charTypeSelected = false;
    // this will be the conditional that makes the user select at least on character type
    while (charTypeSelected == false) {
      var lowerCase = getChoice("Lowercase");
      var upperCase = getChoice("Uppercase");
      var numCharacters = getChoice("Numbers");
      var spCharacters = getChoice("Special");
      if ((lowerCase)||(upperCase)||(numCharacters)||(spCharacters)) {
        charTypeSelected = true;

      } else { 
        window.alert("You must select at least one charater type.")
      }
    } 
  //collect user choices and add them to the empty array
  if (lowerCase){
    selectedArray = selectedArray.concat(lowerCaseSet);
  }
  if (upperCase){
    selectedArray = selectedArray.concat(upperCaseSet);
  }
  if (numCharacters) {
  selectedArray = selectedArray.concat(numSet);
  }
if (spCharacters){
  selectedArray = selectedArray.concat(specialCharSet);
  }
var passwordString = "";
// this loop will use the created array to randomly select charaters from it, and put them into a new string
// tutoring: I want a better understanding of this i variable. 
for (var i = 0; i < passwordLength; i++) {
  passwordString += selectedArray[Math.floor(Math.random() * (selectedArray.length))];
}
return passwordString;
}
function getPasswordLength() {
  var userChoice = 0;
  while ((userChoice < 8) || (userChoice > 128)) {
    userChoice = parseInt(window.prompt("Enter the number of charaters between 8 and 128"));
    // verifies that user entered a number not a letter
    if (isNaN(userChoice)) {
      // reset the user choice loop if they entered anything but a number
      userChoice = 0;
    }
  }
  return userChoice;
}
function getChoice(currentOption) {
    var userChoice = "a",
      messagePrompt = "";
    var messagePrompt = ("would you like " .concat(currentOption))
    messagePrompt = messagePrompt.concat(" characters (y/n)?")
    while (userChoice = "a") {
      userChoice = (window.prompt(messagePrompt));
      if (userChoice === "y") {
        return true;
      } else if (userChoice == "n"){
        return false;
      }
      }
}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
