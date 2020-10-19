const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let age = 0;
  let sampActNum = +sampleActivity;
if (isNaN(sampActNum)) {return false}


  if (typeof sampleActivity === "string") {  
    
    
  if ( sampActNum < 0 || sampActNum > 15 || sampActNum == 0 || sampleActivity.length === 0 || !sampleActivity.trim() || sampleActivity.replace(/\s\n\t\r/g,"") == "") {
    return false; 
} else {

age = (Math.log2(MODERN_ACTIVITY / sampActNum)) / (Math.log2(2) / HALF_LIFE_PERIOD)

return Math.ceil(age);
}
  } else {

    return false;
  }

};
