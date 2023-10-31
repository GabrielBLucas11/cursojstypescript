/* eslint-disable */

// Basic Types
let name: string = 'Gabriel';
let age: number = 23;
let adult: boolean = true;
let symbol: symbol = Symbol('Qualquer-symbol');
// let big: bigint = 10n;

// Arrays
let numbersArray: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbersArray2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let stringArray: Array<string> = ['a', 'b', 'c', 'd', 'e'];
let stringArray2: string[] = ['a', 'b', 'c', 'd', 'e'];

// Objects
let person: { name: string; age: number; adult?: boolean } = {
  name: 'Gabriel',
  age: 23,
  adult: true,
};

// Functions
function sum(x: number, y: number) {
  return x + y;
}

const sum2: (x: number, y: number) => number = (x, y) => x + y;

export default name;
