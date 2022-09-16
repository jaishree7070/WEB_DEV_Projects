const superHeroToken = 100847632793064;
const random = () => Math.floor((Math.random() * 731) + 1);
const heroImg = document.getElementById("heroImage");
const randomBtn = document.getElementById('newHeroButton');
const searchBtn = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const BASE_URL = `https://superheroapi.com/api.php/${superHeroToken}`;

const statToEmoji = {
    intelligence: '🧠',
    strength: '💪',
    speed: '⚡',
    durability: '🏋️‍♂️',
    power: '📊',
    combat: '⚔️',
}

const showHeroInfo = (character) => {
    const name = `<h2>${character.name}</h2>`

    const img = `<img src="${character.image.url}" height=500 width=500/>`

    const stats = Object.keys(character.powerstats).map(stat => {
        return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
    }).join('')

    heroImg.innerHTML = `${name}${img}${stats}`
}

// <p>💪 Strength: ${json.powerstats.strength}</p><p>🧠 Intelligence: ${json.powerstats.intelligence}</p><p>🧠 Combat: ${json.powerstats.intelligence}</p><p>🧠 Speed: ${json.powerstats.intelligence}</p><p>🧠 Durability: ${json.powerstats.intelligence}</p>

const getSuperHero = (id, name) => {
    fetch(`${BASE_URL}/${id}`)
        .then(response => response.json())
        .then(json => {
            console.log(json.powerstats);
            const superHero = json;
            showHeroInfo(superHero);
        })
    }

const getSearchSuperHero = (name) => {
        console.log(searchInput.value)
        fetch(`${BASE_URL}/search/${name}`)
            .then(response => response.json())
            .then(json => {
                const hero = json.results[0]
                showHeroInfo(hero)
            })
    }



    randomBtn.onclick = () => getSuperHero(random());
    searchBtn.onclick = () => getSearchSuperHero(searchInput.value);
