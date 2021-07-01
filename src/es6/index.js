// forma antigua
function newFunction(name, age, country) {
    var name = name || 'herber';
    var age = age || 27;
    var country = country || "GT";
    console.log(name, age, country);
}

// es6
function newFunction2(name = 'herber', age=27, country="GT") {
    console.log(name, age, country);
}

newFunction2();
newFunction2('Pedro', 23, 'MX');

let hello = "Hello";
let world = "World";

// antes
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// es6
let epicPhrase2 = `${hello} ${world}`; //template literals `
console.log(epicPhrase2);

// MULTILINEAS

// antes
let lorem = "esto es un string chingon \n"
+ " y aqui sigue la linea";
console.log(lorem);

// es6
let lorem2 = `esto es otro string chingon pero con es6
y aqui sigue la frase con enter
`;

console.log(lorem2);

// DESESTRUCTURACION

// antes
let person = {
    'name': 'herber',
    'age': 27,
    'country': 'GT'
};

console.log(person.name, person.age, person.country);

// es6
let {name, age} = person;//asigna en variable el objeto
console.log(name, age);

// PROPAGACION
let team1 = ['Herber', 'Andi', 'Sindy'];
let team2 = ['Juan', 'Pedro', 'Pablo'];

let education = ['Francisco', ...team1, ...team2]; // junta los dos arreglos con Francisco, debe ir un valor al inicio

console.log(education);

var hola = 'hola'; // de forma global
let hola = 'hola'; // solo funciona en el scope o bloque

{
    var globalVar = "variable global"; //esto funciona fuera de los {}
}

{
    let globalLet = 'let global';// esto solo funciona dentro de los {}
}

console.log(globalVar);
console.log(globalLet);