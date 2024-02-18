import React,{useState} from 'react'
import{motion} from'framer-motion'

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <header className='w-full h-[100px]  leading-[80px]   flex items-center fixed top-0 bg-white z-10  '>

    <div className="container">
      <div className='flex  items-center justify-between'>
        {/*-----------logo-----------*/}
        <div className="flex items-center gap-[10px]">
          <motion.spam  className='w-[35px] h-[35px] bg-blue-700  text-white  text-[18px] font-[500]
          rounded-full flex items-center justify-center  '
          initial={{
            opacity:0,
            scale:0.5,
            rotate:360,
            x:-100,
            y:-100,
          
           
           
         
            opacity:0}}
            whenHover={{ scale: 2,
              color: 'red',}}

            animate={{
              opacity:1,
              rotate:360,
              x:0,
              y:0,
              scale:1,
            }}
            
    
    
  
            whileHover={{
                scale: 1.2,
    
    
            }}
            whileTap={{
                scale: 2,
                rotate: -90,
                borderRadius: "100%"}}

            transition={{
              type: 'spring',
              stiffness: 60,
              damping: 100,
            }}
         

          >A</motion.spam>
          <div id="leading-[20px] ">
            <motion.h2 className='text-xl text-primaryColor   text-[23px] font-[700]'
            
            initial={{
              opacity:0,
              x:200,
              y:200,
              scale:0.5,
              rotate:360,
              opacity:0,
             
              rotate: [0, 0, 270, 270, 0],
            }}
              animate={{
                opacity:1,
                x:0,
                y:0,
                scale:1,
                rotate:0,
                scale: [5, 2, 2, 1, 1],
                        
              
               
              }}
              
            whileTap={{
              scale: 2,
              x: 200,
              y: 100,
             
  
  
          }}
              transition={{
                duration: 2,
                       
                times: [0, 0.2, 0.5, 0.8, 1],
               
                
            }}
            
            >Ankur Kumar</motion.h2>
            <motion.p className='text-sm text-smallTextColor text-[19px] font-[500]'

            initial={{
              opacity:0,
              x:1200,
              y:5,
              scale:2,
              
              opacity:0,
             
              
            }}
           

              animate={{
                opacity:1,
                x:0,
                y:0,
                scale:1,
                rotate:0,
                scale: [1],
                        
              
               
              }}

              transition={{
               type: 'spring',
                stiffness: 60,
                damping: 100,
            }}
           
            
            >Frontend Developer</motion.p>

          </div>
        </div>
        {/*-----------logoEnd-----------*/}
        {/*-----------nav-----------*/}
        <motion.nav className='hidden md:flex items-center gap-8 '
        initial={{
          opacity:0,
          x:200,
          y:-200,
          scale:0.5,
          rotate:360,
          opacity:0,
         
        
        }}
          animate={{
            opacity:1,
            x:0,
            y:0,
            scale:1,
            
           
                    
          
           
          }}  
         
          transition={
            {
              type: 'spring',
              stiffness: 60,
              damping: 20,
            }
          }

        
        > 
          <motion.a href="#home" className='text-smallTextColor text-[19px] font-[500] hover:text-primaryColor'
          
          whileHover={{ 
            scale: 1.1,
           
            
           
          }}
          
          transition={{
            type: 'spring',
            stiffness: 60,
            damping: 20,
          }}

           >Home</motion.a>
          <motion.a href="#about" className='text-smallTextColor text-[19px] font-[500] hover:text-primaryColor'
            whileHover={{ 
            scale: 1.1,
           
            
           
          }}
          
          transition={{
            type: 'spring',
            stiffness: 60,
            damping: 20,
          }}
          >About</motion.a>
          <motion.a href="#experience" className='text-smallTextColor text-[19px] font-[500] hover:text-primaryColor'
            whileHover={{ 
            scale: 1.1,
           
    
          }}
          
          transition={{
            type: 'spring',
            stiffness: 60,
            damping: 20,
          }}>Experience</motion.a>

          <motion.a href="#skills" className='text-smallTextColor text-[19px] font-[500] hover:text-primaryColor'
            whileHover={{ 
            scale: 1.1,
           
            
           
          }}
          
          transition={{
            type: 'spring',
            stiffness: 60,
            damping: 20,
          }}>Skills</motion.a>
          <motion.a href="#education" className='text-smallTextColor text-[19px] font-[500] hover:text-primaryColor'
            whileHover={{ 
            scale: 1.1,
           
            
           
          }}
          
          transition={{
            type: 'spring',
            stiffness: 60,
            damping: 20,
          }}>Education</motion.a>
          <motion.a href="#project" className='text-smallTextColor text-[19px] font-[500] hover:text-primaryColor'
            whileHover={{ 
            scale: 1.1,
           
            
           
          }}
          
          transition={{
            type: 'spring',
            stiffness: 60,
            damping: 20,
          }}>Project</motion.a>
          <motion.a href="#contact" className='text-smallTextColor text-[19px] font-[500] hover:text-primaryColor'
            whileHover={{ 
            scale: 1.1,
           
            
           
          }}
          
          transition={{
            type: 'spring',
            stiffness: 60,
            damping: 20,
          }}>Contact</motion.a>
        </motion.nav>
      
        {/*-----------menu right-----------*/}
        <div className="flex items-center gap-4">

          <motion.button className='flex  whitespace-nowrap  text-smallTextColor font-[600] border  border-solid border-smallTextColor  items-center gap-2 py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white
          hover:font-[500] ease-in duration-300'
          initial={{
            opacity:0,
            x:-1200,
            y:5,
            scale:2,
            
            opacity:0,
           
            
          }}
         

            animate={{
              opacity:1,
              x:0,
              y:0,
              scale:1,
              rotate:0,
              scale: [1],
                      
            
             
            }}

            transition={{
             type: 'spring',
              stiffness: 60,
              damping: 20,
          }}
          >
          <i class=" ri-send-plane-line"></i>
          Let's conect
          </motion.button>

        , <span className='text-2xl text-smallTextColor md:hidden cursor-pointer' onClick={toggleMenu}>
              <i className={`ri-menu-line ${isMenuOpen ? 'hidden' : ''}`}></i>
            </span>
        </div>
        {/*-----------menu rightEnd-----------*/  }
         {/* Mobile Menu */}
         <div className={`md:hidden absolute top-0 left-0 right-0 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <nav className="flex flex-col items-center gap-4 bg-white p-4">
              {/* ... Mobile navigation links ... */}
              <a href="#home" className='text-smallTextColor text-[19px] font-[500] hover:text-primaryColor'onClick={() => { closeMenu(); }}>Home</a>
          <a href="#about" className='text-smallTextColor text-[19px] font-[500] hover:text-primaryColor' onClick={() => { closeMenu(); }}>About</a>
          <a href="#experience" className='text-smallTextColor text-[19px] font-[500] hover:text-primaryColor' onClick={() => { closeMenu(); }}>EXPERIENCE</a>
          <a href="#skills" className='text-smallTextColor text-[19px] font-[500] hover:text-primaryColor' onClick={() => { closeMenu(); }}>SKILLS</a>
          <a href="#education" className='text-smallTextColor text-[19px] font-[500] hover:text-primaryColor'>EDUCATION</a>
          <a href="#project" className='text-smallTextColor text-[19px] font-[500] hover:text-primaryColor' onClick={() => { closeMenu(); }}>PROJECT</a>
          <a href="#contact" className='text-smallTextColor text-[19px] font-[500] hover:text-primaryColor' onClick={() => { closeMenu(); }}>CONTACT</a>
            </nav>
          </div>

      </div>
    </div>
    </header>
  )
}
