import {
    Move,
    PokeAPIResponse,
} from "../interfaces/pokeapi-response.interface";
import { HttpAdapter, PokeApiAdapter, PokeApiFetchAdapter } from "../api/pokeApi.adapter";

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
        public type: string,
        private readonly http: HttpAdapter
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
        const data = await this.http.get<PokeAPIResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        return data.moves;
    }
}

const pokeApiAdapter = new PokeApiAdapter();
const pokeApiFetchAdapter = new PokeApiFetchAdapter();

export const charmander = new Pokemon("Charmander", 39, 52, 43, 65, "Fire", pokeApiAdapter);
export const charmanderFetch = new Pokemon("Charmander", 39, 52, 43, 65, "Fire", pokeApiFetchAdapter);
