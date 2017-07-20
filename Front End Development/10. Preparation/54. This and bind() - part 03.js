let talk = function () {
  console.log(this.sound);
};

let boromir = {
  sound: 'One does not simply...'
};

boromir.speak = talk.bind(boromir); // -> One does not simply... (CONTEX: boromir)
let blabber = boromir.speak;
blabber(); // -> One does not simply... (CONTEX: still boromir thanks to bind() )
