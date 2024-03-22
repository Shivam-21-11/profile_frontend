import {React} from "react";
import {motion} from "framer-motion";

function Technology(){
    return (
<section id="Technologies" className="w-full h-fit">
    <div className="container mx-auto px-4 py-10 lg:px-24 flex gap-6 justify-center">
    <motion.h1 whileInView={{color: "white",scale: 1.2,paddingBottom: 8,borderBottom: "4px solid #F4DFC8"}} transition={{duration:0.5,delay:0.2}} className="bold-italic text-4xl cursor-default text-gray-800">Technology</motion.h1>
    </div>
    <div className="container mx-auto px-4 py-10 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-center">
            <div className="flex flex-col items-center">
                <img src="https://img.icons8.com/color/96/000000/python.png" alt="python" />
                <h1 className="bold text-xl cursor-default text-white mt-4">Python</h1>
            </div>
            <div className="flex flex-col items-center">
                <img src="https://img.icons8.com/color/96/000000/tensorflow.png" alt="tensorflow" />
                <h1 className="bold text-xl cursor-default text-white mt-4">Tensorflow</h1>
            </div>
            <div className="flex flex-col items-center">
                <img src="https://img.icons8.com/color/96/000000/opencv.png" alt="opencv" />
                <h1 className="bold text-xl cursor-default text-white mt-4">OpenCV</h1>
            </div>
            <div className="flex flex-col items-center">
                <img src="https://img.icons8.com/color/96/amazon-web-services.png" alt="react" />
                <h1 className="bold text-xl cursor-default text-white mt-4">SageMaker</h1>
            </div>
            <div className="flex flex-col items-center">
                <img src="https://img.icons8.com/fluency/96/pytorch.png" alt="react" />
                <h1 className="bold text-xl cursor-default text-white mt-4">Pytorch</h1>
            </div>
            <div className="flex flex-col items-center">
                <img src="https://img.icons8.com/color/96/git.png" alt="react" />
                <h1 className="bold text-xl cursor-default text-white mt-4">Git</h1>
            </div>
        </div>
    </div>
</section>
    )
}

export default Technology;