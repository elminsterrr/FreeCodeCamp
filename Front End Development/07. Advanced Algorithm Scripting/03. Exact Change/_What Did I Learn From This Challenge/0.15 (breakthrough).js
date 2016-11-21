/*

145 linijka

Working example: https://...

Instructions:
Design a cash register drawer function checkCashRegister()
that accepts purchase price as the first argument (price),
payment as the second argument (cash),
and cash-in-drawer (cid)
as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer
is less than the change due. Return the string "Closed"
if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills,
sorted in highest to lowest order.
*/
function checkCashRegister(price, cash, cid) {
  var finalArray = [];
  var change = cash - price;
  var workingWithChange = change;
  var reg = [];
  var denominations = {
    'ONE HUNDRED': 100.00,
    'TWENTY': 20.00,
    'TEN': 10.00,
    'FIVE': 5.00,
    'ONE': 1.00,
    'QUARTER': 0.25,
    'DIME': 0.10,
    'NICKEL': 0.05,
    'PENNY': 0.01
  };
  function cashInDrawer(input) {
    var sum = 0;
    input.forEach(function(a) {
      //console.log('1: ', a[1]);
      sum = sum + a[1];
    });
    return sum;
  }
  //---------------------------------
  function valueOfEachCurrencyType (input) {
    function person(name, quantity, inDollars) {
      this.name = name;
      this.quantity = quantity;
      this.inDollars = inDollars;
    }
    var inDollars = '';
    var result = '';
    var name = '';
    input.forEach(function(a) {
      console.log('Func. value C.T.: ', a);
      switch (a[0]) {
        case 'ONE HUNDRED':
          inDollars = 100;
          result = a[1] / 100;
          name = 'ONE HUNDRED';
          console.log('ONE HUNDRED:', result);
          break;
        case 'TWENTY':
          inDollars = 20;
          result = a[1] / 20;
          name = 'TWENTY';
          console.log('TWENTY:', result);
          break;
        case 'TEN':
          inDollars = 10;
          result = a[1] / 10;
          name = 'TEN';
          console.log('TEN:', result);
          break;
        case 'FIVE':
          inDollars = 5;
          result = a[1] / 5;
          name = 'FIVE';
          console.log('FIVE:', result);
          break;
        case 'ONE':
          inDollars = 1;
          result = a[1] * 1;
          name = 'ONE';
          console.log('ONE:', result);
          break;
        case 'QUARTER':
          inDollars = 0.25;
          result = a[1] * 4;
          name = 'QUARTER';
          console.log('QUARTER:', result);
          break;
        case 'DIME':
          inDollars = 0.10;
          result = a[1] * 10;
          name = 'DIME';
          console.log('DIME:', result);
          break;
        case 'NICKEL':
          inDollars = 0.05;
          result = a[1] * 20;
          name = 'NICKEL';
          console.log('NICKEL:', result);
          break;
        case 'PENNY':
          inDollars = 0.01;
          result = a[1] * 100;
          name = 'PENNY';
          console.log('PENNY:', result);
          console.log('------------------------------------------');
          break;
        default:
          console.log('Error! Input not recognized!');
          break;
      }
      reg.push(new person(name, result, inDollars));
    });
    return reg;
  }
  //---------------------------------
  function changing(inputChange) {
    var stillProgressing = foundValue.reduce(function(a, b) {
      if (summedCashInDrawer < change) {
        return 'Insufficient Funds';
      } else if (summedCashInDrawer === change) {
        return 'Closed';
      } else {
        console.log('foundValue[a].name:', foundValue[a].name);
        console.log('foundValue[a].quantity:', foundValue[a].quantity);
        if (workingWithChange > foundValue[a].inDollars) {
          console.log('Wolumen banknotu:', foundValue[a].inDollars);
          var divisionOutcome = (Math.floor(workingWithChange / foundValue[a].inDollars)).toFixed(2);


          if (foundValue[a].quantity > divisionOutcome) {
            foundValue[a].quantity = divisionOutcome;
          }

          var remainder = ((workingWithChange / foundValue[a].inDollars - divisionOutcome).toFixed(2)) * foundValue[a].inDollars;
          var changeFromDrawer = foundValue[a].quantity * foundValue[a].inDollars;

          console.log('changeFromDrawer:', changeFromDrawer);

          // Elminster White - To jest źle changeFromDrawer to jest cały nominał do wydawania w kasie
          // i nie mogę tego odejmować od pozostalej do wydania kwoty reszty (workingWithChange).
          // Zamiast odejmować changeFromDrawer powinienem odjąć to co naprawdę zostało wydane czyli 3 x Five.
          // Wtedy otrzymam workingWithChange ktorego szukam czyli 1,74$.
          //
          // Było:
          // workingWithChange = workingWithChange - changeFromDrawer;
          // Było 2:
          // workingWithChange = workingWithChange - (divisionOutcome * foundValue[a].inDollars);

          workingWithChange = (workingWithChange - changeFromDrawer).toFixed(2);

          //POPRAWIC VALUE Z CONSOLE LOG


          console.log('Division Outcome: ', divisionOutcome);
          console.log('Real Remainder: ', remainder);
          console.log('WorkingWithChange:', workingWithChange);
          console.log('Name:', foundValue[a].name);
          console.log('Value:', changeFromDrawer);

          finalArray.push([foundValue[a].name, changeFromDrawer]);

          //!!!!!!!!!!!!so far so good!!!!!!!!!!!!

          //return changing(workingWithChange);
          //!!!!!LOST IT!!!!!
          /*
          if (divisionOutcome > foundValue[a].quantity) {
            //foundValue[a].quantity = foundValue[a].quantity - 1;
            reg[a]quantity = foundValue[a].quantity - 1;
            //return changing(inputChange);
            console.log('Sorry');
          }
         */
        }


        if (workingWithChange < 0) {
          console.log('OOOOPSSSS workingWithChange < 0 ');
        }

        console.log('---------------------->', workingWithChange);
        a = a + 1;
        return a;
      }
    }, 0);

    for (var key in denominations) {
      return [[key, denominations[key]]];
    }
  }
  //---------------------------------
  cid.reverse();
  var summedCashInDrawer = cashInDrawer(cid);    //Elminster White - I need to do something with that value!
  var foundValue = valueOfEachCurrencyType(cid); //Elminster White - I need to do something with that value!
  var changeDone = changing(change);             //Elminster White - I need to do something with that value!

  console.log('Kasa: ', foundValue); //Elminster White - For now. I must change it.
  console.log('Reszta: ', change);
  console.log('Suma środków: ', summedCashInDrawer); //Elminster White - For now. I must change it.
  console.log('------------------------------------------');

  if (summedCashInDrawer < change) {
    return 'Insufficient Funds';
  }
  return finalArray; //Elminster White - For now. I must change it.
}

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

//should return !!!!!
//[["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].
