interface Pokemon {
    id: number;
    name: string;
    hp: number;
    isAlive: boolean;
    type: string;
    level: number;
    attack: number;
    defense: number;
    speed: number;
    moves?: string[];
}

export const pokemonIds: number[] = [1, 2, 3, 4, 5];
pokemonIds.push(6);

export const pikachu: Pokemon = {
    id: 1,
    name: 'Pikachu',
    hp: 100,
    isAlive: true,
    type: 'electric',
    level: 50,
    attack: 50,
    defense: 50,
    speed: 50,
    moves: ['Thunder Shock', 'Thunderbolt', 'Thunder', 'Thunder Punch']
};

export const pokemons: Pokemon[] = [];
pokemons.push(pikachu);