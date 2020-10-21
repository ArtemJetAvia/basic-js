const CustomError = require("../extensions/custom-error");

const chainMaker = {
  rezult : [],
   
  getLength() {
    //console.log(this.rezult.length);
    return this.rezult.length;
  },
  addLink(value) {
    this.rezult.push(`( ${value} )`);
    //console.log(this.rezult);
    //console.log(chainMaker.rezult);
    return this;
  },
  removeLink(position) {
    if (position <= 0 || position > this.rezult.length || !Number.isInteger(position) ) {
      this.rezult.length = 0;
      throw 'Error';
    } else {
      this.rezult.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
     this.rezult.reverse();
    return this;
  },
  finishChain() {
   //console.log(this.rezult.join('~~'));
   let rez = this.rezult.join('~~');
    this.rezult.length = 0;
    return rez;
  }
};

module.exports = chainMaker;
