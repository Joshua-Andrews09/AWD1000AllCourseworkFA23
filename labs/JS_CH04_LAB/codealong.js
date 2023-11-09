const $ = selector => document.querySelector(slector);

const calculateFV = (investmentInput, rateInput, yearInput) => {

let futureValue = investmentInput

for(let i = 1; i(<= yearInput; ++i)){
    futureValue += (futureValue * rateInput) /100;

} 
return futureValue

}

const processEnteries = () =>{


    const investmentInput = parseFloat($("#investment").value);
const rateInput = parseFloat($("#rate").value);
const yearInput = parseInt ($(#years).value);
const fvOutput = $("#future_value");

} 

fvOutput.value = calculateFV(investmentInput, rateInput, yearInput).toFixed(2);


document.addEventListener("DOMContentloaded", function () {

let calcButton = $("#calculate");
if(calcButton){
    calcButton.addEventListener("click", processEnteries);

}
})