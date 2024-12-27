const movieContainer = document.getElementById("movieContainer");
const searchMovie = document.getElementById("searchMovie");
const userInput = document.getElementById("userInput");

const apiKey = "50739ff8";

searchMovie.addEventListener("click", ()=> {
    const userSearch = userInput.value.trim();

    if (userSearch == "") {
        return;
    }

    const apiUrl = `http://www.omdbapi.com/?s=${encodeURIComponent(userSearch)}&apikey=${apiKey}`; 

    fetch (apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.Response === "False") {
                console.error(`Movie not found: ${data.Error}`);
                movieContainer.innerHTML = `<p>Movie not found: ${data.Error}</p>`; 
            } else {
                displayMovies(data.Search); 
            }
        })
        .catch(error => {
            console.error(`Fetch error: ${error.message}`);
        });
     });

        (movies) => {
             movieContainer.innerHTML = ""; 
                movies.forEach(movie => {
                    const movieDiv = document.createElement("div"); 
                    movieDiv.classList.add("movie");
            
                    const title = document.createElement("p");
                    title.textContent = movie.Title;
                    title.classList.add("title");
                    movieDiv.appendChild(title);
            
                    const poster = document.createElement("img");
                    poster.src = movie.Poster !== "N/A" ? movie.Poster : "placeholder-image.jpg";
                    poster.alt = `${movie.Title} Poster`;
                    poster.classList.add("movie-image");
                    movieDiv.appendChild(poster);
            
                    movieContainer.appendChild(movieDiv);
                });
        }


