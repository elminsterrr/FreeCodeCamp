const objOne = {
  veryImportant: 1,
  show: function () {
    console.log(this.veryImportant);
  }
};

const objTwo = {
  veryImportant: 2
};

const binded = objOne.show.bind(objTwo);
binded(); // 2
