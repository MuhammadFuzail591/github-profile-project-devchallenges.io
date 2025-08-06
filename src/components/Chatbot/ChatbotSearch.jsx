import React from 'react'
import { IoIosSearch } from 'react-icons/io';


const handleSubmit = (e) => {

   e.preventDefault();

   return
}

function ChatbotSearch() {

   const [prompt, setPrompt] = React.useState('')

   return (
      <form onSubmit={handleSubmit} className=''>
         <div className='flex items-center bg-[#20293A] mt-6 text-white rounded-md p-3 gap-2'>
            <IoIosSearch className='text-2xl' />
            <input type='text' value={prompt} className=" rounded-md outline-none w-full" onChange={(e) => setPrompt(e.target.value)} placeholder='What YOu wanna explore about the profile' />
         </div>
      </form>
   )
}

export default ChatbotSearch