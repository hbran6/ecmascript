const data = {
    frontend: 'Andi',
    backend: 'Herber',
    design: 'Piter',
}

// esto transforma un objeto a una matriz
const entries = Object.entries(data);

console.log(entries);
console.log(entries.length);

const data = {
    frontend: 'Andi',
    backend: 'Herber',
    design: 'Piter',
}

// esto convierte en un array un objeto
const values = Object.values(data);
console.log(values);
console.log(values.length);

const string = 'hello';
console.log(string.padStart(8, 'hi'));
console.log(string.padEnd(12, ' ----'));