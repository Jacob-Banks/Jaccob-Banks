// Assignment code here
let passwordG = [];
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
let lowercase = false;
let uppercase = false;
let numberscase = false;
let specialcase = false;
let test1 = false;
let test2 = false;
let test3 = false;
let test4 = false;
let z = 0;
let characters = "";

function getLength() {
  length = prompt(
    // get the length
    "Please enter number of characters, theres a minimum of 8 and a max of 128",
    "8"
  );
  while (length < 4 || length > 128 || isNaN(length) === true) {
    //|| typeof length === "string"
    //insure length range
    length = prompt(
      "invalid input: an integer between 8 and 128 is required",
      "8"
    );
  }
  console.log(isNaN(length) + " should be false");
  if (length >= 4 && length <= 128) {
    // confirm  wants length
    let confirmLength = window.confirm(
      "Are you sure you want a password length of" + length
    );

    if (confirmLength === true) {
      console.log(length + " confirmed");
    } else {
      length = prompt(
        //if they dont confirm ask base question again
        "Please enter number of characters, theres a minimum of 8 and a max of 128",
        "8"
      );
    }
    while (length < 4 || length > 128 || isNaN(length) === true) {
      // insure length
      length = prompt(
        "invalid input a minimum of 8 and a max of 128 is required",
        "8"
      );
    }
  }
}

function getCharType(type) {
  let charTypes = prompt(" do you want " + type + " characters ?", "yes or no");
  //ask if they want type case
  while (charTypes !== "yes" && charTypes !== "no") {
    //insure yes or no
    charTypes = prompt(
      " error you must enter 'yes' or 'no' Do you want " +
        type +
        " characters ?",
      "yes or no"
    );
  }
  if (charTypes === "yes") {
    var confirmChar = window.confirm(
      //confirm yes
      charTypes + " I want " + type + " characters included?"
    );
    if (confirmChar == true) {
      console.log(charTypes + "confirmed");
    } else charTypes = "no"; //switch value if cancel is clicked
    console.log("changed their mind");
  } else {
    var confirmChar = window.confirm(
      //confirm no
      charTypes + " I do not want " + type + " characters included?"
    );
    if (confirmChar == true) {
      console.log(charTypes + "confirmed");
    } else charTypes = "yes";
    console.log("changed their mind");
  }

  // add type of characters
  if (type === "lower" && charTypes === "yes") {
    characters += "abcdefghijklmnopqrstuvwxyz";
    lowercase = true;
  }
  if (type === "upper" && charTypes === "yes") {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    uppercase = true;
  }
  if (type === "numbered" && charTypes === "yes") {
    characters += "0123456789";
    numberscase = true;
  }
  if (type === "specialcase" && charTypes === "yes") {
    characters += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    specialcase = true;
  }
}

function insureChar() {
  if (characters === "") {
    var confirmDefaultChar = window.confirm(
      // call them a moron and give them a default or reload page
      " Characters must be included, to go with default settings select ok, to start over select cancel"
    );

    if (confirmDefaultChar === true) {
      //default is low upper number
      characters =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      lowercase = true;
      uppercase = true;
      numberscase = true;
    } else {
      //refresh page
      location.reload;
    }
  }
}
function generatePassword() {
  //reset values if genertor is run agaian
  characters = ""; // empty characters if generator is run again
  length = 0;
  lowercase = false;
  uppercase = false;
  numberscase = false;
  specialcase = false;

  getLength();
  getCharType("lower");
  getCharType("upper");
  getCharType("numbered");
  getCharType("specialcase");

  // if they said no to all char types
  insureChar();
  //end of prompts

  var charactersLength = characters.length;
  var goodToGo = false;

  while (goodToGo == false) {
    //insure all selected char types are included
    //then fill password arrray
    passwordG = [];

    for (i = 0; i < length; i++) {
      passwordG.push(
        characters.charAt(Math.floor(Math.random() * charactersLength))
      ); //randomly fill password with characters
    }
    //the check to see if char type is presant
    if (lowercase === true) {
      test1 = passwordG.some((el) => lower.includes(el));
    } else {
      //if its not supposed to be there make it pass goodtogo check
      test1 = true;
    }
    if (uppercase === true) {
      test2 = passwordG.some((el) => upper.includes(el));
    } else {
      test2 = true;
    }
    if (numberscase === true) {
      test3 = passwordG.some((el) => numbers.includes(el));
    } else {
      test3 = true;
    }
    if (specialcase === true) {
      test4 = passwordG.some((el) => special.includes(el));
    } else {
      test4 = true;
    }

    z = z + 1; // counter for how many attemps untill good to go passed

    // if all the selected char types are present then move on to displaying passord
    if (test1 === true && test2 === true && test3 === true && test4 === true) {
      goodToGo = true;
    }
  }
  console.log(characters);
  console.log("this ran  " + z + "  times");
  return passwordG.join("");
} //end of the generatepassword function

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
