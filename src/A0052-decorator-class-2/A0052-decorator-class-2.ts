@inverteNomeECor
export class Animal {
  constructor(
    public nome: string,
    public cor: string,
  ) {
    console.log('Eu sou a classe');
  }
}

function inverteNomeECor<T extends new (...args: any[]) => any>(target: T): T {
  console.log('Eu sou o Decorador e recebi', target);

  return class extends target {
    cor: string;
    nome: string;

    constructor(...args: any[]) {
      super(...args);
      this.nome = this.inverte(args[0]);
      this.cor = this.inverte(args[1]);
    }

    inverte(valor: string): string {
      return valor.split('').reverse().join('').toLowerCase();
    }
  };
}

// const animal = new Animal('Gabriel', 'Azul');
// console.log(animal);
