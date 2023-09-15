import React, { useEffect, useState } from 'react';
import description from '../assets/description.png';
import MovieCard from '../components/Card';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import config from '../config';

const Homepage = () => {

    const [movieList, setMovieList] = useState('');
    console.log(config.API_KEY);
    const getMovie = () =>{
      fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${config.API_KEY}`)
      .then(res => res.json())
      .then(json => setMovieList(json.results))
      .catch(err => console.log(err))
    }
    useEffect(()=>{
      getMovie()
    },[])

    const createMovie = (movie) => {
      return (
        <MovieCard key={movie.index} id={movie.id} img={movie.poster_path} title={movie.title} releaseDate={new Date(movie.release_date).getFullYear()} />
      )
    }

  return (
    <div>
      {/* hero section */}
      <div className='hidden sm:flex bg-headerImg relative bg-cover h-[550px]'>
        
        <img src={description} alt='description box' className='p-24 absolute' />
      </div>
      <NavBar />
      <div className='w-[90%] mx-[5%]'>
      <h1 className='text-3xl font-bold mt-20 sm:my-3'>Featured Movie</h1>
      <div className='w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center py-8'>
        {movieList && movieList.map(createMovie).slice(0,10)}
      
      </div>
      
      </div>
      <Footer />
    </div>
  )
}

export default Homepage