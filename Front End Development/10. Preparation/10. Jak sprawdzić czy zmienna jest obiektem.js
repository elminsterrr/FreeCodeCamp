const variable = {
  name: 'Przemek',
  height: 179
};

function test () {
  if ((variable !== null) && (typeof (variable) === 'object')) {
    console.log('To jest obiekt!');
  }
}

test(); // 'To jest obiekt!'
