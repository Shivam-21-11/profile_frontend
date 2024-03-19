import React from "react";
import banner from '../../assets/banner-pfp.png';
import { TypeAnimation } from 'react-type-animation';


function Banner(){
    return (
<section>
      <div className="container mx-auto px-4 py-10 lg:px-24 flex gap-6">
        <div className="flex flex-col justify-center">
        <TypeAnimation className="font-bold text-4xl text-white"
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
        <div className="hidden sm:block">
      <img src={banner} width={350} alt="img-pfp" className="rounded-full" style={{clipPath: 'circle(50%)'}} />
      </div>
      </div>
    </section>

    )
}
export default Banner;