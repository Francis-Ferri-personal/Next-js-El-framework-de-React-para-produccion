import { PokemonGrid, PokemonResponse, SimplePokemon } from "@/pokemons";


export const metadata = {
 title: '151 Pokemons',
 description: '151 Pokemons description',
};
const getPokemons = async (limit = 20, offset = 0):Promise<SimplePokemon[]> => {
    const data: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`).then(res => res.json());

    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!, 
        name: pokemon.name
    }))

    // throw new Error('Esto es un error que no deberia suceder');

    return pokemons;
}

export default async function PokemonsPage() {

    const pokemons = await getPokemons(151);

    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Listado de Pokemóns <small className="text-blue-500">estatico</small></span>
            
            <PokemonGrid pokemons={pokemons}/>
        </div>
    );
}