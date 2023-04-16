const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  if (!Array.isArray(arr)){
    return false;
  }
  let newArr=[];
  arr.forEach((el)=>{
      if (typeof el == 'string'){
          newArr.push(el.toUpperCase());
      }
  })
  let secretName = [];
  newArr.forEach((name)=>{
      name=name.split('');
      for (let index = 0; index < name.length; index++) {
          if (name[index] !== ' '){
              secretName.push(name[index]);
              break;
          }
      }
  });
  return secretName.sort().join('');
}

module.exports = {
  createDreamTeam
};
