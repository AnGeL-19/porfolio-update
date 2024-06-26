import React from 'react'
import { Project } from './Project'
import { projects } from '@/data'

export const MyProjects = () => {
  return (
    <section className='flex flex-col gap-4'>
        <h2 className="font-bold text-xl text-green-light">Mis Proyectos</h2>
          
        <div className='grid grid-cols-auto-fit-project gap-5'>
          {
            projects.map( ({id,img,name,routes,web}) => (
              <Project key={id} img={img} name={name} routes={routes} web={web} />
            ))
          }

        </div>

    </section>
  )
}
