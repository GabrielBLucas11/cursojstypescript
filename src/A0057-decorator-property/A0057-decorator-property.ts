function decorador(classPrototype: any, nome: string | symbol): any {
  let valorPropriedade: any;
  console.log(classPrototype);
  console.log(nome);
  return {
    get: () => valorPropriedade,
    set: (valor: any) => {
      console.log(`set ${String(nome)}`);
      valorPropriedade = valor.split('').reverse().join('');
    },
  };
}

export class UmaPessoa {
  @decorador
  nome: string;
  @decorador
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  metodo(msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }
}

const pessoa = new UmaPessoa('Gabriel', 'Barboza', 23);
const metodo = pessoa.metodo('Hello World!!');
console.log(metodo);
