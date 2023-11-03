export class Empresa {
  public readonly name: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

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

const empresa1 = new Empresa('Empresa 1', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Gabriel', 'Lucas');
const colaborador2 = new Colaborador('Maria', 'Miranda');
const colaborador3 = new Colaborador('João', 'Britos');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

console.log(empresa1);
empresa1.mostrarColaboradores();
