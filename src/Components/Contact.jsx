import React from 'react'
import style from './regular.module.css'

function Contact() {
  return (
    <div>
        <div className="topDiv w-full h-[50vh] md:h-fit lg:h-fit overflow-hidden">
            <h1 className='flex justify-between w-full h-fit'>
              <span className={`${style.fontSpringRegular} text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold`}>How</span>
              <span className={`${style.fontSpringRegular} text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold`}>This</span>
            </h1>
            <h1 className={`${style.fontSpringRegular} text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold w-full text-right`}>Work</h1>
            <br className='md:hidden' />
            <hr className='border-2 md:hidden border-solid border-black' />
            <br/>
            <h1 className={`${style.fontSpringRegular} text-6xl md:text-7xl xl:text-9xl lg:text-8xl font-bold w-full`}>Lets Talk</h1>
            <br className='md:hidden'/>
            <div className="image w-full h-1/3 md:h-1/2 lg:h-3/5 overflow-hidden flex justify-center">
                <img src="https://i.pinimg.com/564x/c9/01/a2/c901a2289f152ec9f346ab76bcb985c5.jpg" alt="Image Not Found" className='w-4/5 md:w-3/4 xl:w-1/5 h-full object-cover object-center rounded-md' />
            </div>
        </div>
        <div className="lowDiv w-full h-fit flex md:flex-col justify-between md:justify-center p-1 lg:mt-4">
              <ul className={`w-1/2 md:w-full h-full text-left ${style.bang} text-lg font-semibold md:text-xl lg:text-2xl md:flex-wrap leading-10 md:flex md:leading-none md:gap-x-5 md:gap-y-3 md:justify-center`}>
                  <li>Facebook</li>
                  <li>Linkedin</li>
                  <li>Instagram</li>
                  <li>Thread</li>
                  <li>Twitter</li>
                  <li>Youtube</li>
                  <li>WhatsApp</li>
              </ul>
              <ul className={`w-1/2 md:w-full md:text-left h-full text-right ${style.bang} text-lg md:text-xl lg:text-2xl md:flex-wrap font-semibold leading-10 md:flex md:leading-none md:gap-x-10 md:gap-y-3 md:mt-4 lg:mt-1 md:justify-center`}>
                  <li>Babbar</li>
                  <li>Harkirat</li>
                  <li>Sheriyans</li>
                  <li>Striver</li>
                  <li>Caleb</li>
                  <li>Simon</li>
                  <li>Gaurav</li>
              </ul>
        </div>
    </div>
  )
}

export default Contact
