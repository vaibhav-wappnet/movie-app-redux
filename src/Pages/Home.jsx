import React, { useEffect } from 'react'
import MovieList from "../Components/Component/MovieList";
import movieAPI from '../Common/APIs/movieAPI';
import { APIKey } from '../Common/APIs/movieAPIKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../Features/Movies/movieSlice';


const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieAPI
        .get(`?apikey=${APIKey}&s=Fast&type=movie`)
        .catch((error) => {
          console.log('error : ', error)
        });
      dispatch(addMovies(response.data));
    }
    fetchMovies()
  }, [])

  return (
    <div className="list-container">
      <MovieList />
    </div>
  )
}

export default Home;