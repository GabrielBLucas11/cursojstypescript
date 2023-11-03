type TipoPessoa = {
  nome: string;
  sobrenome: string;
  nomeCompleto(): string;
};

export class Pessoa implements TipoPessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Gabriel', 'Lucas');
console.log(pessoa.nomeCompleto());
