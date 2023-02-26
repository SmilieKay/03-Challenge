// Assignment Code
var howLong = 8;
var answers = [];
var number = ["1","2","3","4","5","6","7","8","9","0"];
var special = ["!","@","#","$","%","^","&","*","-","+","=","?","/","<",">","~"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
  var confirm = questions(); // is a boolean either true or false
  var passwordText = document.querySelector("#password");
  if(confirm){
    var password2 = generatePassword();
    passwordText.value = password2;}
  else { passwordText.value = "";}
}
  
  

// password starts as empty i starts at 0 and increases by one, as long as i is lower then the amount of howLong the for loop will run. 
// Math.random gives a random number including decimals and is multiplied by the length of answers then Math.floor makes that number a whole number. That is returned as the value of password which then becomes the value of password2

function generatePassword() {
var password = "";
for(var i = 0; i < howLong; i++ ){
    var random = Math.floor(Math.random() * answers.length); 
    password = password + answers[random];
} return password;
}
// prompt will display the question with a box for the user to type their into. isNaN determines if the users reply is a number or a string if it is a number it will return true if it is a string it will return false. The if portion of the function determines if the user supplied a number less then 128 and longer then 8 characters and supplied a number. If they did not they will be prompted to try again with alert.
function questions(){
  answers = []; //resets answers to be empty each time it is used 
  howLong = prompt("How many characters do you want in your password? (Choose between 8 -128)");
  if(isNaN(howLong) || howLong > 128 || howLong < 8 ) {
    alert("The length needs to be between 8 and 128 digits. Please try again.");
    return false; //tells the function to stop running if there is a false.
  }
   if (confirm("Would you like special characters in your password?"))/* a message with a OK or Cancel button */
   {answers = answers.concat(special);}//if the user selects OK then .concat combines the special array with answers
   if (confirm("Would you like numbers in your password?"))
   {answers = answers.concat(number);}
   if (confirm("Would you like uppercase letters in your password?"))
   {answers = answers.concat(upperCase);}
   if (confirm("Would you like lowercase letters in your password?"))
   {answers = answers.concat(lowerCase);}
   return true; // ends the function 
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

