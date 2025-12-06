
/*
Author: Bryan Sevilla
Date:11/21/2025
File Name: main for lab 7
*/

fetchData();

async function fetchData(){

    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
        
    }
    catch(error){
        console.error(error);
    }

   }