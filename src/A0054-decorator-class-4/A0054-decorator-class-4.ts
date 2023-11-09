@outroDecorador('Outro Valor')
@inverteNomeECor('Valor1', 'Valor2')
export class Animal {
  constructor(
    public nome: string,
    public cor: string,
  ) {
    console.log('Eu sou a classe');
  }
}

type Constructor = new (...args: any[]) => any;

function outroDecorador(params1: string) {
  return function (target: Constructor) {
    console.log('Sou o outro decoradorm com valor:', params1);
    return target;
  };
}

function inverteNomeECor(params1: string, params2: string) {
  // Closure
  return function (target: Constructor) {
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
        return (
          valor.split('').reverse().join('').toLowerCase() +
          ' ' +
          params1 +
          ' ' +
          params2
        );
      }
    };
  };
}

const animal = new Animal('Gabriel', 'Azul');
console.log(animal);
