interface pessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno1: pessoaProtocolo = {
  nome: 'Gabriel',
  sobrenome: 'Lucas',
  idade: 23,
};

const aluno2: pessoaProtocolo<number, number> = {
  nome: 123,
  sobrenome: 123,
  idade: 23,
};

console.log(aluno1);
console.log(aluno2);
