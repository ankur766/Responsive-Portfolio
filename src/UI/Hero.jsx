import React, { useState,useEffect} from 'react';
import heroImg from '../images/hero.png';
import Contact from '../contact/contact';

import { motion} from "framer-motion";
import'./hero.css'


export default function Hero() {
 
 
 const text="I am a passionate software developer with a strong interest in web development. I am a quick learner and always eager to learn new technologies. I am a team player and have good communication skills. I am always ready to take on new challenges and work on new projects".split(" ")
  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <motion.section className='pt-0 ' id='about'
   
   
    transition={{ duration: 1}}



    >
      <div className="container pt-14 ">
        <div className='flex flex-col-reverse md:flex-row items-center justify-between'>
          <div className="w-full md:w-[50%] md:mt-[2.3rem] text-center md:text-left mb-8 md:mb-0 ">
            <motion.h5 className='text-[30px] font-[700] text-primaryColor'
            initial={{ scale: 0, opacity: 0 }}
            
             whileInView={{ scale: 1, opacity: 1 ,
              transition: {
                duration: 1,
                type: "spring",
                stiffness: 260,
                damping: 50,
              }}  }
            exit={{ scale:0, opacity: 0 ,
              x: 1200,
              transition: {
                duration: 2,
                type: "spring",
                stiffness: 260,
                damping:20,
              } }}
              viewport={{  scale: 0, opacity: 0 ,
                transition: {
                  duration: 0.5,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }  }}
      >Hi,</motion.h5>
            <motion.h1 className='text-[30px] font-[700] text-primaryColor'
             initial={{ scale: 0, opacity: 0,
             
              transition: {
                duration: 2,
                type: "spring",
                stiffness: 260,
                damping:50,}
          
          }}
         
             whileInView={{ scale: 1, opacity: 1 ,
             
              transition: {
                duration: 1,
                type: "spring",
                stiffness: 260,
                damping: 50,
              }}  }

            exit={{ scale:0, opacity: 0 ,
              x: -1200,
              transition: {
                duration: 2,
                type: "spring",
                stiffness: 260,
                damping:50,
              } }}
              >I am <motion.span className='text-secondaryColor'>Ankur Kumar</motion.span></motion.h1>
            <h2 className='text-[20px] text-smallTextColor font-[500] leading-[30px]'>Front-End Developer</h2>
            {text.map((el, i) => (
            <motion.span className='text-smallTextColor font-[400] mt-4'
         
           
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
             delay: i *0.5,
             ease: "easeInOut",
          
           
            repeat: Infinity,
            repeatDelay: i *1,

           
         
            duration: 0.5,
          

              
               
                

              }}
              
             
              key={i}
            >
              {el + " "}
            </motion.span>
          ))}
            <div className="flex flex-col md:flex-row items-center gap-4 mt-8 ">
              <button className='flex  whitespace-nowrap   text-smallTextColor font-[600] border  border-solid border-smallTextColor  items-center gap-2 py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300' onClick={() => setIsContactOpen(!isContactOpen)}>
                <i className="ri-send-plane-line"></i>
                Let's connect
              </button>
              {isContactOpen && <motion.div className=' bg-slate-400 '
                initial={{ scale: 0, opacity: 0,
                x: -1200,
                rotate: 360,

                transition: {
                  duration: 2,
                  type: "spring",
                  stiffness: 260,
                  damping:50,}
              }}
                animate={{ scale: 1, opacity: 1 ,
                  width: '20rem',
                  height: '3rem',
                x: 300,
                y: -250,
                zIndex: 1000,
                  filterUnits: "0px 0px 10px 0px rgba(0,0,0,0.5)",
                  scaleX: 1,
                  scaleY: 0.8,
                 
               
                
                  borderRadius: "10px",
                  borderColor: "black",
                  borderStyle: "solid",
                  borderWidth: "1px",
                  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",

                  overlay: "rgba(0, 0, 0, 0.5)",
             
                transition: {
                  duration: 1,
                  type: "spring",
                  stiffness: 260,
                  damping: 50,
                }
                

                }}
              >
                
        
                <i class="ri-close-fill cursor-pointer text-red-500 font-[400] text-2xl" onClick={() => setIsContactOpen(false)}></i>
                <Contact></Contact>
              </motion.div>}
              <a href=" https://drive.google.com/file/d/132yQZIspxXrt-RftGuVOA_X6UiMo7iF4/view" target='_blank' rel=''>
                <button className='flex  whitespace-nowrap  text-smallTextColor font-[600] border  border-solid border-smallTextColor  items-center gap-2 py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300'>
                  <i className="ri-download-2-line "></i>
                  Download CV
                </button>
              </a>
              <marquee id="scroller" class="  fixed  flex flex-col z-[-400]">
                <h4>FRONTEND DEVELOPER</h4>
                <h4>BACKEND DEVELOPER</h4>
                <h4>UIUX DESIGNER</h4>
                <h4>FULLSTACK DEVELOPER</h4>
               
              </marquee>


            </div>
            <div className="flex  items-center gap-4 mt-14">
              <span className=' items-center gap-2 text-smallTextColor font-[500] text-[20px]'>
                Follow me :
              </span>
              <span className='flex items-center gap-4'>
                <a href="https://www.facebook.com/profile.php?id=100015759407950&sfnsn=wiwspwa&mibextid=RUbZ1f" target="_blank" rel="noreferrer">
                  <i className="ri-facebook-fill text-[#1877f2] text-[25px]"></i> </a>
                <a href="https://twitter.com/AnkurKu73622879" target="_blank" rel="noreferrer">
                  <i className="ri-twitter-fill text-[#1DA1F2] text-[25px]"></i>  </a>
                <a href="https://www.linkedin.com/in/ankurkumar94/" target="_blank" rel="noreferrer">
                  <i className="ri-linkedin-fill text-[#2867B2] text-[25px]"></i> </a>
                <a href="https://github.com/ankur766" target="_blank" rel="noreferrer">
                  <i className="ri-github-fill text-[#333] text-[25px]"></i></a>
              </span>
            </div>
          </div>
          <div className="basis-1/3 mt-10 sm:mt-0 ">
            <figure className='flex items-center justify-center'>
              
              <motion.img src={heroImg} alt=""  className='hero'
               initial={{ scale: 0, opacity: 0 }}
            
               whileInView={{ scale: 1, opacity: 1 ,
                transition: {
                  duration: 1,
                  type: "spring",
                  stiffness: 260,
                  damping: 50,
                }}  }
              exit={{ scale:0, opacity: 0 ,
                x: 1200,
                transition: {
                  duration: 2,
                  type: "spring",
                  stiffness: 260,
                  damping:20,
                } }}
                viewport={{  scale: 0, opacity: 0 ,
                  transition: {
                    duration: 0.5,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }  }}
              />
              
              
              
            </figure>
          </div>


        </div>

      </div>
    </motion.section>
  );
}