import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '../config';

function MovieSearch() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSearch = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${config.API_KEY}&query=${query}`
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error searching for movies:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      handleSearch();
    } else {
      // Clear search results if the query is empty
      setSearchResults([]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div className=''>
      <div className='flex'>       
      <input className='items-center w-[200px] sm:w-[400px] h-[30px] p-2 m-1 sm:m-0 border-solid border-4 border-gray-600 sm:border-gray-50 rounded-lg'
        type="text"
        placeholder="What do you want to watch?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch} className='hidden sm:flex mx-2 rounded-lg border-solid border-4 border-gray-50 text-white px-4 h-[30px]'>Search</button>
      </div>
      {isLoading && <p>Loading...</p>}
      <ul className='w-[400px]'>
      
        {searchResults.map((movie) => (
          <Link to={`/movies/${movie.id}`}>
          <li className='flex my-2' key={movie.id}>
            <img className='w-[100px] h-[100px]' src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title} />
            <div className='mx-3'>
              <h2 className='sm:text-white text-left'>{movie.title}</h2>
              <p className='sm:text-gray-400 text-sm text-left'>{new Date(movie.release_date).getFullYear()}</p>
            
            </div>
          </li>
          </Link>
        ))}
        
      </ul>
    </div>
  );
}

export default MovieSearch;
