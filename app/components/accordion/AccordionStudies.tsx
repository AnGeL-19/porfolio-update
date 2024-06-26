'use client'
import { Accordion, AccordionItem, Avatar, Chip } from '@nextui-org/react'
import { studies } from '@/data';



export const AccordionStudies = () => {

  return (
    <Accordion selectionMode="multiple" className="p-0">
      
      {
        studies.map( ({id,title,subtitle,description,date,goals,img}) => (
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
                <p className='mb-1'>
                        {description}
                    </p>
          
                      <div className='flex gap-2 flex-wrap'>
                        {
                          goals.map( goal => (
                            <Chip key={goal} color="primary">{goal}</Chip>
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
