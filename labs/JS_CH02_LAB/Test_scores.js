


"use strict";

let total = 0;

const score1 = parseInt(prompt("Enter Test Score"));
const score2 = parseInt(prompt("Enter Test Score"));
const score3 = parseInt(prompt("Enter Test Score"));
total += score1 + score2 + score3;

const average = total / 3;

const html = `<p>Score 1 = ${score1}</p>
              <p>Score 2 = ${score2}</p>
              <p>Score 3 = ${score3}</p>
              <p>Average score = ${average.toFixed(2)}</p>`;

document.write(html);

