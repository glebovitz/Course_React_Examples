class Person {
    constructor(name = 'Guest', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi I am ${ this.name }!`
    }
    getDescription() {
        return `${this.name} is ${this.age} years(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, home) {
        super(name, age);
        this.homeLocation = home;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if (this.hasHomeLocation()) {
            greeting += ` I am visiting from ${this.homeLocation}.`
        }
        return greeting;
    }
}

const me = new Traveler('Gregg Lebovitz', 61, 'Brookline');

console.log(me);
console.log(me.getGreeting());

const other = new Traveler();
console.log(other);
console.log(other.getGreeting());
