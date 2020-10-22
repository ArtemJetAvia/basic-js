const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
    constructor(arr) {
      this.arr = arr;
      //this.depth = 0;
    }
  
    calculateDepth (arr) {


      //console.log(arr);
      let depth = 0;
      //let depth;
      if (Array.isArray(arr)) {
        
         depth++;
        //  arr.forEach( i => {
        //    this.calculateDepth(i);
        //  });


        return depth;
      } else {
       // console.log('notarr');
       return 0;
    
     
    }

    }
  }