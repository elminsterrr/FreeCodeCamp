/*
Working example: ...

Instructions:
Convert a date range consisting of two dates formatted
as YYYY-MM-DD into a more readable format.

The friendly display should use month names instead of
numbers and ordinal dates instead of cardinal (1st instead of 1).

Do not display information that is redundant or that can be inferred
by the user: if the date range ends in less than a year from when it begins,
do not display the ending year.

Additionally, if the date range begins in the current year
(i.e. it is currently the year 2016) and ends within one year,
the year should not be displayed at the beginning of the friendly range.

If the range ends in the same month that it begins,
do not display the ending year or month.

Examples:
makeFriendlyDates(["2016-07-01", "2016-07-04"]); // should return ["July 1st","4th"]
makeFriendlyDates(["2016-07-01", "2018-07-04"]); // should return ["July 1st, 2016", "July 4th, 2018"].
*/

function makeFriendlyDates(arr) {
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  let years = [];
  let months = [];
  let days = [];
  
  // Function that changes 1 to 1st, 3 to 3rd, etc.
  function getOrdinal(n) {
    if ((parseFloat(n) == parseInt(n)) && !isNaN(n)) {
      let s = ["th", "st", "nd", "rd"];
      let v = n % 100;
      return n + (s[(v - 20) % 10] || s[v] || s[0]);
    }
    return n;     
  }
  
  // substr and pare - YEARS
  years = arr.map(function(oneYearEl){
    //
    return parseInt(oneYearEl.substr(0, 4), 10);
  });
  console.log(years);
  
  // substr and pare - MONTHS
  months = arr.map(function(oneMonthEl){
    //
    return parseInt(oneMonthEl.substr(5, 2), 10) - 1; // -1 because in monthNames "January" is 0
  });
  console.log(months);
  
  // substr and pare - DAYS
  days = arr.map(function(oneDayEl){
    //
    return parseInt(oneDayEl.substr(8, 2), 10);
  });
  console.log(days);

  // ----------------------- DIFF BETWEEN DATES ----------------------- 
  
  function daysBetween(date1, date2) {
    //Get 1 day in milliseconds
    const oneDay = 1000*60*60*24;

    // Convert both dates to milliseconds
    let date1InMs = date1.getTime();
    let date2InMs = date2.getTime();

    // Calculate the difference in milliseconds
    let differenceInMs = date2InMs - date1InMs;
    
    // Convert back to days and return
    return Math.round(differenceInMs / oneDay); 
  }

  // Set the two dates
  // It looks like this
  // [ 2016, 2017 ]
  // [ 11, 1 ]
  // [ 1, 3 ]
  let first = new Date(years[0], months[0], days[0]);
  let second = new Date(years[1], months[1], days[1]);

  // Calculate difference
  console.log(daysBetween(first, second));
  
  // Place where program decides how to display result
  
  if (daysBetween(first, second) < 365) {
    return [monthNames[months[0]] + ' ' + getOrdinal(days[0]), monthNames[months[1]] + ' ' + getOrdinal(days[1])];
  }
  
  
  // ----------------------- DIFF BETWEEN DATES ----------------------- 
  
  return 99999;
}

//makeFriendlyDates(["2016-07-01", "2016-07-04"]); 
//should return ["July 1st","4th"].

makeFriendlyDates(["2016-12-01", "2017-02-03"]); 
//should return ["December 1st","February 3rd"].

//makeFriendlyDates(["2016-12-01", "2018-02-03"]);
//should return ["December 1st, 2016","February 3rd, 2018"].

//makeFriendlyDates(["2017-03-01", "2017-05-05"]);
//should return ["March 1st, 2017","May 5th"]

//makeFriendlyDates(["2018-01-13", "2018-01-13"]);
//should return ["January 13th, 2018"].

//makeFriendlyDates(["2022-09-05", "2023-09-04"]);
//should return ["September 5th, 2022","September 4th"].

//makeFriendlyDates(["2022-09-05", "2023-09-05"]);
//should return ["September 5th, 2022","September 5th, 2023"].