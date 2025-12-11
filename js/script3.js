
/* Bryan Sevilla
date:12/82025
assignment: script3 for project 4. Index */




// Character list.   I don't understand why it needs a code
const houses = [
  {
    code: "ST",
    name: "Pikachu"
  },
  {
    code: "LA",
    name: "Charizard"
  },
  {
    code: "BA",
    name: "Mew"
  },
  {
    code: "TA",
    name: "Squirtle"
  }
];


const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Classified as an Electric-type Pokemon, Pikachu is a large yellow mouse with a lightning bolt-shaped tail, and red sacs on its cheek which can generate large amounts of electricity."];
    case "LA":
      return ["Charizard is regarded as one of the most famous and popular Pokemon, and has received positive reception from fans and the media since its debut into the series. "];
    case "BA":
      return ["Mew is one of the many fictional species in the Pokémon franchise. It is a small, pink, Psychic-type Mythical Pokémon, which are incredibly rare and powerful Pokémon typically available only via special events."];
    case "TA":
      return ["Squirtle is a Water type Pokemon.  Squirtle is a reptilian. It has blue body with purple eyes.  It has a long tail that curls into a spiral."];
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