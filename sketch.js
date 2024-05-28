function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {

  inicializaCores();

  let texto = palavraParcial(0, width);
  text(texto, 200, 200);
}
