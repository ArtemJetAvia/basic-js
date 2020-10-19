const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
 // console.log(date);
  let rez;
  if (typeof date == "undefined" || !date) {
    rez = "Unable to determine the time of year!";
  return rez;
  }
  if (typeof date.valueOf() === "number") {
    

  let win = 'winter';
  let spr = 'spring';
  let sum = 'summer';
  let aut = 'autumn';

  let month = date.getMonth();
  //console.log(month);
  
switch (month) {
  case 11 :
    rez = 'winter';
    //console.log(rez);
    return rez;
    break;
    case 0 :
    rez = 'winter';
    //console.log(rez);
    return rez;
    break;
    case 1 :
     rez = 'winter';
    //console.log(rez);
    return rez;
    break;
  case 2 :
     rez = 'spring';
    //console.log(rez);
    return rez;
    break;
    case 3 :
     rez = 'spring';
    //console.log(rez);
    return rez;
    break;
    case 4 :
     rez = 'spring';
    //console.log(rez);
    return rez;
    break;
  case 5 :
     rez = 'summer';
    //console.log(rez);
    return rez;
    break;
    case 6 :
     rez = 'summer';
    //console.log(rez);
    return rez;
    break;
    case 7 :
     rez = 'summer';
    //console.log(rez);
    return rez;
    break;

  case 8 :
     rez = 'autumn';
    //console.log(rez);
    return rez;
    break;
    case 9 :
     rez = 'autumn';
    //console.log(rez);
    return rez;
    break;
    case 10 :
     rez = 'autumn';
    //console.log(rez);
    return rez;
    break;
}
  } else {
    rez = "Error";
  return rez;
  }

};
