'use client'
import React, { useState } from 'react'
import { ProjectWork } from '@/data'
import { Card, CardBody, CardHeader, Image, Listbox, ListboxItem, ScrollShadow } from '@nextui-org/react'


export const ProductWork = ({abbreviation, img, name, work_done}: ProjectWork) => {

    const [hover, setHover] = useState(false);


  return (
    <Card className="w-full sm:min-w-[260px] md:w-[260px] h-[150px] relative"
                                        onMouseEnter={() => setHover(true)}
                                        onMouseLeave={() => setHover(false)}
                                    >
        
        {
            img 
            ? 
            <Image 
                src={img} 
                removeWrapper
                alt="Card background"
                className="absolute top-0 left-0 w-full h-full object-cover"
                width={252} 
                height={150} 
            />
            : <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-gradient-medium to-gray-gradient-light'>
                    <div className='w-full h-full flex flex-col justify-center items-center gap-2'>
                        <Image src='/img/icons/code.svg' alt='code' width={36} height={36} />
                        <span className='text-white font-semibold text-xl'>{name}</span>
                    </div>
                </div>
        }
        {
            hover
            ?
            <div className='relative top-0 left-0 z-10 w-full h-full'>
                <div className='bg-black opacity-60 z-20 absolute w-full h-full'>
                </div>
                <div className='absolute z-30'>
                    <CardHeader className="flex-col !items-start pb-0">
                        <h4 className="text-white font-medium text-base">Trabajo que realice</h4>
                    </CardHeader>
                    <CardBody className='py-0'>
                        <ScrollShadow className="h-24 flex-col gap-1"
                        hideScrollBar 
                        offset={10}
                        >
                            {
                                work_done.map( done => (
                                    <span key={done} className='block text-white text-xs font-light'>* {done}.</span>
                                ))
                            } 
                        </ScrollShadow>
                    </CardBody>
                </div>
            </div>
            :
            <>
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-white/70 uppercase font-bold">Empresa</p>
                <h4 className="text-white font-medium text-large">{abbreviation}</h4>
                </CardHeader>
            </>
        }
        
    </Card>
  )
}
