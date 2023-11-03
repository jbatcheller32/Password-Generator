// Assignment Code
var generateBtn = document.querySelector("#generate");

var characters = {
  special: " ",
  numbers: " ",
  upper: " ",
  lower: " "
}

var count = 0;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button

// Still confused on the "writePassword", is that a callback?

generateBtn.addEventListener("click", writePassword);


//Main function 

function generatePassword() {

  var length = prompt("Choose password length: must be between 8-128 characters");
  var specialChars = confirm('Would you like to include special characters?');
  var upperChars = confirm('Would you like in include uppercase characters?');
  var lowerChars = confirm('Would you like to include lowercase characters? "y" "n" ');
  var numbers = confirm('Would you like to include numbers? "y" "n" ');


// Special characters  yes or no

if(specialChars === true) {
  characters.special += functionArray[3];
  count++;
} else {
  return; 
}

//Uppercase characters yes or no

if (upperChars === true) {
  characters.upper += functionArray[1];
  count++;
} else {
  return;
}

if (lowerChars === true) {
  characters.lower += functionArray[0];

} else {
  return;
}

if (numbers === true) {
  characters.numbers += functionArray[2];

} else {
  return;
}

//Random lenght of the password

var passLength = " "; 
for (var i = 8; (parseInt(length) - count); i++) {
  var randomNumber = Math.floor(Math.random() * 4); 

  passLength += randomNumber;

  return passLength;

}







// Random generators, I think this works?  

var functionArray = [

  function randomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

  },

  function randomUpper() {
   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

  },

  function randomNumber() {
   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  },

  function randomSpecial() {
    var symbol = '!@#$%^&*()';
    return String.fromCharCode[Math.floor(Math.random() * symbol.length)];
  }

];


}



writePassword();
generatePassword();














