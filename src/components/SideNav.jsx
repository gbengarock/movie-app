import React from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import {BsCameraReels, BsCalendar3} from 'react-icons/bs';
import {PiTelevisionDuotone} from 'react-icons/pi';
import {BiLogOut} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import tv from '../assets/tv.png';

const SideNav = () => {
  
  return (
    <div className='w-[20%] border-2 border-gray-400 rounded-br-3xl rounded-tr-3xl mr-5 h-full'>
      <div className='flex m-4'>
        <img src={tv} alt='/' className='w-[25px] mr-5' />
        <h1 className='font-bold text-xl'>MovieBox</h1>
      </div>
      <Link className='text-xl flex p-4 hover:bg-red-100 hover:text-red-800'>
        <AiOutlineHome size={25} className='mr-5'/>
        <h1>Home</h1>
      </Link>
      <Link className='text-xl flex p-4 bg-red-100 text-red-800 border-r-4 border-r-red-900'>
        <BsCameraReels size={25} className='mr-5' />
        <h1>Movies</h1>
      </Link>
      <Link className='text-xl flex p-4 hover:bg-red-100 hover:text-red-800'>
        <PiTelevisionDuotone size={25} className='mr-5' />
        <h1>TV Series</h1>
      </Link>
      <Link className='text-xl flex p-4 hover:bg-red-100 hover:text-red-800'>
        <BsCalendar3 size={25} className='mr-5' />
        <h1>Upcoming</h1>
      </Link>
      <div className='text-xl my-8 mx-4 pt-5 text-center border border-red-400 bg-red-100 p-2 rounded-lg'>
        <h1 className='font-bold text-base'>Play movie quizes and earn free tickets</h1>
        <p className='text-sm'>50k people are playing now</p>
        <button className='bg-red-400 font-bold p-2 rounded-full text-xs my-2'>Start playing</button>
      </div>
      <Link className='text-xl flex m-4 hover:text-red-800'>
        <BiLogOut size={25} className='mr-5' />
        <h1>Log out</h1>
      </Link>

      
    </div>
  )
}

export default SideNav