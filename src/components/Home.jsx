/* eslint-disable no-unused-vars */
import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import PORT from './../components/portfpic.jpg';

const Home = () => (
  <div name='home' className='w-full paddding left h-screen bg-[#0a192f]'>
    {/* Container */}
    <div className='max-w-[1000px] mx-auto pt-8 flex flex-col justify-center h-full'>
      <p className='text-pink-600 pb-4'>Hi, my name is</p>
      <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
        Rocko Gilbert
      </h1>
      <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0] pb-9'>
        Full Stack Developer
      </h2>

    <div className flex >
        <img src={PORT} alt="Rocko" height="300" width="300"/>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        While my focus is on building responsive full-stack web applications, I'm equally as excited to continue learning, growing professionally, and personally as a developer.  
      </p>
    </div>
    </div>
  </div>);

export default Home;
