interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly endereco: string[];
}

interface Pessoa {
  readonly idade?: number;
}

const pessoa: Pessoa = {
  nome: 'Gabriel',
  sobrenome: 'Lucas',
  endereco: ['Av. Brasil'],
  idade: 30,
};

pessoa.endereco.push('Rua Top');
console.log(pessoa);
