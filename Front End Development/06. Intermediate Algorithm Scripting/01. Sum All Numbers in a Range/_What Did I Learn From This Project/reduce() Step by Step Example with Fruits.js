var arr = ["apple", "orange", "apple", "orange", "pear", "orange"];
var iteration = 0;

function getWordCnt() {
    return arr.reduce(function(prev, next) {
        iteration += 1;
        console.log("                                   ");
        console.log("Iteration nr: " + iteration + "=======================");
        console.log("                                   ");    
        console.log("p: ", prev);  // Elminster White - Very important! Use ',' insted of ("p: " + prev)!!!
        console.log("n: ", next);  // Elminster White - Very important! Use ',' insted of ("n: " + next)!!!

        prev[next] = (prev[next] + 1) || 1;

        return prev;
        }, {});
}

console.log("\n", "Final result: ", getWordCnt());