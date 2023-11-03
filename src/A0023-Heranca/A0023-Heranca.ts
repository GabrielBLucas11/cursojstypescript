export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return 'Vem do Aluno: ' + this.nome + ' ' + this.sobrenome;
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'Vem do Cliente: ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Gabriel', 'Lucas', 23, '111.111.111-11');
const aluno = new Aluno('Gabriel', 'Lucas', 23, '111.111.111-11');
const cliente = new Cliente('Gabriel', 'Lucas', 23, '111.111.111-11');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
