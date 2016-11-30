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
  let years = [];
  let months = [];
  let days = [];
  
  years = arr.map(function(oneYearEl){
    //
    return parseInt(oneYearEl.substr(0, 4), 10);
  });
  console.log(years);
  
  months = arr.map(function(oneMonthEl){
    //
    return parseInt(oneMonthEl.substr(5, 2), 10);
  });
  console.log(months);
  
  days = arr.map(function(oneDayEl){
    //
    return parseInt(oneDayEl.substr(8, 2), 10);
  });
  console.log(days);
  
  return 99999;
}

makeFriendlyDates(["2016-07-01", "2016-07-04"]); 
//should return ["July 1st","4th"].

//makeFriendlyDates(["2016-12-01", "2017-02-03"]); 
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