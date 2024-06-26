import Image from "next/image"
import Link from "next/link"

export const Header = () => {


  return (
    <header className="w-full py-3">
      <nav className="flex justify-between">

        <Link className="flex items-center gap-[2px]"
          href='/'
        >
          <Image 
            src="/img/icons/ghost.svg"
            alt="ghost"
            width={24}
            height={40}
          />
          <span className="text-3xl font-bold text-gray-ghost">ngelMR</span>
        </Link>

        <div className="flex items-center gap-3">
          <Link className="flex justify-center items-center w-10 h-10 rounded-full bg-white"
            href='https://github.com/AnGeL-19'
            target="_blank"
          >
            <Image 
              src="/img/icons/github.svg"
              alt="ghost"
              width={24}
              height={24}
            />
          </Link>
          <Link className="flex justify-center items-center w-10 h-10 rounded-full bg-gradient-to-t from-yellow-gradient via-red-gradient to-purple-gradient"
            href='https://www.instagram.com/0kroenen0/'
            target="_blank"
          >
            <Image 
              src="/img/icons/instagram.svg"
              alt="instagram"
              width={24}
              height={24}
            />
          </Link>
          <Link className="flex justify-center items-center w-10 h-10 rounded-full bg-blue-linkedin"
            href='https://www.linkedin.com/in/angel-mu%C3%B1oz-830b56191/'
            target="_blank"
          >
            <Image 
              src="/img/icons/linkedin.svg"
              alt="linkedin"
              width={24}
              height={24}
            />
          </Link>
        </div>

      </nav> 
  </header>
  )
}
