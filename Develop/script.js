// Assignment code here
//let characters = "";
let passwordG = [];
let lower = [
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
let upper = [
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
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let special = [
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
let test1 = "false";
let test2 = "false";
let test3 = "false";
let test4 = "false";

let z = 0;

function generatePassword() {
  let characters = ""; // empty characters if generator is run again
  var length = prompt(
    // get the length
    "Please enter number of characters, theres a minimum of 8 and a max of 128",
    "8"
  );
  while (length < 8 || length > 128 || isNaN(length) === true) {
    //|| typeof length === "string"
    //insure length range
    var length = prompt(
      "invalid input: an integer between 8 and 128 is required",
      "8"
    );
  }
  console.log(isNaN(length));
  if (length >= 8 && length <= 128) {
    // confirm  wants length
    var confirmLength = window.confirm(
      "Are you sure you want a password length of" + length
    );

    if (confirmLength === true) {
      console.log(length + "confirmed");
    } else {
      var length = prompt(
        //if they dont confirm ask base question again
        "Please enter number of characters, theres a minimum of 8 and a max of 128",
        "8"
      );
      while (length < 8 || length > 128) {
        // insure length
        var length = prompt(
          "invalid input a minimum of 8 and a max of 128 is required",
          "8"
        );
      }
    }
  }

  let lowcharTypes = prompt(" do you want lowercase letters ?", "yes or no");
  //ask if they want lower case
  while (lowcharTypes !== "yes" && lowcharTypes !== "no") {
    //insure yes or no
    lowcharTypes = prompt(
      " error you must enter 'yes' or 'no' Do you want lower case numbers ",
      "yes or no"
    );
  }
  if (lowcharTypes === "yes") {
    var confirmLowChar = window.confirm(
      //confirm yes
      lowcharTypes + " I want lowercase letters included"
    );
    if (confirmLowChar == true) {
      console.log(lowcharTypes + "confirmed");
    }
  } else {
    var confirmLowChar = window.confirm(
      //confirm no
      lowcharTypes + " I do not want lowercase letters included"
    );
    if (confirmLowChar == true) {
      console.log(lowcharTypes + "confirmed");
    }
  }
  // uppercase
  let uppcharTypes = prompt(" do you want uppercase letters ?", "yes or no");
  while (uppcharTypes !== "yes" && uppcharTypes !== "no") {
    uppcharTypes = prompt(" do you want uppercase letters ?", "yes or no");
  }
  if (uppcharTypes === "yes") {
    var confirmuppChar = window.confirm(
      uppcharTypes + " I want uppercase letters included"
    );

    if (confirmuppChar == true) {
      console.log(uppcharTypes + "confirmed");
    }
  } else {
    var confirmuppChar = window.confirm(
      uppcharTypes + " I do not want uppercase letters included"
    );
    if (confirmuppChar == true) {
      console.log(uppcharTypes + "confirmed");
    }
  }
  //numbers
  let numbercharTypes = prompt(" do you want numbers ?", "yes or no");
  while (numbercharTypes !== "yes" && numbercharTypes !== "no") {
    numbercharTypes = prompt(" do you want numbers ?", "yes or no");
  }
  if (numbercharTypes === "yes") {
    var confirmnumberChar = window.confirm(
      numbercharTypes + " I want numbers included"
    );

    if (confirmnumberChar == true) {
      console.log(numbercharTypes + "confirmed");
    }
  } else {
    var confirmnumberChar = window.confirm(
      numbercharTypes + " I do not want numbers included"
    );

    if (confirmnumberChar == true) {
      console.log(numbercharTypes + "confirmed");
    }
  }
  // spechial
  let specialcharTypes = prompt(
    " do you want specialcase letters ?",
    "yes or no"
  );
  while (specialcharTypes !== "yes" && specialcharTypes !== "no") {
    specialcharTypes = prompt(
      " do you want specialcase letters ?",
      "yes or no"
    );
  }
  if (specialcharTypes === "yes") {
    var confirmspecialChar = window.confirm(
      specialcharTypes + " I want specialcase letters included"
    );

    if (confirmspecialChar == true) {
      console.log(specialcharTypes + "confirmed");
    }
  } else {
    var confirmspecialChar = window.confirm(
      specialcharTypes + " I do not want specialcase letters included"
    );

    if (confirmspecialChar == true) {
      console.log(specialcharTypes + "confirmed");
    }
  }

  if (
    // if they said no to all char types
    specialcharTypes === "no" &&
    lowcharTypes === "no" &&
    uppcharTypes === "no" &&
    numbercharTypes === "no"
  ) {
    var confirmDefaultChar = window.confirm(
      // call them moron and give them a default or reload page
      " Characters must be included, to go with default settings select ok, to start over select cancel"
    );

    if (confirmDefaultChar === true) {
      //default is low upper number
      lowcharTypes = "yes";
      uppcharTypes = "yes";
      numbercharTypes = "yes";
    } else {
      //refresh page
      location.reload;
    }
  }
  //end of prompts

  //add the approiate characters to characters string
  if (lowcharTypes === "yes") {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (uppcharTypes === "yes") {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (numbercharTypes === "yes") {
    characters += "0123456789";
  }
  if (specialcharTypes === "yes") {
    characters += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  }

  var charactersLength = characters.length;
  var goodToGo = false;

  while (goodToGo == false) {
    //insure all selected char types are included
    //then fill password arrray
    passwordG = [];

    for (var i = 0; i < length; i++) {
      passwordG.push(
        characters.charAt(Math.floor(Math.random() * charactersLength))
      ); //randomly fill password with characters
    }
    //the check to see if char type is presant
    if (lowcharTypes === "yes") {
      test1 = passwordG.some((el) => lower.includes(el));
    } else {
      //if its not supposed to be there make it pass goodtogo check
      test1 = true;
    }
    if (uppcharTypes === "yes") {
      test2 = passwordG.some((el) => upper.includes(el));
    } else {
      test2 = true;
    }
    if (numbercharTypes === "yes") {
      test3 = passwordG.some((el) => numbers.includes(el));
    } else {
      test3 = true;
    }
    if (specialcharTypes === "yes") {
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
} //end of the marathon function

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
// else {     ask again????
//   lowcharTypes = prompt(" do you want lowercase letters ?", "yes or no");
//   while (lowcharTypes !== "yes" && lowcharTypes !== "no") {
//     lowcharTypes = prompt(" do you want lowercase letters ?", "yes or no");
//   }
// else {
//   uppcharTypes = prompt(" do you want uppercase letters ?", "yes or no");
//   while (uppcharTypes !== "yes" && uppcharTypes !== "no") {
//     uppcharTypes = prompt(" do you want uppercase letters ?", "yes or no");
//   }
// }else {
//   uppcharTypes = prompt(" do you want uppercase letters ?", "yes or no");
//   while (uppcharTypes !== "yes" && uppcharTypes !== "no") {
//     uppcharTypes = prompt(" do you want uppercase letters ?", "yes or no");
//   }
// // }else {
//   numbercharTypes = prompt(" do you want numbers ?", "yes or no");
//   while (numbercharTypes !== "yes" && numbercharTypes !== "no") {
//     numbercharTypes = prompt(" do you want numbers ?", "yes or no");
//   } //stop
// }else {
//   numbercharTypes = prompt(" do you want numbers ?", "yes or no");
//   while (numbercharTypes !== "yes" && numbercharTypes !== "no") {
//     numbercharTypes = prompt(" do you want numbers ?", "yes or no");
//   }
// }else {
//   specialcharTypes = prompt(
//     " do you want specialcase letters ?",
//     "yes or no"
//   );
//   while (specialcharTypes !== "yes" && specialcharTypes !== "no") {
//     specialcharTypes = prompt(
//       " do you want specialcase letters ?",
//       "yes or no"
//     );
//   }
// }
// else {
//   specialcharTypes = prompt(
//     " do you want specialcase letters ?",
//     "yes or no"
//   );
//   while (specialcharTypes !== "yes" && specialcharTypes !== "no") {
//     specialcharTypes = prompt(
//       " do you want specialcase letters ?",
//       "yes or no"
//     );
//   }
// }
