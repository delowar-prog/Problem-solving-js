// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function addTwoNumbersSortedArray(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const currentSum = arr[left] + arr[right];
      if (currentSum === target) {
        return [left, right];
      } else if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
    return [];
  }
  
  // Example usage:
  const array = [1, 3, 5, 7, 9, 11, 13];
  const target = 12;
  const result = addTwoNumbersSortedArray(array, target);
  console.log(result); //index[1,6] element[3+13=16]
  
  
  
  
  