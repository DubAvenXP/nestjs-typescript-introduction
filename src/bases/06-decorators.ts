const Deprecated = (deprecationReason: string) => {
    return (
        _target: any,
        memberName: string,
        propertyDescriptor: PropertyDescriptor
    ) => {
        // console.log({target})
        return {
            get() {
                const wrapperFn = (...args: any[]) => {
                    console.warn(
                        `Method ${memberName} is deprecated with reason: ${deprecationReason}`
                    );
                    //! Llamar la función propiamente con sus argumentos
                    propertyDescriptor.value.apply(this, args);
                };
                return wrapperFn;
            },
        };
    };
};


export class Pokemon {
    constructor(public readonly id: number, public name: string) {}

    scream() {
        console.log(`${this.name} screams!`);
    }
    @Deprecated('Use speak2 instead')
    speak() {
        console.log(`${this.name}, ${this.name}!`);
    }
    speak2() {
        console.log(`Hello, I'm ${this.name}!`);
    }
}

const pokemon = new Pokemon(1, 'Pikachu');
pokemon.scream();
pokemon.speak();
pokemon.speak2();