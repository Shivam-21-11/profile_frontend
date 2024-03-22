import {React} from "react";
import{motion} from "framer-motion";

function Contact(){
    return (
<section id="Contact" className="w-full h-fit">
    <div className="container mx-auto px-4 py-10 lg:px-24 flex gap-6 justify-center">
    <motion.h1 whileInView={{color: "white",scale: 1.2,paddingBottom: 8,borderBottom: "4px solid #F4DFC8"}} transition={{duration:0.5,delay:0.2}} className="bold-italic text-4xl cursor-default text-gray-800">Contact</motion.h1>
    </div>
    <div className="container mx-auto px-4 py-10 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            <div className="flex flex-col items-center">
                <h1 className="bold-italic text-2xl cursor-default text-white">Email</h1>
                <a href="mailto:shivamsingh2111@gmail.com" target="_blank" rel="noopener noreferrer"><p className="italic text-gray-400 mt-2">Shivamsingh2111@gmail.com</p></a>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="bold-italic text-2xl cursor-default text-white">LinkedIn</h1>
                <a href="https://www.linkedin.com/in/shivam-singh-aa2468201/" target="_blank" rel="noopener noreferrer"><p className="italic text-gray-400 mt-2">https://www.linkedin.com/in/shivam-singh-aa2468201/</p></a>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="bold-italic text-2xl cursor-default text-white">Kaggle</h1>
                <a href="https://www.kaggle.com/shivam2111" target="_blank" rel="noopener noreferrer"><p className="italic text-gray-400 mt-2">https://www.kaggle.com/shivam2111</p></a>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="bold-italic text-2xl cursor-default text-white">GitHub</h1>
                <a href="https://github.com/Shivam-21-11" target="_blank" rel="noopener noreferrer"><p className="italic text-gray-400 mt-2">https://github.com/Shivam-21-11</p></a>
            </div>
        </div>
    </div>

</section>
    )
}

export default Contact;