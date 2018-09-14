/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 * 
 */
var stringCount = string => {
return string.length;
};

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {Array}
 * @return {Number}
 */

var arrayLength = array => {
  return array.length;
}


/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countAll= array => {
return array.reduce((acc, curr) => {
return acc + curr;
});

}
  
  
  

//  #countStrings
//  
//  * Takes in an array of strings and returns an array of string lengths.
//  *
//  * @param {Array}
//  * @return {Array}
//  */
 var countStrings = array => {
   return array.map(iter =>{
return iter.length;

   })}


/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {String}
 * @return {Number}
 */

var countAllStrings = array => {
  var indivlength = array.map((str) => {
    return str.length;
  });

  return indivlength.reduce((accum, curr) =>{
    return accum + curr;
  });
};



/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */

var splitString = string => {
  return string.split("");
}


/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {String}
 * @return {Number}
 */
var lengthOfLast = string => {
var last = string.pop();
return last.length;

}

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
var sumBelowTen = array => {
var indivless= array.filter((lessthan) => {
  return lessthan < 10;
});
return indivless.reduce((accum, curr) => {

  return accum + curr;
}

)} 





/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {String}
 * @return {Number}
 */
var moreThanTenLetters = string => {
var indivmore = string.filter((morethan)=> {
return morethan > 10;
});
return indivmore.length +1;


}

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
var multiplyAll = array => {
return array.reduce((accum, curr) => {
return accum*curr;
}


)
};

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {String}
 * @return {Number}
 */
var sumAllPositive = string => {
var post= string.filter((positivecheck) => {
return positivecheck > 0;
});
return post.reduce((accum, curr)=> {
  return accum+curr;
})

}

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree = array => {
var small = array.filter((smallcheck)=>{
return smallcheck.length < 4;
});
return small.length;

};

/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
var doubleArray = array => {
return array.map(mult => {
  return mult*2;
}
  
  )};

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */

var countObjects= array => {
return array.length;


}


module.exports = {
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  doubleArray: doubleArray,
  countObjects: countObjects
};
