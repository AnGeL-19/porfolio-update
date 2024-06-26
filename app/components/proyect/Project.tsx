import { Card, CardFooter, CardHeader, Image } from '@nextui-org/react'
import React from 'react'
import { LinkPopover } from './LinkPopover'
import { ProjectI } from '@/data'

export const Project = ({name, img, routes, web}: ProjectI) => {
  return (
    <Card isFooterBlurred className="w-full md:min-w-[270px] h-[230px]">
        <CardHeader className="absolute z-10 top-0 flex-col items-start">
            <div className='absolute z-10 top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900 opacity-85'></div>
            <h4 className="relative z-20 text-white/90 font-medium text-xl">{name}</h4>
        </CardHeader>
        <Image
            removeWrapper
            isZoomed
            alt={name}
            className="z-0 w-full h-full object-cover"
            src={img}
        />
        <CardFooter className="absolute bg-white/20 bottom-0 z-10 dark:border-default-100">
            <div className="w-full flex justify-between">
                <LinkPopover text="Ir al sitio web" href={web} icon="/img/icons/square.svg"  />
                
                <div className="flex gap-2">
                    {
                        routes.repo_frontend && <LinkPopover text="Proyecto de frontend" href={routes.repo_frontend} icon="/img/icons/github.svg"  />
                    }
                    {
                        routes.repo_backend && <LinkPopover text="Proyecto de backend" href={routes.repo_backend} icon="/img/icons/github.svg"  />
                    }       
                </div>
            </div>
        </CardFooter>
    </Card>
  )
}
