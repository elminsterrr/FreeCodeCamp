const zmienna = {
  imie: 'Przemek',
  wzrost: 179
};

function test() { 
  if ((zmienna  !== null) &&  (typeof(zmienna)  === 'object')) {
    console.log('To jest obiekt!');
  }
}

test();