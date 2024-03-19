import React,{useState} from "react";
function Header({apiLink}) {

    const [isOpen,setIsOpen] = useState(false);

    const scrollToSection = (sectionID)=>{
      const section = document.getElementById(sectionID);
      console.log(sectionID,section)
      if(section) section.scrollIntoView({behavior: "smooth"});
      setIsOpen(false)
    }

    const downloadResume = ()=>{
      window.open(`${apiLink}/resume`);
      setIsOpen(false)
    }

    return (
<header id = "Home">
  <div className='container mx-auto px-4 py-6'>
    <div className="grid grid-cols-3 gap-4 items-center">
      <div></div>
      
      <div className="col-span-1 flex justify-center">
        <img src="https://see.fontimg.com/api/renderfont4/nROx4/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjRkZGOUY5IiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/U2hpdmFtLUFp/ankh-sanctuary.png"
            className="w-48 md:w-64 h-auto" 
            alt="logo"
          />
      </div>
        
      <div className="col-span-1 flex justify-end relative lg:mr-8 sm:mr-0">
        <button onClick={()=>setIsOpen(!isOpen)}>
            {!isOpen ? <img width="32" height="32" src="https://img.icons8.com/fluency/32/menu--v4.png" alt="menu--v4"/> 
            : <img width="32" height="32" src="https://img.icons8.com/ios-filled/32/22C3E6/multiply.png" alt="multiply"/>}
        </button>
  
        {isOpen && <div className="bg-blue-400 absolute flex flex-col items-start top-12 rounded-lg p-2 w-content z-50">
  
  
        <div className="flex w-full justify-center hover:bg-blue-300 cursor-pointer border-l-transparent rounded-lg p-4" 
        onClick={()=>scrollToSection('Home')}>
          <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/24/home.png" alt="home"/>
          <p className="text-white cursor-pointer ml-4">Home</p>
        </div>
  
  
  
        <div className="flex w-full justify-center hover:bg-blue-300 cursor-pointer border-l-transparent rounded-lg p-4"
        onClick={()=>scrollToSection('Projects')}>
          <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/project.png" alt="project"/>
          <p className="text-white cursor-pointer ml-4">Projects</p>
        </div>
  
  
  
        <div className="flex w-full justify-center hover:bg-blue-300 cursor-pointer border-l-transparent rounded-lg p-4"
        onClick={()=>scrollToSection('Technologies')}>
          <img width="24" height="24" src="https://img.icons8.com/windows/24/workstation.png" alt="workstation"/>
          <p className="text-white cursor-pointer ml-4">Technologies</p>
        </div>
  
  
  
        <div className="flex w-full justify-center hover:bg-blue-300 cursor-pointer border-l-transparent rounded-lg p-4"
        onClick={()=>scrollToSection('Contact')}>
          <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/contact-card.png" alt="contact-card"/>
          <p className="text-white cursor-pointer ml-4">Contact</p>
        </div>
  
  
        <div className="flex w-full justify-center hover:bg-blue-300 cursor-pointer border-l-transparent rounded-lg p-4"
        onClick={()=>downloadResume()}>
          <img width="24" height="24" src="https://img.icons8.com/material-two-tone/24/download--v1.png" alt="download--v1"/>
          <p className="text-white cursor-pointer ml-4">Resume</p>
        </div>
  
  
        </div>}
  
          
        </div>
      </div>
    </div>
  </header>)

}

export default Header;