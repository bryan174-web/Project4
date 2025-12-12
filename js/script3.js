
/* Bryan Sevilla
date:12/82025
assignment: script3 for project 4. Index */




// Character list.   I don't understand why it needs a code
const houses = [
  {
    code: "a",
    name: "Pikachu"
  },
  {
    code: "b",
    name: "Charizard"
  },
  {
    code: "c",
    name: "Mew"
  },
  {
    code: "d",
    name: "Squirtle"
  }
];


const getCharacters = houseCode => {
  switch (houseCode) {
    case "a":
      return ["Classified as an Electric-type Pokemon, Pikachu is a large yellow mouse with a lightning bolt-shaped tail, and red sacs on its cheek which can generate large amounts of electricity.","Abilities: In battle, Pikachu's primary ability is Static, which has a 30% chance of paralyzing an opponent that makes contact with it. Its hidden ability, Lightning Rod, forces all single-target Electric-type attacks to strike it, preventing allies from being hit in double battles.","Evolution: Pikachu is the middle stage in a three-part evolution line:"];
    case "b":
      return ["Charizard is regarded as one of the most famous and popular Pokemon, and has received positive reception from fans and the media since its debut into the series. ","Evolution: The Charizard evolution line progresses from the baby form Charmander to Charmeleon at level 16, and finally to Charizard at level 36. "];
    case "c":
      return ["Mew is one of the many fictional species in the Pokemon franchise. It is a small, pink, Psychic-type Mythical Pokemon, which are incredibly rare and powerful Pokemon typically available only via special events."," It is considered by many scientists within the Pokemon universe to be the ancestor of all other Pokemon species, and its DNA was used to create its powerful clone, Mewtwo."];
    case "d":
      return ["Squirtle is a Water type Pokemon.  Squirtle is a reptilian. It has blue body with purple eyes.  It has a long tail that curls into a spiral.","When threatened, it can retract its limbs into its shell and forcefully spray water from its mouth.","Evolution: Squirtle is the first stage in a three-part evolution line"];
    default:
      return ["No house selected"]; 
  }
};

// wait for the html to load
document.addEventListener('DOMContentLoaded', init);

function init() {
  //create reference to the select list
  let house = document.getElementById('house');
  
 
  // loop through array and create an option tag for each item in the array.
  houses.forEach( (item) => {
    const option = document.createElement('OPTION');
    option.value = item.code;
    option.innerText = item.name;
    house.appendChild(option);
    // build the option and append it to the dropdown.

  });

   // display a list of the Pokemon
  // when the select list has changed.
  house.addEventListener('change', (e) => {
    
    const code = e.target.value;
    let members = getCharacters(code);
   
    // DOM ref for ul to display members
    const container = document.getElementById('characters');
    
    // clear out any previous member names
    container.innerHTML = '';
   
    // create the li's and append to the ul
    members.forEach((person)=> {
      let item = document.createElement('LI');
      item.innerText = person;
      container.appendChild(item);
    });
    
  }); //end addEventListener - change
 
} //end init

// Fetch Pokemon
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

  // Function to fetch dog image
        function fetchDog() {
            fetch("https://dog.ceo/api/breeds/image/random")
                .then(response => response.json())
                .then(data => {
                    document.getElementById("dogImage").src = data.message;
                })
                .catch(error => {
                    console.error("Error fetching image:", error);
                });
        }

        // Load one dog automatically on page start
        fetchDog();