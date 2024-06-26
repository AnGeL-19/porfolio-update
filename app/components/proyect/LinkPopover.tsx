'use client'
import React, { useState } from 'react'
import { Image, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import Link from 'next/link'

interface Props{
    text: string;
    icon: string;
    href: string;
}


export const LinkPopover = ({icon,text,href}: Props) => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <Popover isOpen={isOpen} 
        
        placement="top" 
        offset={20} 
        showArrow
    >
        <PopoverTrigger
            onMouseEnter={() => setIsOpen(true)} 
            onMouseLeave={() => setIsOpen(false)} 
        >
            <Link
            href={href}
            target="_blank"
            >
            <Image
                alt="visit"
                width={32}
                height={32}
                src={icon}
            />
            </Link>
        </PopoverTrigger>
        <PopoverContent className='bg-dark-bold'>
            <div className="px-1">
                <div className="text-small font-bold text-white">{text}</div>
            </div>
        </PopoverContent>
    </Popover>
  )
}
