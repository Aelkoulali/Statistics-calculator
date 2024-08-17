// Add mean function: The mean is the average value of all numbers in a list
const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;
 
// Add calculate function
const calculate = () => {
    const value = document.querySelector("#numbers").value; // value input
    const array = value.split(/,\s*/g);  
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
    const mean = getMean(numbers);
}