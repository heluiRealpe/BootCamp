/* Given a random non-negative number, you have to 
return the digits of this number within an array 
in reverse order.*/

function digitize(n) {
  var digits = n.toString().split('');
  var realDigits = digits.map(Number);
  const reversed = realDigits.reverse();
  return reversed;
  } 

  console.log(digitize(348597)); //[7,9,5,8,4,3]