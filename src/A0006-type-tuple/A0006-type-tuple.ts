const dadosCliente1: readonly [number, string] = [1, 'Gabriel'];
const dadosCliente2: [number, string, string] = [1, 'Gabriel', 'Lucas'];
const dadosCliente3: [number, string, string?] = [1, 'Gabriel'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Gabriel', 'Lucas'];

// dadosCliente1[0] = 100;
// dadosCliente1[1] = '100';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);
