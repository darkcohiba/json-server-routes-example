const performerURL = "http://localhost:3000/performers"
const moviesURL = "http://localhost:3000/movie"

function fetchMovies() {
    fetch(moviesURL)
        .then(response => response.json())
        .then(data => createMovieOptions(data))
}

function createMovieOptions(movies) {
    const movieDropDownList = document.querySelector('#movieList')
    movies.forEach((movie, index) => {
        const movieDropDown = document.createElement("option")
        movieDropDown.value = index + 1
        movieDropDown.textContent = movie.title
        movieDropDownList.append(movieDropDown)
    })
}

const movieForm = document.querySelector("#movieForm")
movieForm.addEventListener("submit", (e) => {
    const movieResponseSpace = document.querySelector('#movieObject')
    e.preventDefault()
    const genres = e.target.genre.value.split(',')
    // console.log(genres)
    const movieObj = {
        "title": e.target.title.value,
        "year": Number(e.target.year.value),
        "summary": e.target.summary.value,
        "genre": genres
    }

    // movieResponseSpace.textContent = JSON.stringify(movieObj);
    // {"title":"asdf","year":1222,"summary":"asdfasdf","genre":["asdf","dasf"]}
    movieResponseSpace.textContent = JSON.stringify(movieObj, null, 2);
    // { "title": "asdf", "year": 2019, "summary": "asdf", "genre": [ "asdf", "afasdf" ] }
    fetch(moviesURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(movieObj)
    })

})

const performerForm = document.querySelector("#performerForm")
performerForm.addEventListener("submit", (e) => {
    const performerResponseSpace = document.querySelector('#performerObject')
    e.preventDefault()
    const performerObj = {
        "name": e.target.name.value,
        "movieId": Number(e.target.movieId.value),
        "age": Number(e.target.age.value)
    }
    performerResponseSpace.textContent = JSON.stringify(performerObj, null, 2);
    fetch(performerURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(performerObj)
    })
})

fetchMovies()