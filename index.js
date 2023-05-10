/* JavaScript Challenges */

console.log("<----Challenge 1: Reverse a String---->");
function reverseString(str) {
    return str
        .split('')
        .reverse()
        .join('');
    /*
    console.log("<----Method2---->");
    return str.split('').reduce((revString, char) => char + revString, '');

    console.log("<----Method3---->");
    var revString = '';
    str.split('').forEach(char => revString = char + revString
    );
    return revString;

    console.log("<----Method4---->");
    var revString = '';
    for(let char of str) {
        revString = char + revString;
    }
    return revString;

    console.log("<----Method5---->");
    const strArr = str.split('');
    strArr.reverse();
    strArr.join('');

    console.log("<----Method6---->");
    var revString = '';
    for(let i = str.length - 1; i >= 0; i--) {
        revString = revString + str[i];
    }
    return revString;
    */
}
console.log(reverseString("hello"));

/* Challenge 2: Validate a Palindrome */

function isPalindrome(str) {
    const revString = str.split('').reverse().join('');
    if (str == revString) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome("racecar"));