const objJeden = {
  x: 1,
  pokaz: function() {
    console.log(this.x);
  }
};

const objDwa = {
  x: 2
};


const zbindowane = objJeden.pokaz.bind(objDwa); 
zbindowane();