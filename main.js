// 1. Array operations

const arrayNumbers = [1, 2, 3, 4, 5, 7, 8, 9, 10];

//Implementa una función head(inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento.Utiliza destructuring.
const head = (number) => {
    const [firstnumber] = number
    return firstnumber;
};

const firstnumber = head(arrayNumbers);
console.log(firstnumber);

//Implementa una función tail(inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento.Utiliza rest operator.
const tail = (numbers) => {
    const [, ...rest] = numbers;
    return rest;
};

const numbersLessFirst = tail(arrayNumbers);
console.log(numbersLessFirst);

// Implementa una función init(inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último.Utiliza los métodos que ofrece Array.prototype.

const init = (numbers) => {
    return numbers.slice(0, -1)
};

const numbersLessLast = init(arrayNumbers);
console.log(numbersLessLast);

//Implementa una función last(inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last = (number) => {
    return number[number.length - 1];
};

const lastNumber = last(arrayNumbers);
console.log(lastNumber);

// 2. Concat

// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.

const arrayEven = [2, 4, 6, 8];
const arrayOdd = [1, 3, 5, 7];

const concat = (a, b) => {
    return [...a, ...b];
};

const result = concat(arrayEven, arrayOdd);
console.log(result)

// 3. Clone Merge

// Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:

const person = {
    name: 'Ana',
    age: 36,
    isStudent: true
};

function clone(source) {
    return { ...source }
};

const newObject = clone(person);

console.log(person);
console.log(newObject);

// Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

function merge(source, target) {
    const objectTarget = clone(target);

    for (const key in source) {
        if (source.hasOwnProperty(key)) {
            objectTarget[key] = source[key];
        };
    };

    return objectTarget;
}

const resultClone = merge(a, b);
console.log(resultClone);

// 4. Read Books

// Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro.Un libro es un objeto con title como string y isRead como booleano.En caso de no existir el libro devolver false TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.

const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

function isBookRead(books, titleToSearch) {
    const book = books.find((book) => book.title === titleToSearch);

    if (book) {
        return book.isRead;
    } else {
        return false
    };
};

console.log(isBookRead(books, "Devastación"));
console.log(isBookRead(books, "Canción de hielo y fuego"));
console.log(isBookRead(books, "Los Pilares de la Tierra"));

// 5. Slot Machine

class SlothMachine {
    constructor() {
        this.count = 0;
    }

    insertCount() {
        this.count++;
    };

    play() {
        this.insertCount();
        const result = this.generateRandomResults();
        this.displayResult(result);
    };

    generateRandomResults() {
        const results = [];

        for (let index = 0; index < 3; index++) {
            results.push(Math.random() < 0.5);
        };

        return results;
    };

    displayResult(results) {
        if (results.every(result => result === true)) {
            console.log(`Congratulations!!!. You won ${this.count} coins!!`);
            this.count = 0;
        } else {
            console.log("Good luck next time!!");
        };
    };
};

const machine1 = new SlothMachine();

machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();

