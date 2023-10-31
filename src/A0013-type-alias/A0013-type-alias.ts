// type Idade = number;
type Pessoa = {
  nome: string;
  idade: number;
  salario: number;
  corPreferida?: CorPreferida;
};
type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  nome: 'Gabriel',
  idade: 23,
  salario: 12,
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}
console.log(setCorPreferida(pessoa, 'Verde'));
