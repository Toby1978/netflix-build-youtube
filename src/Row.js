import axios from './axios';
import React, {useState, useEffect} from 'react'
import "./Row.css"

 

function Row({ title, fetchUrl, isLargeRow = false }) {
    const baseImg_url = 'https://image.tmdb.org/t/p/original/'
    const [movies, setMovies] = useState([])
  
    useEffect(() => {
      async function fetchData() {
        const request = await axios.get(fetchUrl)
        setMovies(request.data.results)
        return request
      }
  
      fetchData()
    }, [fetchUrl]); console.log(movies)
  
    return (
      <div className="row">
        <h2>{title}</h2>
        <div className="row__posters">
          {movies.map(movie => 
            ((isLargeRow && movie.poster_path) || 
            (!isLargeRow && movie.backdrop_path)) && 
            (
              <img 
                key={movie.id}
                className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                src={baseImg_url + (isLargeRow ? movie.poster_path : movie.backdrop_path)} 
                alt=""
              />
            )
          )}
        </div>
      </div>
    )
  }
  
  export default Row