import { FavoritePokemons } from "@/pokemons";


export const metadata = {
 title: 'favoritos',
 description: 'Favoritos description',
};


export default async function PokemonsPage() {


    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Pokemons favorittos <small className="text-blue-500">Global state</small></span>
            
            <FavoritePokemons />
        </div>
    );
}
