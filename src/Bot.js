import React from 'react';
import contacts from './providers/contacts';

export default () =>
  /* bg-[#d9eaff] border border-solid border-[#b0bcc6] */
  <div className="h-20
                  static bottom-0
                  flex">
    <DarkModeToggler />
    {/* <a href="tel:+48578499706" className='
      static inset-y-0 left-0 w-full
      flex flex-col justify-end p-1
      italic  text-gray-500
    '>
      <p>Warsaw +48 578 499 706</p>
    </a> */}

    <div className='w-full
                    static inset-x-0 bottom-0 z-10
                    flex justify-end first:first-in-bot'>
      {
        contacts.map((c, i) => <L contact={c} key={i} />)
      }
    </div>
  </div>

const DarkModeToggler = () =>
  // <div className="relative hl">
  <div className="h-full w-24
                  flex items-center justify-center">
    <button
      title="Toggle Theme"
      onClick={() => {
        console.log('theme');
        document.documentElement.classList.toggle('dark');
      }}
      className="
        w-12 
        h-6 
        rounded-full 
        p-1 
        bg-gray-400 
        dark:bg-gray-600 
        relative 
        transition-colors 
        duration-500 
        ease-in
        focus:outline-none 
        focus:ring-2 
        focus:ring-blue-700 
        dark:focus:ring-blue-600 
        focus:border-transparent
      ">
      <div id="toggle"
        className="
            rounded-full 
            w-4 
            h-4 
            bg-blue-600 
            dark:bg-blue-500 
            relative 
            ml-0 
            dark:ml-6 
            pointer-events-none 
            transition-all 
            duration-300 
            ease-out
        ">
      </div>
    </button>
  </div>

const L = ({ contact }, key) =>
  <a key={key} href={contact.link} className="
    h-full w-32
    flex items-center justify-center
  text-[#ffa07a] font-bold hover:bot-link-hovered">
    {
      contact.text
    }
  </a>
