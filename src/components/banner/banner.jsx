import {React,useEffect,useState} from "react";
import { motion } from "framer-motion"
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {loadFull} from "tsparticles"
import particleConfig from "../../assets/animation/particle_config";

function Banner(){
  const t1 = "Hi,".split('');
  const t2 = "I'm  Shivam  Singh,".split("");
  const t3 = "Machine  Learning".split("");
  const t4 = "Engineer".split("");

  const [init,setInit] = useState(false);
  useEffect(()=>{
    initParticlesEngine(async (engine)=>{
      await loadFull(engine);
    }).then(()=>{
      setInit(true);
    })
  },[])
  const particleLoaded = (container) =>{console.log(container)}

    return (
      <>
      {/* Large Screen */}
  <section id="#Home" className="hidden sm:block">
    <div className="container flex w-full h-screen relative">
    {init && <Particles className="flex absolute w-full h-full z-0" id="tsparticles" particlesLoaded={particleLoaded} options={particleConfig}/>}
      <div className="flex flex-col justify-center w-full h-screen z-10 grid-rows-3 gap-4">
        <div className="flex ps-10">{t1.map((val,idx)=> val === ' ' ? <motion.span key={idx}>&nbsp;&nbsp;</motion.span> : <motion.span className=" text-white bold-italic text-6xl cursor-pointer" whileHover={{ scale: 1.2 , color:'#F4DFC8' }} whileTap={{ scale: 0.8 }}  key={idx}>{val}</motion.span>)}</div>
        <div className="flex ps-10">{t2.map((val,idx)=> val === ' ' ? <motion.span key={idx}>&nbsp;&nbsp;</motion.span> : <motion.span className=" text-white bold-italic text-6xl cursor-pointer" whileHover={{ scale: 1.2 , color:'#F4DFC8' }} whileTap={{ scale: 0.8 }}  key={idx}>{val}</motion.span>)}</div>
        <div className="flex ps-10">{t3.map((val,idx)=> val === ' ' ? <motion.span key={idx}>&nbsp;&nbsp;</motion.span> : <motion.span className=" text-white bold-italic text-6xl cursor-pointer" whileHover={{ scale: 1.2 , color:'#F4DFC8' }} whileTap={{ scale: 0.8 }}  key={idx}>{val}</motion.span>)}</div>
        <div className="flex ps-10">{t4.map((val,idx)=> val === ' ' ? <motion.span key={idx}>&nbsp;&nbsp;</motion.span> : <motion.span className=" text-white bold-italic text-6xl cursor-pointer" whileHover={{ scale: 1.2 , color:'#F4DFC8' }} whileTap={{ scale: 0.8 }}  key={idx}>{val}</motion.span>)}</div>
        <div className="flex ps-10"><motion.p whileHover={{scale:1.2,x:80, color:'#F4DFC8'}} className="mt-2 italic text-gray-400 cursor-pointer">Embarking on the AI Journey: Exploring the Frontiers of Data Science in Computer Vision and NLP, Eager to Learn and Grow Together!</motion.p></div>
      </div>

    </div>
  </section>
  {/* Large Screen */}
  <section id="#Home" className="block sm:hidden">
    <div className="container flex flex-col mt-10 mb-20 pt-10 px-2 items-center w-full">
      <div className="flex flex-col items-center gap-2">
        <motion.h1 whileTap={{ scale: 0.8, color:'#F4DFC8' }} className="text-white bold-italic text-4xl">Hi,</motion.h1>
        <motion.h1 whileTap={{ scale: 0.8, color:'#F4DFC8' }} className="text-white bold-italic text-4xl">I'm Shivam,</motion.h1>
        <motion.h1 whileTap={{ scale: 0.8, color:'#F4DFC8' }} className="text-white bold-italic text-4xl">Machine Learning,</motion.h1>
        <motion.h1 whileTap={{ scale: 0.8, color:'#F4DFC8' }} className="text-white bold-italic text-4xl">Engineer</motion.h1>
        <motion.p whileTap={{scale: 1.2, color:'#F4DFC8'}} className="mt-2 italic text-gray-400 cursor-pointer">Embarking on the AI Journey: Exploring the Frontiers of Data Science in Computer Vision and NLP, Eager to Learn and Grow Together!</motion.p>
      </div>
    </div>
  </section>
  </>
    )
}
export default Banner;