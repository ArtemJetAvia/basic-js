const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  
  let rez = [];
  if (Array.isArray(members)) {
  members.forEach(element => {
if ( typeof element === "string")  {
  let letter = element.trim();
  rez.push(letter[0].toUpperCase());
} else {
  return false;
}
 });
let rezult = rez.sort().join('');
return rezult;
  } else {
    return false;
  }
 
};
