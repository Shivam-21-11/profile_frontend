import {React,useState} from "react";
import { motion } from "framer-motion";

function Message({apiLink}){
    const [name,setName] = useState('');
    const [msg,setMsg] = useState('');

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const response = await fetch(`${apiLink}/message`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({name,msg})
            });
            const responseData = await response.json();
            if(responseData.status === 'success'){
              setMsg('')
              setName('')
              alert(`Message Sent (insert_id : ${responseData.insert_id})`);
            }else{
              alert(`Message Failed (error : ${responseData.error})`);
            }
        } catch (error){
            alert(error);
        }
      };


    return (
<section id="Message" className="w-full h-screen">
    <div className="container mx-auto px-4 py-10 lg:px-24 flex gap-6 justify-center">
    <motion.h1 whileInView={{color: "white",scale: 1.2,paddingBottom: 8,borderBottom: "4px solid #F4DFC8"}} transition={{duration:0.5,delay:0.2}} className="bold-italic text-4xl cursor-default text-gray-800">Message</motion.h1>
    </div>
    <div className="container mx-auto px-4 py-10 lg:px-24">
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 justify-center">
                <div className="flex flex-col items-start">
                    <h1 className="bold-italic text-2xl cursor-default text-white">Name :</h1>
                    <input placeholder='Lamen Corpus' value={name} type="text" className="bg-gray-800 p-2 mt-4 rounded-lg text-white w-full italic" onChange={(e)=>setName(e.target.value)} required/>
                </div>
        
                <div className="flex flex-col items-start">
                    <h1 className="bold-italic text-2xl cursor-default text-white">Message :</h1>
                    <textarea placeholder='This is just a lorem ipsum text' value={msg} type="text" rows="4" className="italic bg-gray-800 p-2 mt-4 rounded-lg text-white w-full" onChange={(e)=>setMsg(e.target.value)} required/>
                </div>
        
                <div className="flex flex-col items-center">
                    <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} type="Submit" className="text-white px-6 py-4 rounded bold border border-white hover:bg-white hover:text-black">Send</motion.button>
                </div>
                <div className="flex flex-col items-center">
                    <p className="italic text-gray-400 mt-2 text-sm">*It is prefered if you contact me using my socials provided in contact section for faster response.</p>
                </div>
            </div>
      </form>
      <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="fixed bottom-4 right-4 bg-white p-2 rounded-full" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}><motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src="https://img.icons8.com/metro/26/up--v1.png" alt="up"/></motion.button>
    </div>
    
    
    
    </section>)
}

export default Message;