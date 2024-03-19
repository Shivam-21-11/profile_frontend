import {React,useState} from "react";


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
<section id="Message">
    <div className="container mx-auto px-4 py-10 lg:px-24 flex gap-6 justify-center">
        <h1 className="font-bold text-3xl cursor-default text-white">Message me</h1>
    </div>
    <div className="container mx-auto px-4 py-10 lg:px-24">
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 justify-center">
                <div className="flex flex-col items-start">
                    <h1 className="font-bold text-2xl cursor-default text-white">Name :</h1>
                    <input placeholder='Lamen Corpus' value={name} type="text" className="bg-gray-800 p-2 mt-4 rounded-lg text-white w-full" onChange={(e)=>setName(e.target.value)} required/>
                </div>
        
                <div className="flex flex-col items-start">
                    <h1 className="font-bold text-2xl cursor-default text-white">Message :</h1>
                    <textarea placeholder='This is just a lorem ipsum text' value={msg} type="text" rows="4" className="bg-gray-800 p-2 mt-4 rounded-lg text-white w-full" onChange={(e)=>setMsg(e.target.value)} required/>
                </div>
        
                <div className="flex flex-col items-center">
                    <button type="Submit" className="text-white px-6 py-4 rounded font-bold border border-white hover:bg-white hover:text-black">Send</button>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-gray-400 mt-2 text-sm">*It is prefered if you contact me using my socials provided in contact section for faster response.</p>
                </div>
            </div>
      </form>
    </div>
    
    
    
    </section>)
}

export default Message;