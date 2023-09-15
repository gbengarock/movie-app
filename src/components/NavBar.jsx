import React from 'react';
import tv from '../assets/tv.png';
import MovieSearch from './MovieSearch';
import { Link } from 'react-router-dom';

function NavBar() {
  
  return (
    <div className='w-full py-5 px-[8%] items-center flex fixed top-0 justify-between'>
      
      <div className='flex py-2'>
        <img src={tv} alt='/' className='w-[25px] h-[25px] mr-9 sm:mr-5' />
        <h1 className='font-bold text-xl hidden sm:flex sm:text-white'>MovieBox</h1>
      </div>
      
        <MovieSearch />
      
      <div className=''>
        <Link className='sm:text-white text-xs sm:text-sm'>Login</Link>
      </div>

    </div>
  );
}

export default NavBar;
