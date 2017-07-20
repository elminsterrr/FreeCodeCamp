function talk() {
  console.log(this.sound);
}
let animal = {
  talk: talk
};
let cat = {
  sound:'meow!'
};
Object.setPrototypeOf(cat, animal);
cat.talk(); // -> meow!