import React,{useState} from "react";
import logo from '../../assets/logo1.png';
import {motion} from 'framer-motion';
import './header.css';


function Header({apiLink}) {

    const [isOpen,setIsOpen] = useState(false);

    const scrollToSection = (sectionID)=>{
      const section = document.getElementById(sectionID);
      if(section) section.scrollIntoView({behavior: "smooth"});
      setIsOpen(false)
    }

    const downloadResume = ()=>{
      window.open(`${apiLink}/resume`);
      setIsOpen(false)
    }

    return (
<header>

  <div className='container mx-auto px-4 py-6'>
    <div className="grid grid-cols-3 gap-4 items-center ">
      <div></div>
      
      <div className="col-span-1 flex justify-center">
          <img src={logo}
            className="w-52 md:w-52 h-auto" 
            alt="logo"
          />
      </div>
        
      <div className="col-span-1 flex justify-end relative lg:mr-8 sm:mr-0">
        <motion.button  whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="bg-white p-2 rounded-full" onClick={()=>setIsOpen(!isOpen)}>{!isOpen ? <motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="https://img.icons8.com/plumpy/32/menu--v5.png" alt="menu"/> : <motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="https://img.icons8.com/ios-glyphs/32/delete-sign.png" alt="close"/>}</motion.button>
        {isOpen && <div className="absolute flex flex-col items-start top-16 rounded-lg p-2 w-content z-50 glass">
  
  
        <div className="flex w-full justify-start hover:bg-black cursor-pointer border-l-transparent rounded-lg p-4" 
        onClick={()=>scrollToSection('Home')}>
          <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FFFFFF/home.png" alt="home"/>
          <p className="text-white cursor-pointer ml-4">Home</p>
        </div>
  
  
  
        <div className="flex w-full justify-start hover:bg-black cursor-pointer border-l-transparent rounded-lg p-4"
        onClick={()=>scrollToSection('Projects')}>
          <img width="24" height="24" src="https://img.icons8.com/ios-filled/24/FFFFFF/untested.png" alt="untested"/>
          <p className="text-white cursor-pointer ml-4">Projects</p>
        </div>
  
  
  
        <div className="flex w-full justify-start hover:bg-black cursor-pointer border-l-transparent rounded-lg p-4"
        onClick={()=>scrollToSection('Technologies')}>
          <img width="24" height="24" src="https://img.icons8.com/glyph-neue/24/FFFFFF/circuit.png" alt="technology"/>
          <p className="text-white cursor-pointer ml-4">Technologies</p>
        </div>
  
  
  
        <div className="flex w-full justify-start hover:bg-black cursor-pointer border-l-transparent rounded-lg p-4"
        onClick={()=>scrollToSection('Contact')}>
          <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/24/FFFFFF/contact-card.png" alt="contact-card"/>
          <p className="text-white cursor-pointer ml-4">Contact</p>
        </div>

        <div className="flex w-full justify-start hover:bg-black cursor-pointer border-l-transparent rounded-lg p-4"
        onClick={()=>scrollToSection('Message')}>
          <img width="24" height="24" src="https://img.icons8.com/ios-filled/24/FFFFFF/chat-message--v1.png" alt="chat-message--v1"/>
          <p className="text-white cursor-pointer ml-4">Message</p>
        </div>

        <div className="flex w-full justify-start hover:bg-black cursor-pointer border-l-transparent rounded-lg p-4"
        onClick={()=>downloadResume()}>
          <img width="24" height="24" src="https://img.icons8.com/ios-filled/24/FFFFFF/resume.png" alt="resume"/>
          <p className="text-white cursor-pointer ml-4">Resume</p>
        </div>
  
  
        </div>}
  
          
      </div>
      </div>
    </div>
  </header>)

}

export default Header;