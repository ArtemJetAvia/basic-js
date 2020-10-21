const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  
    let rezult = arr.slice();
    
if (arr.length === 0) {
    return rezult;
}

    for (let i = 0; i < arr.length; i++) {

    if (arr[i] === '--discard-next') {
     rezult.splice(i, 2);
    } else if ( arr[i] === '--discard-prev') {
      rezult.splice(i - 1, 2);
      } else if ( arr[i] === '--double-next') {
        rezult.splice(i, 1, arr[i + 1] );
      } else if ( arr[i] === '--double-prev') {
     rezult.splice(i, 1, arr[i - 1] );
      
      } else if ( Array.isArray(arr[i])) {
        return rezult;
    }
    
    };
     
};
