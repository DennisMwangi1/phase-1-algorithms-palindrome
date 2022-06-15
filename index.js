function isPalindrome(word) {
  // Write your algorithm here
  
  for (let i = 0;i<word.length ; i++) {
    if (word[i]==word[word.length-i-1]) {
    return true
    }else{
      return false
    }
  }
}

/* 
  use a for loop to iterate through the characters of the word
  use an if statement to compare the first character and the last character of the word as the iteration happens
  return true if they match
  returns false if they dont

*/

/*
  When a word is passed as an arguement to the function isPalindrome,,a for loop is initiated on the word.An if statement compares the first and last characters of the word as it is being iterated through and returns true if the letters match and false if the letters dont match
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
