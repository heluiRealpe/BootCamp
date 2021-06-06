/*You are given an array (which will have a length of at least 3, but could be very large) 
containing integers. The array is either entirely comprised of odd integers or entirely 
comprised of even integers except for a single integer N. Write a method that takes the 
array as an argument and returns this "outlier" N.*/

function findOutlier(integers) {
    var newArrayInt = [], newArrayNoInt = [];
    let outlier = 0;
    for (var i=0, y = 0, w = 0; i<integers.length; i++) {
        if (integers[i] % 2 === 0) {
            newArrayInt[y] = integers[i];
            y += 1;
        } else if (integers[i] !== 0) {
            newArrayNoInt[w] = integers[i];
            w += 1;
        }
    }
    if (y >= 3) {
        outlier = parseInt(newArrayNoInt);
        return outlier;
    }
    if (w >= 3) {
        outlier = parseInt(newArrayInt);
        return outlier;
    }
}


console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));

/*[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/