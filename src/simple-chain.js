const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  getLength() {
      return this.chain.length;
  },
  addLink(data) {
    if (!this.hasOwnProperty('chain')) {
        this.chain = [];
        this.chain.push(`( ${data} )`);
    } else {
        this.chain.push(`( ${data} )`);
    }
      return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position%1 !== 0 || position <= 0 || position >= this.chain.length) {
      this.chain = [];
      throw new Error (`You can't remove incorrect link!`);
    }
      this.chain.splice(position-1,1);
      return this;
  },
  reverseChain() {
      this.chain = this.chain.reverse();
      return this;
  },
  finishChain() {
      let finish = this.chain.join('~~');
      this.chain = [];
      return finish;
  }
};

module.exports = {
  chainMaker
};
