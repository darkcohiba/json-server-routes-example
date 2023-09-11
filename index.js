function fetchMovies(){
    console.log("fetching movies")
    fetch('http://localhost:3000/movie')
    .then(response => response.json())
    .then(data => createMovieOptions(data))
}

function createMovieOptions(movies){
    const movieDropDownList = document.querySelector('#movieList')
    movies.forEach((movie, index)=>{
        console.log(movie, index)
        const movieDropDown = document.createElement("option")
        movieDropDown.value = index + 1
        movieDropDown.textContent = movie.title
        movieDropDownList.append(movieDropDown)
    })

}

const movieForm = document.querySelector("#movieForm")
movieForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const genres = e.target.genre.value.split(',')
    // console.log(genres)
    const movieObj = {
        "title": e.target.title.value,
        "year": Number(e.target.year.value),
        "summary": e.target.summary.value,
        "genre": genres
    }
    console.log(movieObj)
})

const performerForm = document.querySelector("#performerForm")
performerForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const performerObj = {
            "name": e.target.name.value,
            "movieId":  Number(e.target.movieId.value),
            "age": Number(e.target.age.value)
    }
    console.log(performerObj)
})

fetchMovies()