import React, { useState, useEffect } from 'react';

import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg';

//157693c1 - API KEY OMDb
const API_URL = 'http://www.omdbapi.com?apikey=157693c1';

const movie1 = {
    "Title": "Superman Returns",
    "Year": "2006",
    "imdbID": "tt0348150",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDUzZGRhNzktYTZkMC00YWFiLTljMDEtMTk2OWJhYzAyYmY2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
}

const App = () => {

        const [movies, setMovies] = useState([]);
        const [searchTerm, setSearchTerm] = useState('');
        const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(()=>{
        searchMovies('Marvel');
    },[]);


    return ( 
        <div className = "app">
            <h1>MovieLand</h1>

            <dv className = 'search'>
                <input
                    placeholder="Search for movies"
                    Value = {searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <img
                    src={SearchIcon}
                    alt='search'
                    onClick={() => searchMovies(searchTerm)}
                />
            </dv>

            {
                movies?.length > 0
                ?(
                    <div className="container">        
                         {movies.map((movie)=>(
                            <MovieCard movie={movie}/>
                         ))}
                    </div>
                ) : (
                   <div>
                    <h2>No movies found</h2>
                   </div>
                )

            }


            
        </div>
     );
}

  export default App;