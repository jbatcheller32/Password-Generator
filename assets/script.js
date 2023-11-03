// Assignment Code
var generateBtn = document.querySelector("#generate");


var symbol = '!@#$%^&*()'.split;
var special = " ";
var numbers = " ";
var upper = " ";
var lower = " ";
var count = 0;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




//Main function 


generateBtn.addEventListener("click", writePassword);


function generatePassword() {

  var length = prompt("Choose password length: must be between 8-128 characters");
  var specialChars = confirm('Would you like to include special characters?');
  var upperChars = confirm('Would you like in include uppercase characters?');
  var lowerChars = confirm('Would you like to include lowercase characters?');
  var numbers = confirm('Would you like to include numbers?');


  // Random generators 

  var randomLower = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

  var randomUpper = String.fromCharCode(Math.floor(Math.random() * 26) + 65);


  var randomNumber = String.fromCharCode(Math.floor(Math.random() * 10) + 48);


  var randomSpecial = String.fromCharCode[Math.floor(Math.random() * symbol.length)];







  // Special characters  yes or no

  if (specialChars === true) {
    special = randomSpecial;
    count++;
  } else {
    return;
  }

  //Uppercase characters yes or no

  if (upperChars === true) {
    upper = randomUpper;
    count++;
  }

  if (lowerChars === true) {
    lower = randomLower;
    count++;

  }

  if (numbers === true) {
    numbers = randomNumber;
    count++;

  }

  //Random lenght of the password

  var passLength = " ";
  for (var i = 8; (parseInt(length) - count); i++) {
    var randomNumber = Math.floor(Math.random() * 4);

    passLength += randomNumber;


    passLength += lower;
    passLength += numbers;
    passLength += special;
    passLength += upper;

    return passLength;

  }
}

































