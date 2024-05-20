import React from 'react';
import { PROJECTS } from '../index';

const Work = () => {
  return (
    <div name='work' className='w-full min-h-screen bg-[#0a192f] text-gray-300 py-8'>
      <h1 className='text-center text-4xl font-bold mb-8  border-b-4 border-purple-300'>Experience</h1>
      <div className='max-w-7xl mx-auto px-4'>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap items-center justify-center'>
            <div className='w-full md:w-1/2 lg:w-1/4 mb-6'>
              <img
                src={project.image}
                width={150}
                height={150}
                className='rounded'
                alt={project.title}
              />
            </div>
            <div className='w-full md:w-1/2 lg:w-3/4 mb-6 md:pl-8'>
              <h2 className='text-2xl font-bold mb-2'>{project.title}</h2>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              <div className='flex flex-wrap'>
                {project.technologies.map((tech, index) => (
                  <span key={index} className='mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
