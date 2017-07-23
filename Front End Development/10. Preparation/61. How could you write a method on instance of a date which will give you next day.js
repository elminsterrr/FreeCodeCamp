Date.prototype.nextDay = function () {
  let currentDate = this.getDate();
  return new Date(this.setDate(currentDate + 1));
};

let date = new Date();

date.nextDay(); // Sun Jul 23 2017 20:53:49 GMT+0200 (Środkowoeuropejski czas letni)
