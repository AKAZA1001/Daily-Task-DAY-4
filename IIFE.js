//Print odd numbers in an array:
// Anonymous Function://

const printOddNumbers = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
};

printOddNumbers([1, 2, 3, 4, 5]);

//IIFE://

(function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
})([1, 2, 3, 4, 5]);
//////////////////////////////////////////////////////////////////////////////////////

// Convert all the strings to title caps in a string array:
// Anonymous Function:

const convertToTitleCaps = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
  }
  console.log(arr);
};

convertToTitleCaps(["hello", "world"]);

//IIFE:

(function (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
  }
  console.log(arr);
})(["hello", "world"]);

/////////////////////////////////////////////////////////////////////////////////////

// Sum of all numbers in an array:
// Anonymous Function:

const findSum = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
};

findSum([1, 2, 3, 4, 5]);

// IIFE

(function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
})([1, 2, 3, 4, 5]);

/////////////////////////////////////////////////////////////////////////////////////

// Return all the prime numbers in an array:
// Anonymous Function:

const findPrimeNumbers = function (arr) {
  const isPrime = function (num) {
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

  const primeNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      primeNumbers.push(arr[i]);
    }
  }
  console.log(primeNumbers);
};

findPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// IIFE:

(function (arr) {
  const isPrime = function (num) {
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

  const primeNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      primeNumbers.push(arr[i]);
    }
  }
  console.log(primeNumbers);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

/////////////////////////////////////////////////////////////////////////////////////

// Return all the palindromes in an array:
// Anonymous Function:

const findPalindromes = function (arr) {
  const isPalindrome = function (str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
  };

  const palindromes = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPalindrome(String(arr[i]))) {
      palindromes.push(arr[i]);
    }
  }
  console.log(palindromes);
};

findPalindromes([121, 123, 1331, 4564, 78987]);

//IIFE:

(function (arr) {
  const isPalindrome = function (str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
  };

  const palindromes = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPalindrome(String(arr[i]))) {
      palindromes.push(arr[i]);
    }
  }
  console.log(palindromes);
})([121, 123, 1331, 45654, 78987]);

/////////////////////////////////////////////////////////////////////////////////////

// Return median of two sorted arrays of the same size:
// Anonymous Function:
let findMedian = function (arr1, arr2) {
  let combined = [...arr1, ...arr2];
  let sorted = combined.sort((a, b) => a - b);
  let mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    let median = (sorted[mid - 1] + sorted[mid]) / 2;
    console.log(median);
  } else {
    console.log(sorted[mid]);
  }
};

findMedian([1, 2, 3], [4, 5, 6]);

// IIFE:
(function (arr1, arr2) {
  const combined = [...arr1, ...arr2];
  const sorted = combined.sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    const median = (sorted[mid - 1] + sorted[mid]) / 2;
    console.log(median);
  } else {
    console.log(sorted[mid]);
  }
})([1, 2, 3], [4, 5, 6]);

/////////////////////////////////////////////////////////////////////////////////////

// Remove duplicates from an array:
// Anonymous Function:

const removeDuplicates = function (arr) {
  const uniqueArr = [...new Set(arr)];
  console.log(uniqueArr);
};

removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

// IIFE:

(function (arr) {
  const uniqueArr = [...new Set(arr)];
  console.log(uniqueArr);
})([1, 2, 2, 3, 4, 4, 5]);

/////////////////////////////////////////////////////////////////////////////////////

// Rotate an array by k times:
// Anonymous Function:

const rotateArray = function (arr, k) {
  const rotations = k % arr.length;
  const rotated = [...arr.slice(rotations), ...arr.slice(0, rotations)];
  console.log(rotated);
};

rotateArray([1, 2, 3, 4, 5], 2);

// IIFE:
(function (arr, k) {
  const rotations = k % arr.length;
  const rotated = [...arr.slice(rotations), ...arr.slice(0, rotations)];
  console.log(rotated);
})([1, 2, 3, 4, 5], 2);

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
