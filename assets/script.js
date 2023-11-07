// Assignment Code
var generateBtn = document.querySelector("#generate");

var symbol = "!@#$%^&*()";
var numbers = "0123456789";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefhijklmnopqrstuvwxyz";







//Main function 





function generatePassword() {
  var password = []
  var characters = "";

  var length = parseInt(prompt("Choose password length: must be between 8-128 characters"));

  if (length > 128 || length < 8) {
    alert("wrong")
    return null;
  }


  var specialChars = confirm('Would you like to include special characters?');
  var upperChars = confirm('Would you like in include uppercase characters?');
  var lowerChars = confirm('Would you like to include lowercase characters?');
  var numbersChars= confirm('Would you like to include numbers?');



  // Special characters  yes or no

  if (specialChars === true) {
    characters = characters.concat(symbol);

  }

  //Uppercase characters yes or no

  if (upperChars === true) {
    characters = characters.concat(upper);

  }


  if (lowerChars === true) {
    characters = characters.concat(lower);


  }

  //number yes no

  if (numbersChars === true) {
    characters = characters.concat(numbers);


  }
  

  var allRandomChars = characters.split("")
console.log(allRandomChars);
  //Random length of the password

  for (let i = 0; i < length; i++) {
    var randomIndex =  Math.floor(Math.random() * allRandomChars.length)
    var randomChar = allRandomChars[randomIndex]

    password.push(randomChar)
    
  }
 
  return password.join("")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
