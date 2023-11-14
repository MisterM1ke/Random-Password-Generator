// dom elements
const displayPassword = document.getElementById("password");
const generateBtn = document.getElementById("generateBtn");
const pwLength = document.getElementById("pwLength");
const digits = document.getElementById("digits");
const specialChar = document.getElementById("specialChar");
const uppercase = document.getElementById("uppercase");

// create list of special characters
const specialCharASCII = [[33,47],[58,64],[91,96],[123,126]]
let specialChars = [];
for (sChars of specialCharASCII){
    let [min, max] = sChars;
    while (min <= max){
        specialChars.push(min);
        min++;
    }
}
const specialCharList = String.fromCharCode(...specialChars)
console.log(specialChars)
console.log(specialCharList)