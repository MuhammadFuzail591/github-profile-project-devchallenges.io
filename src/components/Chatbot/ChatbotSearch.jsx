import React from 'react'
import { IoIosSearch } from 'react-icons/io';
import { FaArrowUp } from "react-icons/fa6";



const handleSubmit = (e) => {

   e.preventDefault();

   return
}

function ChatbotSearch() {

   const [prompt, setPrompt] = React.useState('')

   return (
      <form onSubmit={handleSubmit} className=''>
         <div className='flex items-start bg-[#27272A] mt-6 text-white rounded-t-lg mb-1 p-4 gap-2 '>
            {/* <IoIosSearch className='text-2xl' /> */}
            <textarea value={prompt} rows={4} className="resize-none outline-none w-full" onChange={(e) => setPrompt(e.target.value)} placeholder='What You wanna explore about the profile.' ></textarea>
            <FaArrowUp className={`${prompt ? "bg-blue-700" : "bg-gray-500"} text-3xl p-2 border-0 rounded-md transition-colors ease-in-out duration-300 cursor-pointer `} />
         </div>
      </form>
   )
}

export default ChatbotSearch