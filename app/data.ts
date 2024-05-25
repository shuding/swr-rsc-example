export async function getPokemon(id: number | string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const json = await res.json();
  return {
    name: json.name,
    image: json.sprites.other.dream_world.front_default,
  };
}
