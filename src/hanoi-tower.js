const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let rez = {turns: 0, seconds: 0};

let turns = Math.pow(2, disksNumber) - 1;
rez.turns = turns;

let seconds = Math.floor((3600 / turnsSpeed) * turns );
rez.seconds = seconds;
return rez;
};
