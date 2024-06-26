import { Skill } from '@/data'
import { Avatar, Chip } from '@nextui-org/react'
import React from 'react'

interface Props{
    skills: Array<Skill>
}

export const Skills = ({skills}: Props) => {
  return (
    <div className='w-full flex gap-2 flex-wrap'>
        {
            skills.map( skill => (
                <Chip
                size='lg'
                className='py-2 px-4 bg-dark-bold text-white'
                key={skill.id}
                avatar={
                    skill.icon
                    &&
                  <Avatar
                    radius="sm"
                    classNames={{
                        base: "bg-dark-bold",
                    }}
                    name={skill.name}
                    src={skill.icon}
                  />
                }
              >
                {skill.name}
              </Chip>
            ))
        }
    </div>
  )
}
