import React from 'react'
import { useSelector } from "react-redux";
import { getAllMovies } from "../../Features/Movies/movieSlice"
import MovieDetail from "../../Pages/MovieDetail"

const MovieList = () => {

  const movies = useSelector(getAllMovies);
  // let renderMovies = "";

  console.log("movies", movies);
  let renderMovies = movies.response === true
    ? (
      movies.Search.map((movie) => {
        return (
          <MovieDetail key={movie.id} data={movie} />
        )
      })
    )
    : (
      <div className="movie-error">
        <h3>{movies.error}</h3 >
      </div >
    )
  console.log(movies.response);

  return (
    <div className="movie-list">
      <h2>movies</h2>
      <div className="movie-container">
        {renderMovies}
      </div>
    </div>
  )
}

export default MovieList;