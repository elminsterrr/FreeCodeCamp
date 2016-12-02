/*
Working example: https://repl.it/Edrx/0

Instructions:
Return a new array that transforms the element's
average altitude into their orbital periods.

The array will contain objects in the format
{name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on wikipedia.

The values should be rounded to the nearest
whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers,
and the GM value of earth is 398600.4418 km3s-2.
*/
function orbitalPeriod(arr) {
   
   function orbitalPeriodInside(inputData) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    let averageAltitude = inputData.avgAlt;
    let myNewObj = {};

    let upperPartBeforePow = earthRadius + averageAltitude;
    let upperPartAfterPow = Math.pow(upperPartBeforePow, 3);
    let dividedByLowerPart = upperPartAfterPow / GM;
    let sqrt = Math.sqrt(dividedByLowerPart);
    let orbitalPeriodT = 2 * 3.14159265359 * sqrt;
    let orbitalPeriodTRound = Math.round(orbitalPeriodT);
    
    console.log(typeof(orbitalPeriodTRound)); // Elminster White - Important! Should be a number, not a string!
  
    myNewObj.name = inputData.name;
    myNewObj.orbitalPeriod = orbitalPeriodTRound;

    return myNewObj;
  }
 
  let results = arr.map(function(oneObj) {
    return orbitalPeriodInside(oneObj);
  });

  return results;
}
//orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
//should return [{name: "sputnik", orbitalPeriod: 86400}].

orbitalPeriod([{name: "iss", avgAlt: 413.6},
  {name: "hubble", avgAlt: 556.7},
  {name: "moon", avgAlt: 378632.553}]);

//should return [
//{name : "iss", orbitalPeriod: 5557},
//{name: "hubble", orbitalPeriod: 5734},
//{name: "moon", orbitalPeriod: 2377399}
//].