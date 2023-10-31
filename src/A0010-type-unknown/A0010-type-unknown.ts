/* eslint-disable */
let x: any;

x = 100;
x = 'Gabriel';
x = 900;
x = '10';
const y = 800;

let z: unknown;

z = 100;
z = 'Gabriel';
z = 900;
z = 10;
// console.log(z + y);  //Não Deixa

if (typeof z === 'number') console.log(z + y);
