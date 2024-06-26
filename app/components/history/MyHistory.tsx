import React from 'react'
import { AccordionStudies } from '../accordion/AccordionStudies'
import { AccordionWorks } from '../accordion/AccordionWorks'

export const MyHistory = () => {
  return (
    <section className='flex flex-col gap-4'>
        <h2 className="font-bold text-xl text-yellow-light">Mi historia</h2>

        <div className='flex flex-col gap-2'>
          <h3 className="font-medium text-lg text-white">Estudios</h3>
          <AccordionStudies />

          <h3 className="font-medium text-lg text-white">Trabajos</h3>
          <AccordionWorks />
        </div>
        

    </section>
  )
}
