function displayCaracter(x) {
  let letter = 'A';
  for (let i = 1; i <= x; i++) {
    if (i % 2 === 1) {
      letter = 'A';
    } else {
      letter = (i % 4 === 0) ? 'C' : 'B';
    }
    console.log(letter);
  }
}
displayCaracter(10);