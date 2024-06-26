import React from 'react'
import { Skills } from './Skills'
import { skills } from '@/data'

export const MySkills = () => {
  return (
    <section className='flex flex-col gap-4'>
        <h2 className="font-bold text-xl text-blue-light">Habilidades</h2>
        <div className='flex flex-col gap-2'>
            <h3 className="font-medium text-lg text-white">Lenguajes de programacion</h3>
            <Skills skills={skills.lenguage} />
        </div>
        <div className='flex flex-col gap-2'>
            <h3 className="font-medium text-lg text-white">Frameworks y blibliotecas</h3>
            <Skills skills={skills.frameworks} />
        </div>
        <div className='flex flex-col gap-2'>
            <h3 className="font-medium text-lg text-white">Diseño</h3>
            <Skills skills={skills.disign} />
        </div>
        <div className='flex flex-col gap-2'>
            <h3 className="font-medium text-lg text-white">Otros</h3>
            <Skills skills={skills.others} />
        </div>        
    </section>
  )
}
