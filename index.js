function backwardsWord(word) {
  const wordBreakUp = word.split("");
  const backwardsSplit = wordBreakUp.reverse();
  const reverseWord = backwardsSplit.join("");
  return reverseWord
};

function isPalindrome(word) {
  // Write your algorithm here
  const reverseWord = backwardsWord(word)
    if( word === reverseWord){
      return true;
    }else {
      return false;
    }
  }

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/
// my thought process is that the function would need to compare
// first and last letter and then second letter to second to last
// letter. This got me googling ways to break down strings into pieces
// my thought process from that is to use charAt

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
