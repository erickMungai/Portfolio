import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name = 'home' className='w-full h-screen bg-[#0a192f]'>

        {/*container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-purple-300'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'> Erick Kariuki</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I am a dedicated Full Stack Developer with expertise in JavaScript, React, and Node.js. 
                I build dynamic, responsive web applications and thrive on solving complex problems with innovative solutions. 
                My passion lies in creating high-quality, scalable software that exceeds user expectations.</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-300 hover:border-purple-300'>View Work 
                 <span className='group-hover:rotate-90 duration-300'>
                 <HiArrowNarrowRight className='ml-3 hover:'/>
                 </span>

                </button>
            </div>

        </div>

    </div>
  )
}

export default Home