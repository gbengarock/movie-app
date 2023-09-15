import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import SideNav from '../components/SideNav';
import config from '../config';

function MovieDetails() {
  
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  // Function to update screen width in state
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateScreenWidth);

    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);
  
  const hideComponentThreshold = 600; 
  const { id } = useParams(); 
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
   fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${config.API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
      });
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex'>
      {screenWidth > hideComponentThreshold ? (
    <div className='flex'>
      <SideNav />
      <div>
      <video className='w-full h-[300px]' controls>
        <source src={`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${config.API_KEY}`} type='video/mp4' />
      </video>
      <div className=''>
        <li className='flex'>
          <ul><h2 data-testid="movie-title" className='font-bold'>{movieDetails.title} </h2></ul>
          <ul><p data-testid="movie-release-date" className='mx-4 font-bold'>{new Date(movieDetails.release_date).toUTCString()}</p></ul>
          <ul><p data-testid="movie-runtime" className='mx-4 font-bold'>{Math.floor(movieDetails.runtime/60)+'h'+movieDetails.runtime%60+'m'}</p></ul>
        </li>
      </div>      
      <p data-testid="movie-overview" className='mt-5'>{movieDetails.overview}</p>
      <Footer />
    </div>
    </div>) : (
      <div className='mx-5 my-3'>
      <video className='w-full h-[300px]' controls>
        <source src={`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${config.API_KEY}`} type='video/mp4' />
      </video>
      <div className='mt-3'>
        <li className='flex'>
          <ul><h2 data-testid="movie-title" className='font-bold text-sm'>{movieDetails.title} </h2></ul>
          <ul><p data-testid="movie-release-date" className='mx-4 font-bold text-sm'>{new Date(movieDetails.release_date).toUTCString()}</p></ul>
          <ul><p data-testid="movie-runtime" className='mx-4 font-bold text-sm'>{Math.floor(movieDetails.runtime/60)+'h'+movieDetails.runtime%60+'m'}</p></ul>
        </li>
      </div>
      
      <p data-testid="movie-overview" className='my-8 text-base'>{movieDetails.overview}</p>
      <Footer />
    </div>
    
    )
}

</div>

    )
  
};

export default MovieDetails;
