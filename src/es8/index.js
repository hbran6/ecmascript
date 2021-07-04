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


const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false) ? setTimeout(() => resolve('Hello World'), 3000) : reject(new Error('Test error'))
    })
};

const HelloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

HelloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();