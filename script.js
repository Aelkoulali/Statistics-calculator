// Write mean logic : The mean is the average value of all numbers in a list
const getMean = (array) => {
    const sum = array.reduce((acc, el) => {
        return acc + el;
    });

}


// Add calculate function
const calculate = () => {
    const value = document.querySelector("#numbers").value; // value input
    const array = value.split(/,\s*/g);  
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
}