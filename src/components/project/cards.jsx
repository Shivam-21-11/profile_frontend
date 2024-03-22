import React from 'react';
import {motion} from "framer-motion";



const Cards = ({project}) => {
  const {name, summary, tools,link,icon } = project;
  const truncatedSummary = summary.length > 100 ? summary.slice(0, 100) + '...' : summary;
  const handleClick = () => {
    window.open(link, '_blank');
  }
    return (
    <>
    <motion.div onClick={handleClick} whileHover={{scale:0.9 , borderColor: "#FFFFFF", borderWidth: "2px" }} transition={{duration:0.2}} className="glass-beige shadow-md rounded-md p-4 items-center w-[22em] h-[20em] hidden sm:block">
        <div className="mb-10 mt-6 flex justify-center"><img src={icon} alt="Logo" style={{filter:'brightness(0) invert(1)'}}/></div>
        <div className="text-center mb-4 text-white bold">{name}</div> 
        <div className="text-center mb-2 text-gray-400 light">{truncatedSummary}</div>
        <div className="text-center text-sm text-gray-500 pt-5">Tools: {tools.join(', ')}</div>
    </motion.div>

  <motion.div onClick={handleClick} whileTap={{scale:0.9 , borderColor: "#FFFFFF", borderWidth: "2px" }} transition={{duration:0.2}} className="glass-beige shadow-md rounded-md p-4 items-center w-[20em] h-[20em] block sm:hidden">
    <div className="mb-10 mt-6 flex justify-center"><img src={icon} alt="Logo" style={{filter:'brightness(0) invert(1)'}}/></div>
    <div className="text-center mb-4 text-white bold">{name}</div> 
    <div className="text-center mb-2 text-gray-400 light">{truncatedSummary}</div>
    <div className="text-center text-sm text-gray-500 pt-3">Tools: {tools.join(', ')}</div>
  </motion.div>
</>
  );
};

export default Cards;
