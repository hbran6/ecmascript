let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(3))

let array = [1, 2, 3, 4, 5];
console.log(array.flatMap(value => [value, value * 2]));

let hello = '          hello world';
console.log(hello);
console.log(hello.trimStart());

let hello2 = '          hello world          ';
console.log(hello2);
console.log(hello2.trimEnd().trimStart());


// trycatch

let entries = [["name", "herber"], ["age", 27]];

// convierte un arreglo en objeto

console.log(Object.fromEntries(entries));


let mySymbl = `My Symbol`;

let symbol = Symbol(mySymbl);
console.log(symbol.description);