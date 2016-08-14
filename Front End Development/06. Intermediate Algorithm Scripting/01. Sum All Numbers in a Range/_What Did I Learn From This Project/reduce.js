/*5) reduce()

The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) has to reduce it to a single value.

To be honest, it took me awhile before I started embracing reduce. The concept was abstract to me and the word accumulator was scary. It was until I started a excellent functional javascript series by nodeschool, did I manage to grasp the concept. But still I didn't see much use for it until I was refactoring my code one day and it hit me that reduce() was awesome!

Use Case: Parse the array and return an object that
contains the number of times each string occured in the array
*/

var arr = ["apple","orange","apple","orange","pear","orange"];

function getWordCnt(){
    return arr.reduce(function(prev,next){
        prev[next] = (prev[next] + 1) || 1;
        return prev;
    },{});
}

console.log(getWordCnt());