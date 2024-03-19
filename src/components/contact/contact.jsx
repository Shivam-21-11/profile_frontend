import {React} from "react";

function Contact(){
    return (
<section id="Contact">
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
    )
}

export default Contact;