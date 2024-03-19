import {React,useState,useEffect} from "react";
import { Grid } from "react-loader-spinner";
import Cards from "./cards";
import {ChevronLeft,ChevronRight} from 'react-feather';


function Project({apiLink}){
    const [data,setData] = useState(null);
    const [len,setLen] = useState(0);
    const [index , setIndex] = useState(0);
    const [isLoading,setIsLoading] = useState(false);
    const [isError,setIsError] = useState(false);
    
  
  
  
    useEffect(()=>{
      const fetchData = async ()=>{
        setIsLoading(true);
        try{
          const response = await fetch(`${apiLink}/projects`);
          const jsonData = await response.json();
          setData(jsonData.projects);
          setLen(jsonData.projects.length);
          
        }catch (error){
          alert(error)
          setIsError(true);
        }finally{
        setIsLoading(false);}
      };
      fetchData()
    },[apiLink]);

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
    
    
    return(
<section id="Projects">
    <div className="container mx-auto px-4 py-10 lg:px-24 flex gap-6 justify-center">
        <h1 className="font-bold text-3xl cursor-default text-white">Projects</h1>
    </div>
    <div className="relative container mx-auto px-4 py-10 lg:px-24 flex gap-6 justify-center">
        {isLoading && <Grid visible={true} height="80" width="80" color="#00FFFF" ariaLabel="grid-loading" radius="12.5" wrapperStyle={{}} wrapperClass="grid-wrapper" />}
      
        {data && data[index] && 
        <div>
          <Cards key={index} project={data[index]}/>
          <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 flex justify-between px-4 lg:px-8 xl:px-12">
          <button onClick={handlePrev} className="bg-white bg-opacity-10 hover:bg-opacity-100 rounded-full p-2">
            <ChevronLeft size={30} style={{ color: 'black' }}/>
          </button>
          <button onClick={handleNext} className="bg-white bg-opacity-10 hover:bg-opacity-100 rounded-full p-2">
            <ChevronRight size={30} style={{ color: 'black' }}/>
          </button>
          </div>
        </div>} 



        {isError && <h3 className="font-bold text-3xl cursor-default text-white">Error Fetching Data</h3>}
    </div>

</section>
    )
}

export default Project;