// Add mean function: The mean is the average value of all numbers in a list
const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;

// Add getMedian function: The median is the midpoint of a set of numbers
const getMedian = (array) => {
    const sorted = array.sort((a,b) => { return a - b;});
    // check if the length of array is even + find the middle two numbers + calculate their mean, and return the result.
    return !(array.length % 2 === 0) ? getMean([sorted[sorted.length / 2 - 1], sorted[sorted.length / 2]])
    : sorted[Math.floor(sorted.length / 2)]

}
 
// Add calculate function
const calculate = () => {
    const value = document.querySelector("#numbers").value; // value input
    const array = value.split(/,\s*/g);  
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
    const mean = getMean(numbers);
    document.querySelector("#mean").textContent = mean; // display value of mean  

}