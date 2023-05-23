/* Comparison with the Strict Inequality Operator
The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. The strict inequality operator will not convert data types.

Examples

3 !==  3  // false
3 !== '3' // true
4 !==  3  // true
Add the strict inequality operator to the if statement so the function will return the string Not Equal when val is not strictly equal to 17

Tests
Waiting:testStrictNotEqual(17) should return the string Equal
Waiting:testStrictNotEqual("17") should return the string Not Equal
Waiting:testStrictNotEqual(12) should return the string Not Equal
Waiting:testStrictNotEqual("bob") should return the string Not Equal
Waiting:You should use the !== operator

// Setup
function testStrictNotEqual(val) {
    if (val) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10); */

  // Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);