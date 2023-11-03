export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
    protected morreu: boolean = false,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    if (!this.morreu) {
      this.vida -= forcaAtaque;
      console.log(`${this.nome} agora tem ${this.vida} de vida...`);
    }

    if (this.vida <= 0) {
      this.morreu = true;
      console.log(`${this.nome} morreu...`);
    }
  }

  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';

  bordao(): void {
    console.log(this.emoji + 'Guerreira ao ataque!!');
  }
}
export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';
  bordao(): void {
    console.log(this.emoji + 'Monster blyak');
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
