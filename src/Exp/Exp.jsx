import React,{useState} from 'react'
import { experience } from '../data/expdata';
import { motion,useViewportScroll, useTransform } from "framer-motion";
export default function Exp() {
  const [isReadMore, setIsReadMore] = useState(true);
    const [scaleUp, setScaleUp] = useState(false);
   
    

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
        setScaleUp(!scaleUp); // Change to boolean value    
    };
    
  return (
    <>
    <section id='experience'>
        <div className="container lg:pt-2 ">
            <div className="text-center">
                <motion.h1 className='text-[2.4rem] font-[800] text-primaryColor '
                initial={{opacity:0,
                }}


               whileInView={{ 

               opacity: 1,
                translateX:-0,translateY:0,
                scale: 1,
                transition: { 
                duration: 0.5,
                delay: 0.5,
                  }
              }}
              
              
                >Experience</motion.h1>
              

               
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          
            {Object.entries(experience).map(([key, value], index) => (

<motion.div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "

initial={{opacity:0,
  translateX:-1250,
translateY:-50,
}}

animate={{opacity:0.1,translateX:0,translateY:0,
  scale: 0.1,
  transition: {
    duration: 0.5,
    delay: 0.1,
  },
 
}}
whileInView={{ scale: 1,
  translateX:-0,translateY:0,
  scale: 1,
  opacity: 1,

   transition: { 
   
  duration: 0.5,
  delay: key*0.5,
    } }}

>


  <motion.img className="rounded-t-lg" src={value.img} alt="" 
  initial={{opacity:0,
    translateX:-1250,
  translateY:-50,
  }}

  animate={{opacity:1,translateX:0,translateY:0,
    transition: {
      duration: 0.5,
      delay: 0.1,
    },
  }}
 
      
  whileTap={{
   
    scale: 1.5,
    transition: { duration: 2 },

    
  zIndex: 100,
  

    

  }}
 

  />

<div className="p-5">
  <a href="#">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{value.tile}</h5>
  </a>
  <p className="mb-3 font-normal text-yellow-50-700 dark:text-gray-400">
    {isReadMore ? value.description.slice(0, 50) : value.technologies.join(", ")}
    <span onClick={toggleReadMore} className="text-blue-500 cursor-pointer">
      {isReadMore ? "...See Skill" : " see Description"}
    </span>
  </p>
  <div className="flex px-2 justify-center text-white">
    <p>
      SKILL: {value.technologies}<br />
      Database: {value.databases}<br />
      Version Control: {value.versionControl}
    </p>
  </div>
</div>
</motion.div>


))}
</div>
        </div>

          
        {/* Repeat for other cards */}

           
    </section>

        
    </>
  )
}
