import React, { useState } from 'react';

import 'react-modal-video/scss/modal-video.scss';
import portfolios from '../data/portfolioData';
import {motion} from 'framer-motion';

const PortfolioItem = ({ portfolio }) => {

  
    const [isReadMore, setIsReadMore] = useState(true);
    const [scaleUp, setScaleUp] = useState(false);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
        setScaleUp(!scaleUp); // Change to boolean value    
    };

    return (
        <motion.div className={`max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 scale-${scaleUp ? 110 : ''}`}
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
                <motion.img className="rounded-t-lg"  src={portfolio.imgUrl} alt="" 
                 whileTap={{
   
                    scale: 1.5,
                    transition: { duration: 2 },
                
                    
                  zIndex: 100,
                  
                
                    
                
                  }}/>
           
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{portfolio.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {isReadMore ? portfolio.description.slice(0, 50) : portfolio. technologies.join(", ")}
                    <span onClick={toggleReadMore} className="text-blue-500 cursor-pointer">
                        {isReadMore ? "...See Skill" : " see Description"}
                    </span>
                </p>
                <div className="flex px-2 justify-center">
                    <a href={portfolio.url} className="px-4" target='_blank'>
                        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Code</button>
                    </a>
                    <a href={portfolio.webpage} className="px-4" target='_blank'>
                        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Link</button>
                    </a>
                    
                </div>
            </div>
        </motion.div>
    );
}

export default function Project() {
    const [selectedOption, setSelectedOption] = useState('rate');
    let filteredPortfolios;

    switch(selectedOption) {
        case 'frontend':
            filteredPortfolios = portfolios.filter(portfolio => portfolio.type === 'frontend');
            break;
        case 'backend':
            filteredPortfolios = portfolios.filter(portfolio => portfolio.type=== 'backend');
            break;
        case 'uiux':
            filteredPortfolios = portfolios.filter(portfolio => portfolio.type === 'uiux');
            break;
            case 'rate':
                filteredPortfolios = [...portfolios]
        .sort((a, b) => Number(b.rate || 0) - Number(a.rate || 0))
        .slice(0, 3);
    break;
        default:
            filteredPortfolios = portfolios;
    }

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };
    return (
        <section id='project'>
            <div className="container lg:pt-2">
                <div className="text-center">
                    <motion.h1 className='text-[2.4rem] font-[800] text-primaryColor'
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
                 
                 animate={{scale:0,opacity:0,translateX:100,translateY:0}}
                  transition={{delay:0.1,duration:0.5}}>Projects</motion.h1>
                    
                    <div class="flex justify-start">
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
                            <option value="rate">Top Rated</option>
                            <option value="uiux">UI UX</option>
                        </motion.select>
                    </div>

                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
                    {filteredPortfolios.map((portfolio) => (
                        <PortfolioItem key={portfolio.id} portfolio={portfolio} />
                    ))}
                </div>
            </div>
        </section>
    );
}