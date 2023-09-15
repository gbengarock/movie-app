import React from 'react';
import {FaFacebookF, FaYoutube} from 'react-icons/fa';
import {AiFillInstagram, AiOutlineTwitter, AiFillCopyrightCircle} from 'react-icons/ai';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className=''>
        <div className='min-w-[90%] lg:min-w-[70%] xl:max-w-[70%] mx-auto'>
          <div className='items-center mx-auto text-center'>
            <div className='flex mt-5 sm:mt-20 mx-auto justify-center'>
              <FaFacebookF className='mx-3'/>
              <AiFillInstagram className='mx-3'/>
              <AiOutlineTwitter className='mx-3'/>
              <FaYoutube className='mx-3' />
            </div>
            <div className='my-3 text-xs sm:text-base sm:my-5'>
              <Link className='mx-5'>Conditions of Use</Link>
              <Link className='mx-5'>Privacy & Policy</Link>
              <Link className='mx-5'>Press Room</Link>
            </div>
            <div className='flex justify-center mt-3 text-xs sm:text-base sm:my-5'>
              <AiFillCopyrightCircle size={20} className='m-1' />
              <p className='text-gray-400'>2021 MovieBox by Gbengarock</p>
            </div>
          </div>
        </div>       
      </div>
                )
}

export default Footer