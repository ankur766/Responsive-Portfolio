import React, { useState } from 'react';
import skillData from '../data/Skilldata';
import { motion,useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
export default function Skill() {
  const [selectedOption, setSelectedOption] = useState('all');
  let filteredSkills;

  switch(selectedOption) {
      case 'frontend':
        filteredSkills = skillData.filter(skill => skill.type === 'frontend');
          break;
      case 'backend':
        filteredSkills =skillData.filter(skill => skill.type=== 'backend');
          break;
      case 'tools':
        filteredSkills = skillData.filter(skill => skill.type=== 'tools');
          break;
         
  break;
      default:
        filteredSkills = skillData;
  }

  const handleSelectChange = (e) => {
      setSelectedOption(e.target.value);
  };

  return (
    <section id='skills' className='lg:pt-20'>
      <div className="container">
        <h2 className='text-4xl font-bold text-center text-primaryColor'>Skills</h2>
        <label for="countries" class="block  px-6  mb-2 text-[1.4rem] font-medium text-gray-900 dark:text-purple-500">Select an option   </label>
                        <motion.select
                        id="categories"
                        value={selectedOption}
                        onChange={handleSelectChange} class="w-64 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       

                      
                        
                        
                        whileHover={{ scale: 1.05 }}
                        >
                            <option selected>Choose a Project</option>
                            <option selected>All</option>
                            <option value="frontend">Frontend</option>
                            <option value="backend">Backend</option>
                           
                            <option value="tools">Tools</option>
                        </motion.select>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {filteredSkills.map((skill) => (
            <motion.div className="relative group bg-white shadow-lg p-8 rounded-[10px] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" key={skill.id}
            initial={{opacity:0,
              translateX:-50,
          translateY:-50,
       }}
       whileInView={{
        scale:1,
        opacity:1,
        translateX:0,
        translateY:0,
       

       }}
       
       animate={{scale:0,opacity:0,translateX:-100,translateY:0}}
        transition={{delay:0.1,duration:0.5}}
      
            >
              <div className="relative z-10 flex items-center justify-center">
                <img src={skill.icon} alt={skill.name} className='w-20 h-20' />
              </div>
              <h3 className='relative z-10 text-[20px] font-[700] text-primaryColor text-center mt-4'>{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}