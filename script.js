// Assignment code here

const lower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const upper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const special = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
let length = 0;
let characters = "";

function getLength() {
  // get the length
  length =
    //toallow decimals monintairaly
    window.prompt(
      "Please enter number of characters, theres a minimum of 8 and a max of 128",
      "8"
    );

  while (length < 8 || length > 128) {
    //insure length range
    length = prompt(
      "invalid input: an integer between 8 and 128 is required",
      "8"
    );
  }

  if (length >= 8 && length <= 128) {
    // confirm  wants length
    let confirmLength = window.confirm(
      "Are you sure you want a password length of " + length
    );

    if (confirmLength === true) {
      console.log(length + " confirmed");
    } else {
      length = prompt(
        "Please enter number of characters, theres a minimum of 8 and a max of 128",
        "8"
      );
    }
    while (length < 8 || length > 128) {
      // insure length
      length = prompt(
        "invalid input a minimum of 8 and a max of 128 is required",
        "8"
      ); //  no more chances to change
    }
  }
}

function getLowerCharType() {
  let charTypes = prompt(" do you want lower case characters ?", "yes or no");
  //ask if they want type case
  while (charTypes !== "yes" && charTypes !== "no") {
    //insure yes or no
    charTypes = prompt(
      " error you must enter 'yes' or 'no' Do you want lower case characters ?",
      "yes or no"
    );
  }
  if (charTypes === "yes") {
    var confirmChar = window.confirm(
      //confirm yes
      charTypes + " I want lowercase characters included?"
    );
    if (confirmChar === true) {
      console.log(charTypes + "confirmed");
      charTypes = "yes";
    } else {
      charTypes = "no"; //switch value if cancel is clicked
      console.log("changed their mind");
    }
  } else {
    //if chartype === no
    var confirmChar = window.confirm(
      //confirm no
      charTypes + " I do not want lowercase characters included?"
    );
    if (confirmChar == true) {
      console.log(charTypes + "confirmed");
    } else {
      charTypes = "yes";
      console.log("changed their mind");
    }
  }

  // add type of characters
  if (type === "lowercase" && charTypes === "yes") {
    characters += "abcdefghijklmnopqrstuvwxyz";
    lowers = true;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
