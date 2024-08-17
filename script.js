// Add mean function: The mean is the average value of all numbers in a list
const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;

// Add getMedian function: The median is the midpoint of a set of numbers
const getMedian = (array) => {
    const sorted = array.sort();

}
 
// Add calculate function
const calculate = () => {
    const value = document.querySelector("#numbers").value; // value input
    const array = value.split(/,\s*/g);  
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
    const mean = getMean(numbers);
    document.querySelector("#mean").textContent = mean; // display value of mean  

}