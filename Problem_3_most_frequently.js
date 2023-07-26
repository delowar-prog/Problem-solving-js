// Write a JavaScript program to find the most frequent element in an array and return it. 

const mostFrequentElement=arr=> {
  const frequencyCount = {}; //empty object to store frequencyCount element

  for(let element of arr){
    //check exist or not the element in frequencyCount object
    if(frequencyCount[element]){
      frequencyCount[element]+=1;
    }else{
      frequencyCount[element]=1;
    }
  };
console.log(frequencyCount)
  // Find the element with the highest frequency
  let mostFrequentElement;
  let mostFrequency = 0;

  for (let key in frequencyCount) {
    if (frequencyCount[key] > mostFrequency) {
      mostFrequentElement = key;
      highestFrequency = frequencyCount[key];
    }
  }

  return mostFrequentElement;
}

// Example usage:
const array = [1, 2, 3, 2, 2, 4, 6, 3, 6, 2];
const mostFrequent = mostFrequentElement(array);
console.log("The most frequent element is:", mostFrequent);