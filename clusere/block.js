function fruits() {
  if (true) {
    var fruit1 = 'Apple'; // function scope
    let fruit2 = 'Kiwi'; // block scope
    const fruit3 = 'Banana'; // block scope
    console.log(fruit2);
    console.log(fruit3);
  }
  var fruit1 = 'Apple';
  let fruit2 = 'Kiwi';
  console.log(fruit1);
}

fruits();
