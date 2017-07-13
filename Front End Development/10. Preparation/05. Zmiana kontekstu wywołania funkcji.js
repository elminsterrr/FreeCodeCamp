const objJeden = {
  x: 1,
  pokaz: function(wartosc) {
    console.log(wartosc + this.x);
  }
};

const objDwa = {
  x: 2
};


const zbindowane = objJeden.pokaz.bind(objDwa, 'wartosc: '); 
zbindowane(); // wartosc: 2