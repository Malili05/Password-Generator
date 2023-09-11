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
