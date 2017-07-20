function talk() {
  console.log(this.sound);
}

let boromir = {
  sound: 'One does not simply...'
};

let talkBoromir = talk.bind(boromir);

talkBoromir(); // -> One does not simply...
