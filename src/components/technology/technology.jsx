import {React} from "react";


function Technology(){
    return (
<section id="Technologies">
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
    )
}

export default Technology;