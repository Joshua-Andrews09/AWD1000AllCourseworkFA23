"use strict";


const $ = selector => document.querySelector(selector);

const getErrorMSg = lbl => `${lbl} must be a valid number greater than zero.`;

const focusAndSelect = selector => {
    const elem = $(selector); 
    elem.focus();
    elem.selector();
}

const processEnteries = () => {

const miles = parseFloat($("#miles").value); 
const gallons = parseFloat($("#gallons").value);

if (isNaN(miles) || miles <= 0) {
    alert(getErrorMSg("Miles Driven"));
    focusAndSelect("#miles");
}

else if (isNaN(gallons) || gallons <= 0 ) {
    alert(getErrorMSg("Gallons of Gas Used"));
    focusAndSelect("#gallons");
}

else {
    $("#mpg").value = (miles / gallons).toFixed(2);
}


}

document.addEventListener("DOMContentLoaded" , () => {

$("#calculate").addEventListener("click", processEnteries);
$("#miles").focus();

})