import axios from "axios";
import { Move, PokeAPIResponse } from "../interfaces/pokeapi-response.interface";

export class Pokemon {
    public readonly id: number;
    public readonly isAlive: boolean = true;
    public level: number = 1;

    get imageUrl(): string {
        return `https://pokemon.com/sprites/pokemon/${this.id}.png`;
    }

    constructor(
        public name: string,
        public hp: number,
        public attack: number,
        public defense: number,
        public speed: number,
        public type: string
    ) {
        this.id = 4;
    }

    scream(): void {
        console.log(`${this.name} screams`);
    }

    speak(): void {
        console.log(`${this.name}, ${this.name}`);
    }

    async getMoves(): Promise<Move[]> {
        const { data } = await axios.get<PokeAPIResponse>(
            `https://pokeapi.co/api/v2/pokemon/${this.id}`
        );
        return data.moves;
    }
}

export const charmander = new Pokemon("Charmander", 39, 52, 43, 65, "Fire");

console.log(charmander);
console.log(charmander.imageUrl);

charmander.scream();
charmander.speak();

console.log(charmander.getMoves());

// charmander.id = 1; // Error: Cannot assign to 'id' because it is a read-only property.
