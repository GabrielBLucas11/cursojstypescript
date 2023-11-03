export class Empresa {
  public readonly name: string;
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly name: string,
    public readonly sobrenome: string,
  ) {}
}

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11.111.111/0001-11');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

const empresa1 = new Udemy();
const colaborador1 = new Colaborador('Gabriel', 'Lucas');
const colaborador2 = new Colaborador('Maria', 'Miranda');
const colaborador3 = new Colaborador('João', 'Britos');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

// console.log(empresa1);
empresa1.mostrarColaboradores();
empresa1.popColaborador();
empresa1.mostrarColaboradores();
