import React from 'react';
import { FaTrain } from 'react-icons/fa';

export default function Education() {
  const educationData = [
    {
      institution: 'kalinga institute of industrial technology, Bhubaneswar, Odisha, India',
      degree: 'Bachelor of Technology (B.Tech) in Computer Science and Engineering',
      year: '2021-2024',
    },
    {
      institution: 'Sant Longowal Institute of Engineering and Technology, Longowal, Punjab, India',
      degree: 'Diploma in Electronics and Communication Engineering',
      year: '2018-2021',
    },
    {
      institution: 'BR DAV Public School RTS, Begusarai  Bihar',
      degree: '10th from CBSE Board',
      year: '2017-2018',
    },
  ];

  return (
    <section id='education' className='lg:pt-20'>
      <div className="container lg:pt-2">
        <div className="text-center">
          <h1 className='text-[2.4rem] font-[800] text-primaryColor'>Education</h1>
          {educationData.map((education, index) => (
            <div
              key={index}
              className={`flex w-[100%] space-y-4 p-4 bg-white shadow-lg rounded-lg transition transform hover:scale-105 hover:bg-slate-300 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className='flex-shrink-0 px-2'>
                <FaTrain className='text-primaryColor' />
              </div>
              <div className='items-center gap-2'>
                <div className="flex flex-col">
                  <h3 className='text-lg font-medium text-primaryColor'>{education.institution}</h3>
                  <div className="flex gap-2">
                    <p className='text-sm text-gray-500'>{education.degree}</p>
                    <div className="border-r border-gray-300 h-6 mx-2"></div>
                    <p className='text-sm text-gray-500'>{education.year}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
