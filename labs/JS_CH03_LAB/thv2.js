
let investment = 0; 
do{
    investment = parseFloat(
    prompt("Enter investment amount as xxxxx.xx", 10000));
}

while (isNaN(investment));

let rate = 0; 
do{
    rate = parseFloat(prompt("Enter instrest rate as xx.x", 7.5));
}

while (isNaN(rate));

let months = 0; 
do{
    months = parseInt(prompt("Enter number of months", 10)); 
}

while (isNaN(months));

let futureValue = investment; 
for (let i =12; i <=months; i++){
    futureValue += futureValue * rate / 100;
}

        document.write(`<p><labe>Investment amount:<label> ${investment}</p>`);
        document.write(`<p><labe>Intrest rate:<label> ${rate}</p>`);
        document.write(`<p><labe>Months:<label> ${months}</p>`);
        document.write(`<p><labe>Future Value:<label> ${futureValue.toFixed(2)}</p>`);

