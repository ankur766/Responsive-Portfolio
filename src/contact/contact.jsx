import React from 'react'

export default function contact() {
  return (
    <section classname="pt-0 " id="contact">
    <h1 classname="text-[30px] font-[700] text-primaryColor">Contact</h1>
   
    
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-slate-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">        
          
   
    <p className="text-gray-700 mb-4 font-[400] px-10">
    <i class="ri-phone-line text-3xl text-white"></i>
    
      <a href="tel: +91 7667782140" className="text-white hover:underline">  +91 7667782140</a> 
     
      <br />
      <i class="ri-mail-send-line text-3xl text-white"></i>
      <a
        href="mailto: "
        className="text-white hover:underline"
      >
        {'   sandyankurkumar@gmail.com   '}
       
      </a>
      <br />

      <i class="ri-linkedin-fill text-3xl text-white"></i>
      <a
        href="https://www.linkedin.com/in/ankurkumar94/" target="_blank"
        className="text-white hover:underline"
      >
        {'   my LinkedIn profile'}
       
      </a>
      <p className="text-gray-700 mb-4">
      <i class="ri-map-pin-line text-3xl text-white"></i>
      <a
        href="https://goo.gl/maps/8J3X1yJqjv7nB7rC8" target="_blank"
        className="text-white hover:underline"
      >
        {'   Patna, Bihar, India'}
       
      </a>
      </p>
    </p>
   
  </div>

              
     
    
  </section>
  
  )
}
