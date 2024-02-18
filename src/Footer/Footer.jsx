import React,{useEffect, useState} from 'react';
import { motion } from 'framer-motion';
export default  function Footer(){
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const[firstname,setfirstname]=useState('')
  const[email,setemail]=useState('')
  const[phone,setphone]=useState('')
  const[message,setmessage]=useState('')
  const handleSubmit = (event) => {
    setIsPopupVisible(true);
    event.preventDefault();
   

  };
  useEffect(() => {
    if (isPopupVisible===false) {
      setfirstname('');
      setemail('');
      setphone('');
      setmessage('');
    
    } 
   
  }, [isPopupVisible]);
  return (
    <section id='contact'>
      
    <div className="flex-col md:flex-row md:justify-center max-w-[100%] mx-auto">
      <div className="p-8 bg-white rounded shadow-md md:w-[100%]">
        <motion.h2 className="text-3xl  text-[2.4rem] font-[500] text-center text-gray-800 mb-8"
        initial={{opacity:0,
         
        
          translateY:-100,
          "aria-hidden":true,
        }}
        whileInView={{
         scale:1,
         opacity:1,
         translateX:0,
         
        
        
 
        }}
        transition={{delay:0.1,duration:0.5}}
        
        >Get in touch</motion.h2>
        <div className="flex flex-col lg:flex-row items-center mb-4 ">
  <div className="lg:w-1/2 mb-4 lg:mb-0">
  <h2 className="text-3xl text-center text-gray-800 mb-8">Contect</h2>
    <p className="text-gray-700 mb-4">
      I am always open to new opportunities and meeting new people. Feel
      free to reach out to me.
    </p>
    <p className="text-gray-700 mb-4 font-[400] px-10">
      < motion.p
      initial={{opacity:0,
        translateX:-100,
        translateY:0,
        
      }}
      whileInView={{
       scale:1,
       opacity:1,
       translateX:0,
       translateY:0,
      
      

      }}
      transition={{
        type:"spring",
        stiffness:260,
        damping:20,
        delay:0.2,
        
      }}>

       
    <i class="ri-phone-line text-3xl text-blue-600"></i>
    
      <a href="tel: +91 7667782140" className="text-blue-600 hover:underline">  +91 7667782140</a> 
      </motion.p>
     
      <motion.p
      initial={{opacity:0,
        translateX:100,
        translateY:0,
        "aria-hidden":true,
      }}
      whileInView={{
       scale:1,
       opacity:1,
       translateX:0,
       translateY:0,
      
      

      }}
      transition={{delay:0.1,duration:0.5}}>
      <i class="ri-mail-send-line text-3xl text-blue-600"></i>
      <a
        href="mailto: "
        className="text-blue-600 hover:underline"
      >
        {'   sandyankurkumar@gmail.com   '}
       
      </a>
      </motion.p>
    

<motion.p
initial={{opacity:0,
  translateX:-100,
  translateY:0,
  "aria-hidden":true,
}}
whileInView={{
 scale:1,
 opacity:1,
 translateX:0,
 translateY:0,



}}
transition={{delay:0.1,duration:0.5}}
>
      <i class="ri-linkedin-fill text-3xl text-blue-600"></i>
      <a
        href="https://www.linkedin.com/in/ankurkumar94/" target="_blank"
        className="text-blue-600 hover:underline"
      >
        {'   my LinkedIn profile'}
       
      </a>
      </motion.p>
    </p>
    <p className="text-gray-700 mb-4">
    <h3 className='font-[700] text-center'>or</h3>


       connect with me on social media. I am active on  {''}

      <a
        href="https://www.linkedin.com/in/ankurkumar94/"
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 hover:underline"
      >
          LinkedIn.
      </a>
      
      
      I am also on{'  Twitter'}
      <a
        href="https://twitter.com/AnkurKu73622879"
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 hover:underline"
      >
        Twitter
      </a>
      .
    </p>
  </div>

  <motion.div className="lg:w-1/2"
  
  >
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <motion.input
        type="text"
        id="first_name"
        name="first_name"
        placeholder="First name"
        className="border rounded py-2 px-3 mb-4 text-gray-800 font-semibold focus:outline-none"
        initial={{opacity:1,
          translateX:0,
          translateY:0,
          "aria-hidden":true,
        }}
        value={firstname}
        onChange={(e)=>setfirstname(e.target.value)}
        whileHover={{
          scale:1.1,
          backgroundColor: '#D9D7DB',

        }}
        required
      />
      <motion.input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        className="border rounded py-2 px-3 mb-4 text-gray-800 font-semibold focus:outline-none"
        initial={{opacity:1,
          translateX:0,
          translateY:0,
          "aria-hidden":true,
        }}
        value={email}
        onChange={(e)=>setemail(e.target.value)}
        whileHover={{
          scale:1.1,
          backgroundColor: '#D9D7DB',
        }}
        required
      />
      <motion.input
        type="tel"
        id="phone"
        name="phone"
        placeholder="Phone number"
        className="border rounded py-2 px-3 mb-4 text-gray-800 font-semibold focus:outline-none"
        initial={{opacity:1,
          translateX:0,
          translateY:0,
          "aria-hidden":true,
        }}
        value={phone}
        onChange={(e)=>setphone(e.target.value)}
        whileHover={{
          scale:1.1,
          backgroundColor: '#D9D7DB',
        }}
        required
      />
      <motion.textarea
        id="message"
        name="message"
        rows="4"
        cols="50"
        placeholder="Message"
        className="border rounded py-2 px-3 mb-4 text-gray-800 font-semibold focus:outline-none"
        initial={{opacity:1,
          translateX:0,
          translateY:0,
          "aria-hidden":true,
        }}
        value={message}
        onChange={(e)=>setmessage(e.target.value)}
        whileHover={{
          scale:1.1,
          backgroundColor: '#D9D7DB',
        }}
        required
        maxLength={100}
      ></motion.textarea>
      <motion.button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
        whileTap={{ scale: 0.9 ,
          backgroundColor: '#67c5ff',
          boxShadow: 'none'}}
          
        

      >
        Send message
      </motion.button>
      {isPopupVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded">
          <i class="ri-close-fill cursor-pointer text-red-500 font-[400] text-2xl" onClick={() => setIsPopupVisible(false)}></i>
           < div className='font-[700] rounded-sm text-center '>
            <p className='text-green-600'>Your message has been sent!</p>
            <h2> Name: {firstname}</h2>
            <h2>Email: {email}</h2>
            <h2>Phone: {phone}</h2>
            <p>Message: {message}</p>
            </div>
           
          </div>
        </div>
      )}
    </form>
  </motion.div>
</div>

       </div>
      
     <h2 className='text-center'>&copy; 2024 Ankur Kumar. All rights reserved.</h2>
   
      
    </div>
     
   
   </section>
  );
};

