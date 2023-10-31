// & -> AND
type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa1 = TemNome | TemSobrenome | TemIdade;
type Pessoa2 = TemNome & TemSobrenome & TemIdade;

const pessoa1: Pessoa1 = {
  nome: 'Gabriel',
};

const pessoa2: Pessoa2 = {
  idade: 23,
  nome: 'Gabriel',
  sobrenome: 'Lucas',
};

console.log(pessoa1);
console.log(pessoa2);

export { pessoa1, pessoa2 };
