import { Link } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

export const Contact = () => {
  return (
    <section className="flex flex-col gap-4">
        <h2 className="font-bold text-xl text-red-light">Contacto</h2>


        <div className='flex flex-wrap gap-11'>
            <div className="flex flex-col gap-4">
                <h3 className="font-medium text-lg text-white">Correo</h3>
                <div className="flex gap-2">
                    <Image 
                        src="/img/icons/email.svg"
                        alt="email"
                        width={24}
                        height={24}
                    />

                    <span className='text-sm text-white'>x( mra7588dev@gmail.com )x</span>
                </div>
            </div>
            
            <div className="flex flex-col gap-4">
                <h3 className="font-medium text-lg text-white">Redes</h3>
                <div className='flex gap-8'>
                    <Link className='text-white' 
                        href='https://www.linkedin.com/in/angel-mu%C3%B1oz-830b56191/' 
                        target='_blank'>
                        Linkedin
                    </Link>
                    <Link className='text-white' 
                    href='https://www.instagram.com/0kroenen0/' 
                    target='_blank'>
                        Instagram
                    </Link>
                    <Link className='text-white'  
                        href='https://github.com/AnGeL-19' 
                        target='_blank'>
                        GitHub
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}
