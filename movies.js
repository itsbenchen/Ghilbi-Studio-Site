// Get main block (div element) for the data interface
const main = document.getElementById("main");

// Create a container for the API data
const container = document.createElement("div");
container.setAttribute("class", "container");

// Add container inside the main block
main.appendChild(container);

// Link to URL
const URL = "https://ghibliapi.herokuapp.com/films";

function createMovieCard(movie) {
    /* Creates a movie card with title, producer, director, release date, and a small description of movie */
    const card = document.createElement("div");
    card.setAttribute("class", "card"); // Sets the class to "card"

    const cardTitle = document.createElement("h1");
    cardTitle.textContent = movie.title;
    card.appendChild(cardTitle);

    const cardDirector = document.createElement("h2");
    cardDirector.textContent = "Directed by " + movie.director;
    card.appendChild(cardDirector);

    const cardProducer = document.createElement("h2");
    cardProducer.textContent = "Produced by " + movie.producer;
    card.appendChild(cardProducer);

    const cardReleaseDate = document.createElement("h2");
    cardReleaseDate.textContent = "Release Date: " + movie.release_date;
    card.appendChild(cardReleaseDate);

    const cardDescription = document.createElement("p");
    cardDescription.textContent = movie.description;
    card.appendChild(cardDescription);

    return card;
}

fetch(URL)
    .then(response => {
        return response.json()
    })
    .then(data => {
        for (var i = 0; i < data.length; i++) {
            /* Each movie object has these keys {id, title, description, director, producer, release_date, rt_score} */
            var movie = data[i]; // Movie Object from API
            
            /* Create a card with Title, Director, Producer, Release Date, and its movie description */
            const card = createMovieCard(movie);
            
            /* Add card to existing container */
            container.append(card);
        }
    })
    .catch(error => {
        alert("Error was found...\n" + error);
    });