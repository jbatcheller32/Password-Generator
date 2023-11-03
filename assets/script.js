// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var length = prompt("Choose password length: must be between 8-128 characters");
  var specialChars = prompt('Would you like to include special characters? "y" "n" ');
  var upperChars = prompt('Would you like in include uppercase characters? "y" "n" ');
  var lowerChars = prompt('Would you like to include lowercase characters? "y" "n" ');
  var numbers = prompt('Would you like to include numbers? "y" "n" ');





// Random generator, I think this works? 

var passLength = " "; 

for (var i = 0; )

function randomLower (){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

} 

function randomUpper (){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

} 

function randomNumber () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSpecial (){
  var specialChars = '!@#$%^&*()';
  return String.fromCharCode[Math.floor(Math.random() * specialChars.length)]; 
}


};

generatePassword();









// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








