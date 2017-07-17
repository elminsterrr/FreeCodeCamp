const objOne = {
  x: 1,
  show: function () {
    console.log(this.x);
  }
};

const objTwo = {
  x: 2
};

const binded = objOne.show.bind(objTwo);
binded(); // 2
