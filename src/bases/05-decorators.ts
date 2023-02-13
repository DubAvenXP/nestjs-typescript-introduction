class NewPokemon {
    constructor(public readonly id: number, public name: string) {}

    scream() {
        console.log(`${this.name} screams!`);
    }
    speak() {
        console.log(`Hello, I'm ${this.name}!`);
    }
}

// Class Decorator
const MyDecorator = () => {
    return (target: Function) => {
        console.log(target);
        return NewPokemon; // This is the new class
    };
};

@MyDecorator()
export class Pokemon {
    constructor(public readonly id: number, public name: string) {}

    scream() {
        console.log(`${this.name} screams!`);
    }
    speak() {
        console.log(`${this.name}, ${this.name}!`);
    }
}

const pokemon = new Pokemon(1, 'Pikachu');
pokemon.scream();
pokemon.speak();