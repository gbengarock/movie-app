import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ( props ) => {
  

  return (
    <div className="card my-4" data-testid="movie-card">
      <Link to={`/movies/${props.id}`}>
      <img
        src={`https://image.tmdb.org/t/p/w500${props.img}`} 
        alt={props.title}
        className="movie-poster"
        data-testid="movie-poster"
      />
      <p className="movie-release-date text-left text-gray-400 text-xl lg:text-xs my-2" data-testid="movie-release-date">{props.releaseDate}</p>
      <h2 className="movie-title font-bold text-left text-2xl lg:text-base" data-testid="movie-title">{props.title}</h2>
      
      </Link>
    </div>
  );
};

export default MovieCard;
