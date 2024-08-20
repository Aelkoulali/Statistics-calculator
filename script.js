// Add getMean function: The mean is the average value of all numbers in a list
const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;

// Add getMedian function: The median is the midpoint of a set of numbers
const getMedian = (array) => {
    const sorted = array.sort((a,b) => { return a - b;});
    // check if the length of array is even, find the middle two numbers, calculate their mean & return the result.
    return !(array.length % 2) ? getMean([sorted[sorted.length / 2 - 1], sorted[sorted.length / 2]])
                               : sorted[Math.floor(sorted.length / 2)] // if the length of array is odd, return the middle number

}

// Add getMode function
const getMode = (array) => {
    const counts = {};
    array.forEach(el => counts[el] = (counts[el] || 0) + 1)
    if(new Set(Object.values(counts)).size === 1) {
        return null;
    }
    const highest = Object.keys(counts).sort((a,b) => counts[b] - counts[a])[0]; // [0] access the first element in the array
    const mode = Object.keys(counts).filter((el) => counts[el] === counts[highest]);
    return mode.join(", ");
}

// Add getRange function : The difference between the largest and smallest numbers in the list
const getRange = (array) => {
    return Math.max(...array) - Math.min(...array);

}

// Add getVariance function : The variance of a series represents how much the data deviates from the mean, and can be used to determine how spread out the data are
const getVariance = (array) => {
    const mean = getMean(array);
    const differences = array.map((el) => el - mean);
    const squaredDifferences = differences.map((el) => el ** 2);
    const sumSquaredDifferences = squaredDifferences.reduce((acc, el) => acc + el, 0);

} 

// Add calculate function
const calculate = () => {
    const value = document.querySelector("#numbers").value; // value input
    const array = value.split(/,\s*/g);  
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
    
    const mean = getMean(numbers);
    const median = getMedian(numbers);
    const mode = getMode(numbers);
    const range = getRange(numbers);

    document.querySelector("#mean").textContent = mean; // display value of mean 
    document.querySelector("#median").textContent = median;
    document.querySelector("#mode").textContent = mode;
    document.querySelector("#range").textContent = range;    

}



/* 
How to find the median for odd and even lists of numbers:
const testArr1 = [1, 2, 3, 4, 5];
const testArr2 = [1, 2, 3, 4, 5, 6];
const isEven = testArr2.length % 2 === 0;
console.log(isEven);
const oddListMedian = testArr1[Math.floor(testArr1.length / 2)];
console.log(oddListMedian);
const evenListMedian = getMean([testArr2[testArr2.length / 2 - 1], testArr2[testArr2.length / 2]]);
console.log(evenListMedian);
*/

/*
To calculate the occurrence you can use the following approach:
const numbersArr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4];
const counts = {};
numbersArr.forEach((el) => {
  if (counts[el]) {
    counts[el] += 1;
  } else {
    counts[el] = 1;
  }
});

Check if the current number is already in the counts object. If it is, increment it by 1. If it is not, set it to 1.
Resulting object. The keys are the numbers from the array and the values are the number of times each number appears in the list:
{ 1: 3, 2: 3, 3: 3, 4: 3, 5: 2 }
*/

/*
array.forEach(el => counts[el] = (counts[el] || 0) + 1)
                       ===

array.forEach((el) => {
        if (counts[el]) {
            counts[el] += 1;
        } else {
            counts[el] = 1;
        }
    })
*/