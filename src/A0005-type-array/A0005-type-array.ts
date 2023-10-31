// Array<T> - T[]
function multiplicaArgs(...args: Array<number>) {
  return args.reduce((ac, valor) => ac * valor, 1);
}

// function concatenaStrings(...args: string[]): string[] {
//   return args.reduce((ac, valor) => ac * valor, 1);
// }

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
// const concatenacao = concatenaStrings('a', 'b', 'c');
const upper = toUpperCase('a', 'b', 'c');

const Array1: readonly string[] = ['a', 'b', 'c'];
const Array2: ReadonlyArray<string> = ['a', 'b', 'c'];

console.log(Array1);
console.log(Array2);
console.log(result);
console.log(upper);
