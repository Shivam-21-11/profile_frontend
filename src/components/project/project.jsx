import {React,useState,useEffect} from "react";
import { Grid } from "react-loader-spinner";
import {motion} from "framer-motion";
import Cards from "./cards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



function Project({apiLink}){
    const [data,setData] = useState(null);
    const [isLoading,setIsLoading] = useState(false);
    const [isError,setIsError] = useState(false);
    
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  
    
    useEffect(()=>{
      const fetchData = async ()=>{
        setIsLoading(true);
        try{
          const response = await fetch(`${apiLink}/projects`);
          const jsonData = await response.json();
          setData(jsonData.projects);
          
        }catch (error){
          alert(error)
          setIsError(true);
        }finally{
        setIsLoading(false);}
      };
      fetchData()
    },[apiLink]);

    
    
    return(
      <section id="Projects" className="w-full lg:h-screen">
        <div className="container mx-auto px-4 py-10 flex gap-8 justify-center">
          <motion.h1 whileInView={{color: "white",scale: 1.2,paddingBottom: 8,borderBottom: "4px solid #F4DFC8"}} transition={{duration:0.5,delay:0.2}} className="bold-italic text-4xl cursor-default text-gray-800">Projects</motion.h1>
        </div>
        <div className="container w-3/4 items-center mx-auto pt-20">
        {isLoading && <Grid visible={true} height="80" width="80" color="#F4DFC8" ariaLabel="grid-loading" radius="12.5" wrapperStyle={{}} wrapperClass="grid-wrapper"/>}
        {isError && <h3 className="italic text-3xl cursor-default text-gray-600">Error Fetching Data......</h3>}
          {data && <div className="slider-container"><Slider {...settings}>
              {data.map((project,index)=><Cards project={project} key={index}/>)}
            </Slider></div>}

        </div>
      </section>
    )
}

export default Project;