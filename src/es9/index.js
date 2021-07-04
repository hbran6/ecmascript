// operador de reposo
const obj = {
    name: 'Herber',
    age: 27,
    country: 'GT',
};

let { country, ...all} = obj;
console.log(all);

const obj = {
    name: 'Herber',
    age: 27,
}

const obj1 = {
    ...obj,//esto une el obj con obj
    country: 'GT',
}

console.log(obj1);

// promise finally

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        // (true) ? resolve('Hello World') : reject(new Error('Test error'))
        (true) ? setTimeout(()=>resolve('Hello World'), 3000) : reject(new Error('Test error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))


// regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2021-07-4');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);