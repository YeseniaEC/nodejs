const person = {
    name: 'Jane Doe',
    age: 25
};

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }
}


//module.exports = person;
module.exports = Person;
