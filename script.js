const div$$ = document.querySelector(".container");

const button$$ = document.querySelector('button');
button$$.innerText = "BUSCAR";

const divBuscador$$ = document.querySelector('.buscador');
const buscador$$ = document.querySelector('input');


const getPokemon = async () => {
    
    div$$.innerHTML = "";

    for (let i = 1; i < 152; i++) {
        const pokemonApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const pokemonRes = await pokemonApi.json();
         
       
        const pokemon = {
            nombre: pokemonRes.name.toUpperCase(),
            numero: pokemonRes.id,
            tamano: pokemonRes.height,
            peso: pokemonRes.weight,
            imagen: pokemonRes.sprites.other.dream_world.front_default,
        };
         
           

        const pokemonHTML = 
            `<div class="container__pokemon">
                <h2>${pokemon.nombre}</h2>
                <h3>${pokemon.numero}</h3>
                <h4>Tamaño: ${pokemon.tamano} dm</h4>
                <h4>Peso: ${pokemon.peso} lbs</h4>
                <div class="imagenpokemon">
                <img class="imagenpokemon--img" src="${pokemon.imagen}" alt="${pokemon.nombre}"/>
                </div>
            </div>`;
        

       if (buscador$$.value == ""){
        div$$.innerHTML += pokemonHTML;
       } else if (buscador$$.value.toUpperCase() == pokemon.nombre) {
           div$$.innerHTML = pokemonHTML;
       };   
    };
};


button$$.addEventListener("click", getPokemon); 
 
getPokemon(); 




