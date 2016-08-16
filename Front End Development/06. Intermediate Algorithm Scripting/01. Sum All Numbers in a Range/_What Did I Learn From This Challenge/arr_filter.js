/*
The filter() method creates a new array with all elements that pass the test implemented by the provided function.

Use Case: Find me all the items in the array that have the name "orange"
*/

var arr = [
    {"name":"apple", "count": 2},
    {"name":"orange", "count": 5},
    {"name":"pear", "count": 3},
    {"name":"orange", "count": 16},
];
    
var newArr = arr.filter(function(item){
    return item.name === "orange";
});


console.log("Filter results:", newArr);