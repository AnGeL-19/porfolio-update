import Image from "next/image"


export const Banner = () => {
  return (
    <section className="w-full p-6 bg-dark-light rounded-xl">
          <div className=" flex flex-wrap justify-center md:flex-nowrap md:justify-normal  items-center gap-8  w-full">
            <Image 
              src="/img/user/ghost.png"
              alt="profile-ghost"
              width={105}
              height={105}
            />
            <div className="flex flex-col gap-3">
              <p className="text-base font-medium text-white">
                Holaaaaa! Soy <strong className="text-xl">Angel Muñoz</strong>, un apasionado mas de la tecnología. 
                Me gusta hacer desarrollos donde pueda ayudar a las personas a progresar y también 
                seguir creciendo como profesional. Actualmente me dedico al desarrollo de aplicaciones web y móvil. 
              </p>
              <p className="text-base font-medium text-white">
                Mi especialización actual es el desarrollo <strong className="text-xl">Full Stack</strong>.
              </p>
            </div>
          </div>
    </section>
  )
}
