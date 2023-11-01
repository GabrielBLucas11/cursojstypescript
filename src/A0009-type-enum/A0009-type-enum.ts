enum Cores {
  vermelho,
  azul,
  amarelo,
}

console.log(Cores);

function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaCor(Cores.amarelo);
