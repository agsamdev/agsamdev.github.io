const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");

searchBtn.addEventListener("click", () => {
    // Get the input value when the button is clicked
    const searchValue = searchInput.value.toLowerCase().trim();

    if (!searchValue) {
        alert("Please enter a Pokémon name or ID.");
        return;
    }

    fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchValue}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error("Pokémon not found");
            }
            return res.json();
        })
        .then((data) => {
            // Update the DOM with Pokémon data
            document.getElementById("pokemon-name").textContent = data.name.toUpperCase();
            document.getElementById("pokemon-id").textContent = `#${data.id}`;
            document.getElementById("weight").textContent = `Weight: ${data.weight}`;
            document.getElementById("height").textContent = `Height: ${data.height}`;
            document.getElementById("sprite").src = data.sprites.front_default;
            document.getElementById("sprite").alt = data.name;

            // Clear previous types and add new ones
            const typesElement = document.getElementById("types");
            typesElement.innerHTML = '';
            data.types.forEach(type => {
                const typeElement = document.createElement("span");
                typeElement.textContent = type.type.name.toUpperCase();
                typeElement.classList.add("type", type.type.name);
                typesElement.appendChild(typeElement);
            });

            // Update stats
            data.stats.forEach(stat => {
                const statName = stat.stat.name.replace("-", " ");
                const statValue = stat.base_stat;

                switch (statName) {
                    case "hp":
                        document.getElementById("hp").textContent = `HP: ${statValue}`;
                        break;
                    case "attack":
                        document.getElementById("attack").textContent = `Attack: ${statValue}`;
                        break;
                    case "defense":
                        document.getElementById("defense").textContent = `Defense: ${statValue}`;
                        break;
                    case "special attack":
                        document.getElementById("special-attack").textContent = `Special Attack: ${statValue}`;
                        break;
                    case "special defense":
                        document.getElementById("special-defense").textContent = `Special Defense: ${statValue}`;
                        break;
                    case "speed":
                        document.getElementById("speed").textContent = `Speed: ${statValue}`;
                        break;
                    default:
                        break;
                }
            });

            // Show the Pokémon info section
            document.getElementById("pokemon-info").classList.add("active");
        })
        .catch((err) => {
            alert(err.message);
            console.error(err);
        });
});

// Optional: Add enter key support
searchInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        searchBtn.click();
    }
});

searchInput.required = true;

