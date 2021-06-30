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