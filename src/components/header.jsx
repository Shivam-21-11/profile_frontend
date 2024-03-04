import React,{useState,useEffect} from "react";

function Header(apiLink){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className='container mx-auto px-4 py-6 flex justify-between items-center'>
        <div>
          <img
            src="https://see.fontimg.com/api/renderfont4/nROx4/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjRkZGOUY5IiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/U2hpdmFtLUFp/ankh-sanctuary.png"
            className="w-32 h-auto"
            alt="logo"
          />
        </div>
        <button
          className="block lg:hidden border border-white p-2 rounded text-white"
          onClick={toggleMenu}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
        <ul className={`flex ${isOpen ? 'block' : 'hidden'} lg:flex`}>
          <li className="ml-4">
            <a href="#Projects" className='text-gray-300 hover:text-white cursor-pointer'>Projects</a>
          </li>
          <li className="ml-4">
            <a href="#Technologies" className='text-gray-300 hover:text-white cursor-pointer'>Technologies</a>
          </li>
          <li className="ml-4">
            <a href="#Contact" className='text-gray-300 hover:text-white cursor-pointer'>Contact</a>
          </li>
          <li className="ml-4">
            <a href={`${apiLink}/resume`} className='text-gray-300 hover:text-white cursor-pointer'>Download Resume</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Header;