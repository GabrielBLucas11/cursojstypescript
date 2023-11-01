export function funcao(this: Date, arg1: string): void {
  console.log(this);
  console.log(arg1);
}

// funcao('Gabriel'); // Não dá certo

funcao.call(new Date(), 'Gabriel');
funcao.apply(new Date(), ['Gabriel']);
