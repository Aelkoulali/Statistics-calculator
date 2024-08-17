// Write mean logic
const getMean = (array) => {

}


// Add calculate function
const calculate = () => {
    const value = document.querySelector("#numbers").value; // value input
    const array = value.split(/,\s*/g);  
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
}