/*

Instructions:
Given an array arr, find element pairs
whose sum equal the second argument arg
and return the sum of their indices.

If multiple pairs are possible that have
the same numeric elements but different indices,
return the smallest sum of indices. Once an element
has been used, it cannot be reused to pair with another.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6.
The pairs that sum to 20 are [7, 13] and [9, 11].
We can then write out the array with their indices and values.

Index 0 1 2 3 4
Value 7 9 11  13  15
Below we'll take their corresponding indices and add them.

7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6
*/

function pairwise(arr, arg) {
  let finalResult = [];
  let lastSum = 0;
  let result = arr.reduce(function(acc, next, index) {
    /*
    if(index > 0) {
    acc.map(function(oneAccEl) {
      console.log(oneAccEl);
      console.log('#', (oneAccEl + acc[0]));
      if ((oneAccEl + acc[0]) === arg) {
        console.log("Yey!");
      }
      return 
    });
    }
    */
    
    //acc[acc.length-1] + next
    
    console.log(arr[index]);
    
    for(let i = 0; i <arr.length; i++) {
      if ((arr[index] + arr[index+i]) === arg) {
        console.log("fuck", arr[index], index, arr[index+i], index + i);
        console.log(index, index + i, 'sum:', index + index + i);
        finalResult.push((index + index + i));
        
      }
    }
    //console.log(arg);
    /*
    if((arr[index] + arr[index + 1]) === arg) {
      console.log('@', index);
    }
    
    
    acc += arr[index];
    console.log(acc);
    */
    acc += arr[index];
    return acc;
  }, []);
  
  finalResult.map(function(oneElement) {
    lastSum += oneElement;
    return lastSum;
  });

  return lastSum;
}

pairwise([7, 9, 11, 13, 15], 20);