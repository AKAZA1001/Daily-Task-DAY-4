// Print odd numbers in an array:

const printOddNumbers = (arr) => {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

printOddNumbers([1, 2, 3, 4, 5]);

///////////////////////////////////////////////////////////////////////////////////////////////

// Convert all the strings to title caps in a string array:
const convertToTitleCaps = (arr) => {
  const titleCaps = arr.map((str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
  console.log(titleCaps);
};

convertToTitleCaps(["hello", "world"]);

///////////////////////////////////////////////////////////////////////////////////////////////

// Sum of all numbers in an array:
const findSum = (arr) => {
  const sum = arr.reduce((total, num) => {
    return total + num;
  }, 0);
  console.log(sum);
};

findSum([1, 2, 3, 4, 5]);

///////////////////////////////////////////////////////////////////////////////////////////////

// Return all the prime numbers in an array:
const findPrimeNumbers = (arr) => {
  const isPrime = (num) => {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const primeNumbers = arr.filter((num) => isPrime(num));
  console.log(primeNumbers);
};

findPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

///////////////////////////////////////////////////////////////////////////////////////////////

// Return all the palindromes in an array:

const findPalindromes = (arr) => {
  const isPalindrome = (str) => {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
  };

  const palindromes = arr.filter((num) => isPalindrome(String(num)));
  console.log(palindromes);
};

findPalindromes([121, 123, 1331, 45654, 78987]);
