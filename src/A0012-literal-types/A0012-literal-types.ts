/* eslint-disable */
let x = 10;
x = 0b1010;
const y = 10;
let a = 100;
a = 105;

const pessoa = {
  nome: 'Gabriel' as const,
  sobrenome: 'Lucas',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolhaCor('Vermelho'));

export default 1;
