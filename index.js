function reverseString(word) {
  // Write your algorithm here
  const arrayWord = word.split ("");
  const reversearrayWord = arrayWord.reverse();
  const reverseWord = reversearrayWord.join("");
  return reverseWord;
  return word;
  }
  
function isPalindrome(word){
  const reverseWord= reverseString (word);
    if (word ===reverseString(word)){

      return true;
    } else {
      return false;
    }
  }

/* 
  Add your pseudocode here
  reverse input string
  return true if input equals reversed string
  return false if string isn't equal reversed string
*/

/*
  Add written explanation of your solution here
    I wrote a function that takes in an input string returns true if the reversed string matches 
    the input string and false if otherwise.
      Test Cases
    Example : wow === wow // true
              mum === mum//true
              fool === loof//false
  */

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
