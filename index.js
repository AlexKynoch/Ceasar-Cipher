function ceasarCipher(str, num) {

    num = document.getElementById("shift").value;
    str = document.getElementById("message").value;

    num = num % 26; // remainder of 26 if shift number entered is greater than 26 (ie  27 = -1)
    let lowerCaseString = str.toLowerCase(); //makes lowercase
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''); // array with every letter in alphabet
    let newString = ("") //make new string empty

    for (let i = 0; i < lowerCaseString.length; i++) { //loop through string
        let currentLetter = lowerCaseString[i] // find current letter
        if (currentLetter === ' ') {  // if current letter is space
            newString += currentLetter; //add it to the string without changing it
            continue; // 
        }
        let currentIndex = alphabet.indexOf(currentLetter); //where current letter is in array
        let newIndex = currentIndex + num; // shift current letter by num passed in = newIndex

        if (newIndex > 25) newIndex = newIndex - 26; //z= newIndex 25 if greater than 25 - 26 (lenth of alphabet array)
        if (newIndex < 0) newIndex = 26 + newIndex; // if newIndex less than 0 then will equal 26 + new Index (to end of array)
        if (str[i] === str[i].toUpperCase()) { //if original str passed character is upppercase 
            newString += alphabet[newIndex].toUpperCase(); // make that character to uppercase 

        }
        else // if not uppercase letter

            newString += alphabet[newIndex];  //this is newly shifted letter 
        console.log(newString)

    }
    document.getElementById("answer").value = newString;
    // return newString;

}

// function decode() {
//     str = document.getElementById("message").value;
//     let num = 0;
//     let newString = "";
//     for (let i = 0; i < str.length; i++) {
//         num = str.toUpperCase().charCodeAt(i);
//         if (num >= 65) {
//             num += 13;
//         }
//         if (num < 90) {
//             num -= 26;
//         }
//         newString += String.fromCharCode(num);
//         // 
//     }
//     console.log(newString)
//     document.getElementById("answer").value = newString;
//     // document.write(newString)
//     return newString;
// }

function decode(str, num) {

    num = document.getElementById("shift").value;
    str = document.getElementById("message").value;

    num = num % 26; // remainder of 26 if shift number entered is greater than 26 (ie  27 = -1)
    let lowerCaseString = str.toLowerCase(); //makes lowercase
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''); // array with every letter in alphabet
    let newString = ("") //make new string empty

    for (let i = 0; i < lowerCaseString.length; i++) { //loop through string
        let currentLetter = lowerCaseString[i] // find current letter
        if (currentLetter === ' ') {  // if current letter is space
            newString += currentLetter; //add it to the string without changing it
            continue; // 
        }
        let currentIndex = alphabet.indexOf(currentLetter); //where current letter is in array
        let newIndex = currentIndex - num; // shift current letter by num passed in = newIndex

        if (newIndex > 25) newIndex = newIndex - 26; //z= newIndex 25 if greater than 25 - 26 (lenth of alphabet array)
        if (newIndex < 0) newIndex = 26 + newIndex; // if newIndex less than 0 then will equal 26 + new Index (to end of array)
        if (str[i] === str[i].toUpperCase()) { //if original str passed character is upppercase 
            newString += alphabet[newIndex].toUpperCase(); // make that character to uppercase 

        }
        else // if not uppercase letter

            newString += alphabet[newIndex];  //this is newly shifted letter 
        console.log(newString)

    }
    document.getElementById("answer").value = newString;
    // return newString;

}