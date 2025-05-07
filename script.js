function firstNonRepeatedChar(str) {
  const charCount = {};

  // First pass: count each character
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Second pass: find the first character with a count of 1
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}

// Example usage:
console.log(firstNonRepeatedChar('aabbcdd')); // Output: 'c'
console.log(firstNonRepeatedChar('aabbcc'));  // Output: null

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
