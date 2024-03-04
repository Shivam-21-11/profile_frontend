import React,{useState,useEffect} from "react";
import { TypeAnimation } from 'react-type-animation';
import './App.css';
import banner from './assets/banner-pfp.png';
import {ChevronLeft,ChevronRight} from 'react-feather';

import Cards from "./components/cards";


function App(){
  const apiLink = "https://profile-backend-ndbm.onrender.com"
  const [data,setData] = useState(null);
  const [len,setLen] = useState(0);
  const [index , setIndex] = useState(0);
  const [isLoading,setIsLoading] = useState(false);
  const [isError,setIsError] = useState(false);
  const [isOpen,setIsOpen] = useState(false);

  useEffect(()=>{
    const fetchData = async ()=>{
      setIsLoading(true);
      try{
        const response = await fetch(`${apiLink}/projects`);
        const jsonData = await response.json();
        setData(jsonData.projects);
        setLen(jsonData.projects.length);
        
      }catch (error){
        console.log(error)
        setIsError(true);
      }finally{
      setIsLoading(false);}
    };
    fetchData()
  },[]);

  const handleNext = ()=>{
    if(index === len-1){
      setIndex(0);
    }else{
      setIndex(index+1);
    }
  }

  const handlePrev = ()=>{
    if(index === 0){
      setIndex(len-1);
    }else{
      setIndex(index-1);
    }
  }


  if(isError){
    return <h1>Error...</h1>
  }



  if(isLoading){
    return <h1>Loading...</h1>
  }


  
  return (
  <>
<header id = "Home">
  <div className='container mx-auto px-4 py-6'>
    <div className="grid grid-cols-3 gap-4 items-center">
      <div></div>
    
      <div className="col-span-1 flex justify-center">
        <img
          src="https://see.fontimg.com/api/renderfont4/nROx4/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjRkZGOUY5IiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/U2hpdmFtLUFp/ankh-sanctuary.png"
          className="w-48 md:w-64 h-auto" 
          alt="logo"
        />
      </div>
      
      <div className="col-span-1 flex justify-end relative mr-8">
        <button onClick={()=>setIsOpen(!isOpen)}>
          {!isOpen ? <img width="32" height="32" src="https://img.icons8.com/fluency/32/menu--v4.png" alt="menu--v4"/> 
          : <img width="32" height="32" src="https://img.icons8.com/ios-filled/32/22C3E6/multiply.png" alt="multiply"/>}
        </button>

      {isOpen && <div className="bg-blue-400 absolute flex flex-col items-start top-12 rounded-lg p-2 w-6/12 z-50">


        <div className="flex w-full justify-center hover:bg-blue-300 cursor-pointer border-l-transparent rounded-lg p-4">
        <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/24/home.png" alt="home"/>
          <a href="#Home" className="text-white cursor-pointer ml-4">Home</a>
        </div>



        <div className="flex w-full justify-center hover:bg-blue-300 cursor-pointer border-l-transparent rounded-lg p-4">
        <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/project.png" alt="project"/>
          <a href="#Projects" className="text-white cursor-pointer ml-4">Projects</a>
        </div>



        <div className="flex w-full justify-center hover:bg-blue-300 cursor-pointer border-l-transparent rounded-lg p-4">
        <img width="24" height="24" src="https://img.icons8.com/windows/24/workstation.png" alt="workstation"/>
          <a href="#Technologies" className="text-white cursor-pointer ml-4">Technologies</a>
        </div>



        <div className="flex w-full justify-center hover:bg-blue-300 cursor-pointer border-l-transparent rounded-lg p-4">
        <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/contact-card.png" alt="contact-card"/>
          <a href="#Contact" className="text-white cursor-pointer ml-4">Contact</a>
        </div>


        <div className="flex w-full justify-center hover:bg-blue-300 cursor-pointer border-l-transparent rounded-lg p-4">
        <img width="24" height="24" src="https://img.icons8.com/wired/24/download--v1.png" alt="download--v1"/>
          <a href={`${apiLink}/resume`} className="text-white cursor-pointer ml-4">Download Resume</a>
        </div>


        </div>}

        
      </div>
    </div>
  </div>
</header>











<main>
    <section>
      <div className="container mx-auto px-4 py-10 lg:px-24 flex gap-6">
        <div className="flex flex-col justify-center">
        <TypeAnimation className="font-bold text-4xl"
      sequence={[
        "Hello, I'm Shivam",
        1000,
        "I Love Coding.....",
        1000,
        "My Skills Include....",
        1000,
        "Python,",
        1000,
        "Tensorflow,",
        1000,
        "Pytorch,",
        1000,
        "Git,",
        1000,
        "AWS SageMaker,",
        1000,
        "Basic Web Development,",
        1000,
        "Basic DBMS",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
          
          <h2 className="font-bold text-4xl mt-1 gradient-text pb-2">Machine Learning Engineer</h2>
          <p className="mt-2 text-gray-400">Embarking on the AI Journey: Exploring the Frontiers of Data Science in Computer Vision and NLP, Eager to Learn and Grow Together!</p>

        </div>
        <div className="relative">
      <img src={banner} width={350} alt="img-pfp" className="rounded-full" style={{clipPath: 'circle(50%)'}} />
      </div>
      </div>
    </section>
















    <section id="Projects">
      {/*Projects section*/}
      <div className="container mx-auto px-4 py-10 lg:px-24 flex gap-6 justify-center">
        <h1 className="font-bold text-3xl cursor-default text-white">Projects</h1>
      </div>
      <div className="relative container mx-auto px-4 py-10 lg:px-24 flex gap-6 justify-center">
        
      {data && data[index] && (
  <Cards key={index} project={data[index]}/>
)} 
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 flex justify-between px-4 lg:px-8 xl:px-12">
          <button onClick={handlePrev} className="bg-white bg-opacity-10 hover:bg-opacity-100 rounded-full p-2">
            <ChevronLeft size={30} style={{ color: 'black' }}/>
          </button>
          <button onClick={handleNext} className="bg-white bg-opacity-10 hover:bg-opacity-100 rounded-full p-2">
            <ChevronRight size={30} style={{ color: 'black' }}/>
          </button>
        </div>
        
      </div>

    </section>


















    <section id="Technologies">
        {/*Technology section*/}
        <div className="container mx-auto px-4 py-10 lg:px-24 flex gap-6 justify-center">
          <h1 className="font-bold text-3xl cursor-default text-white">Technologies</h1>
        </div>
        <div className="container mx-auto px-4 py-10 lg:px-24">
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-center">
    <div className="flex flex-col items-center">
      <img src="https://img.icons8.com/color/96/000000/python.png" alt="python" />
      <h1 className="font-bold text-xl cursor-default text-white mt-4">Python</h1>
    </div>
    <div className="flex flex-col items-center">
      <img src="https://img.icons8.com/color/96/000000/tensorflow.png" alt="tensorflow" />
      <h1 className="font-bold text-xl cursor-default text-white mt-4">Tensorflow</h1>
    </div>
    <div className="flex flex-col items-center">
      <img src="https://img.icons8.com/color/96/000000/opencv.png" alt="opencv" />
      <h1 className="font-bold text-xl cursor-default text-white mt-4">OpenCV</h1>
    </div>
    <div className="flex flex-col items-center">
      <img src="https://img.icons8.com/color/96/amazon-web-services.png" alt="react" />
      <h1 className="font-bold text-xl cursor-default text-white mt-4">SageMaker</h1>
    </div>
    <div className="flex flex-col items-center">
      <img src="https://img.icons8.com/fluency/96/pytorch.png" alt="react" />
      <h1 className="font-bold text-xl cursor-default text-white mt-4">Pytorch</h1>
    </div>
    <div className="flex flex-col items-center">
      <img src="https://img.icons8.com/color/96/git.png" alt="react" />
      <h1 className="font-bold text-xl cursor-default text-white mt-4">Git</h1>
    </div>
  </div>
</div>
</section>














<section id="Contact">
  {/*Contact section*/}

  <div className="container mx-auto px-4 py-10 lg:px-24 flex gap-6 justify-center">
          <h1 className="font-bold text-3xl cursor-default text-white">Contact me</h1>
        
  </div>
  <div className="container mx-auto px-4 py-10 lg:px-24">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl cursor-default text-white">Email</h1>
      <a href="mailto:shivamsingh2111@gmail.com" target="_blank" rel="noopener noreferrer"><p className="text-gray-400 mt-2">Shivamsingh2111@gmail.com</p></a>
    </div>
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl cursor-default text-white">LinkedIn</h1>
      <a href="https://www.linkedin.com/in/shivam-singh-aa2468201/" target="_blank" rel="noopener noreferrer"><p className="text-gray-400 mt-2">https://www.linkedin.com/in/shivam-singh-aa2468201/</p></a>
    </div>
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl cursor-default text-white">Kaggle</h1>
      <a href="https://www.kaggle.com/shivam2111" target="_blank" rel="noopener noreferrer"><p className="text-gray-400 mt-2">https://www.kaggle.com/shivam2111</p></a>
    </div>
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl cursor-default text-white">GitHub</h1>
      <a href="https://github.com/Shivam-21-11" target="_blank" rel="noopener noreferrer"><p className="text-gray-400 mt-2">https://github.com/Shivam-21-11</p></a>
    </div>
  </div>
</div>

</section>
</main>








</>
  )
}

export default App