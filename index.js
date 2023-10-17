function hasTargetSum(array, target) {
  //  empty set to store seen numbers.
  const seenNumbers = new Set();

  // Iterate through the array.
  for (let num of array) {
    //  diffbwn  target and current no.
    const difference = target - num;

    // Check if the diff exists in the seen no.s
    if (seenNumbers.has(difference)) {
      return true; // Found target
    }

    // If not found, add current no to seen no.s
    seenNumbers.add(num);
  }

  return false; // No pair found that adds up to target
}

// Big O time complexity is O(n), where n is the number of elements in the array.

// Custom tests
console.log("Expecting: true");
console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

console.log("");

console.log("Expecting: true");
console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

console.log("");

console.log("Expecting: false");
console.log("=>", hasTargetSum([1, 2, 5], 4));

module.exports = hasTargetSum;
