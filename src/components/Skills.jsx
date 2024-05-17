import React from 'react'
import JavaScript from '../assets/javascript.png'
import java from '../assets/Java.png'
import Mongo from '../assets/mongo.png'
import Reactimg from '../assets/react.png'
import AWS from '../assets/aws.png'
import Tailwindimg from '../assets/tailwind.png'
import Springboot from '../assets/Springboot.png'
import CSSImg from '../assets/css.png'

const Skills = () => {
  return (
    <div name='skills' className=' w-full h-screen bg-[#0a192f]  text-gray-300'>
        {/*containter*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
            <p className='text-4xl font-bolc inline border-b-4 border-purple-300'>Skills</p>
            <p className='py-4'>//These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto' src={AWS} alt='AWS icon'/>
                <p className='my-4'>AWS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto' src={Reactimg} alt='AWS icon'/>
                <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto' src={Tailwindimg} alt='AWS icon'/>
                <p className='my-4'>TailWind</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto' src={CSSImg} alt='AWS icon'/>
                <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto' src={Mongo} alt='AWS icon'/>
                <p className='my-4'>Mongo DB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto' src={JavaScript} alt='AWS icon'/>
                <p className='my-4'>Javascript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto' src={Springboot} alt='AWS icon'/>
                <p className='my-4'>Spring Boot</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto' src={java} alt='AWS icon'/>
                <p className='my-4'>Java</p>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Skills