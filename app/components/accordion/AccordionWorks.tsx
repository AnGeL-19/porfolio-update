'use client'
import React from 'react'
import { works } from '@/data'
import { Accordion, AccordionItem, Avatar, Card, CardHeader, Image } from '@nextui-org/react'
import Link from 'next/link'
import { ProductWork } from './ProductWork'


export const AccordionWorks = () => {



    return (
        <Accordion selectionMode="multiple" className="p-0">
          
          {
            works.map( ({id,title,subtitle,description,date,img,link,proyects}) => (
              <AccordionItem
                    key={id}
                    aria-label={title}
                    startContent={
                      <Avatar
                        size="md"
                        radius="sm"
                        src={img}
                      />
                    }
                    className="text-white bg-dark-bold rounded-xl px-4 mb-2"
                    title={
                      <div className="w-full flex justify-between">
                        <span className="text-base font-bold text-white">{title}</span>
                        <span className="text-sm font-light text-white">{date}</span>
                      </div>
                      
                    }
                    subtitle={
                      <span className="text-sm text-gray-50">{subtitle}</span>
                    }
                  >
                    <>
                        <p className='text-white text-base mb-2'>{description}</p>

                        <Link href={link} target='_blank' className='text-blue-link text-sm hover:underline mb-4'>
                            Visitar sitio Web
                        </Link>

                        <h4 className='font-semibold text-white text-base'>Proyectos en los que participe</h4>
                        <div className='grid grid-cols-auto-fit-project-work gap-5 py-2'>
                            {
                                proyects.map( ({id,name,abbreviation,img,work_done}) => (
                                    <ProductWork key={id} name={name} abbreviation={abbreviation} img={img} work_done={work_done} />
                                ))
                            }
                        </div>
                    </>     
              </AccordionItem>
            ))
      
          }
          
        </Accordion>
    
      )
}
