// 1. Write a function that takes an array of numbers and returns the largest number in the array.
function largestNumber(array) {
  return Math.max(...array);
}

console.log(largestNumber([4, 8, 15, 16, 23, 42]));
console.log(largestNumber([14, 8, 25, 66, 23, 42]));
// 2. Write a function that takes a string and returns the number of vowels in the string.
function numberOfVowels(string) {
  let countVowels = 0;
  for (let i = 0; i < string.length; i++) {
    let isVowel = string[i];
    if (
      isVowel === "a" ||
      isVowel === "e" ||
      isVowel === "i" ||
      isVowel === "o" ||
      isVowel === "u"
    ) {
      countVowels++;
    }
  }
  return countVowels;
}

console.log(numberOfVowels("javascript"));
console.log(numberOfVowels("I went to the cinema last weekend"));

// 3. Write a function that takes two arrays of numbers and returns a new array with all the elements from both arrays, without any duplicates.
function combineArrays(array1, array2) {
  const arrayCombine = array1.concat(array2);
  const arrayNoDuplicate = [...new Set(arrayCombine)];

  return arrayNoDuplicate;

}
const arr1 = [23,4,5,6,17,9];
const arr2= [2,15,4,7,9,12,17];
console.log(combineArrays(arr1,arr2))

// 4. Write a function that takes an array of numbers and returns a new array with all the odd numbers in the original array.
function oddNumbers(array) {
const oddArray = array.filter(function(number){
    return number % 2 !== 0
  });
  return oddArray;
}

console.log(oddNumbers([1,2,3,4,5]))
console.log(oddNumbers([22,19,15,4,36,8,29,54]))

// 5. Write a function that takes an array of numbers and returns an array with all the even numbers in the original array.
function evenNumbers(array) {
  const evenNumbers = array.filter(function(number){
    return number % 2 == 0;
  })
  return evenNumbers
}
console.log(evenNumbers([1,2,3,4,5]))
console.log(evenNumbers([22,19,15,4,36,8,29,54]))

// 6. Write a function that takes two strings and returns a string that contains the characters that appear in both strings.

function commonCharacters(string1, string2) {
  let commonChar = '';
  for(let i= 0; i<string1.length; i++){
    if(commonChar.indexOf(string1[i])=== -1){
      if(string2.indexOf(string1[i]) !== -1){
        commonChar += string1[i];
      }
    }
  }
  return commonChar;
}
console.log(commonCharacters('asflkjasfdlk', 'afdlkeope'))

// 7. Write a function that takes an object and returns a new object with all the keys and values reversed (BONUS)
function reverseObject(object) {
 return Object.fromEntries(
    Object
      .entries(object)
      .map(([key,value])=>[value,key])
  )
}

console.log(reverseObject({x:1, y:2, z:3}))

/* Bonuses */

// Palindrome checker: Write a program that takes in a string and returns true if the string is a palindrome (reads the same forwards and backwards).
function palindrome(string) {
  let palindrome = string.split("").reverse().join("");
  if(palindrome === string){
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("racecar"));
console.log(palindrome("hello"));
//Word count: Write a program that takes in a string and returns the number of words in the string.
function wordCount(string) {
  const strArray = string.split(" ");
  return strArray.length
}

console.log(wordCount("Hi my name is Hector"));
// Character count: Write a program that takes in a string and returns the frequency count of each character in the string.
function characterCount(string) {
  let characterList = {};
  const strArray = string.split("").sort();
  console.log(strArray);

  for (const char of strArray){
    if (!characterList[char]){
      characterList[char]=1
    }else{
    characterList[char]++
  }
}
return characterList;
}
console.log(characterCount("ffaaaabbbbcccddeef"))
// Reverse string: Write a program that takes in a string and returns the string reversed.
function reverseString(string) {
  return string.split("").reverse().join("");
}
console.log(reverseString("Hello my name is Hector"));
// Replace vowels: Write a program that takes in a string and replaces all vowels with a specified character.
function replaceVowels(string, character) {
  let text = string;
  let result = text.replace(/a|e|i|o|u/gi,`${character}`);
  return result;
}

console.log(replaceVowels("Mr Honda has a little ginger cat","z"));
// Longest word: Write a program that takes in a string and returns the longest word in the string.
function longestWord(string) {let longest = "";
  let arrString = string.split(" ");
  
  arrString.forEach((item)=>{
    if(item.length > longest.length){
      longest = item;
    }
  })
  return longest;
}

console.log(longestWord("I went to the mount Fuji with my friend who had climbed the Kilimanjaro"))
// Text analyzer: Write a program that takes in a string and returns the number of characters, words, and sentences in the string.
function textAnalyzer(string) {}
// Letter change: Write a program that takes in a string and changes each letter to the next letter in the alphabet.
function letterChange(string) {}
