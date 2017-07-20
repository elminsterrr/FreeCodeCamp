let talk = function () {
  console.log(this.sound);
}

let boromir = {
  speak: talk,
  sound: 'One does not simply...'
};

boromir.speak(); // -> One does not simply... (CONTEX: boromir)
talk(); // -> undefined (CONTEX: global window)

let blabber = boromir.speak();
blabber(); // -> undefined (CONTEX: function talk not boromir object)
