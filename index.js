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

////////////////////////////////////////////////////////////
console.log("<----Challenge 2: Validate a Palindrome---->");
function isPalindrome(str) {
    const revString = str.split('').reverse().join('');
    if (str == revString) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome("racecar"));



////////////////////////////////////////////////////////////
console.log("<----Challenge 3: Integer Reversal---->");
function reverseInt(val) {
    let valStr = val.toString().split('').reverse().join('');
    return parseInt(valStr) * Math.sign(val);
}
console.log(reverseInt(-8084));



///////////////////////////////////////////////////////////
console.log("<----Challenge 4: Capitalize First Letters---->");
function strCaps(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word[0].toUpperCase() + word.substring(1))
        .join(' ');

    /*
    const strArr = str.toLowerCase().split(' ');
    for(let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].substring(0,1).toUpperCase() +
        strArr[i].substring(1);
    }
    return strArr.join(' '); */
}
console.log(strCaps("i love javascript"));



//////////////////////////////////////////////////////////
console.log("<----Challenge 5: Find the Max Character---->");
function maxChar(str) {
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';

    str.split('').forEach(function(char) {
        if(charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    });
    for(let char in charMap) {
        //debugger - run file on terminal (repl annd c)
        if(charMap[char] > maxNum) {
            maxNum = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}
console.log(maxChar("Character"));



/////////////////////////////////////////////////////////
console.log("<----Challenge 6: FizzBuzz---->");
function fizzBuzzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log('FizzBuzz')
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz')
        } else {
            console.log(i);
        }
    }
}

fizzBuzzz();