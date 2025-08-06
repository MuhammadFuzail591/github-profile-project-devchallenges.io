import React from 'react'
import { LuBot } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import ChatbotSearch from './ChatbotSearch';


function Chatbot() {

   const [messages, setMessages] = React.useState([{
      role: "user",
      message: "Hello"
   }, {
      role: "bot",
      message: "Hi there, How Can I help you today..?"
   }
   ])

   return (
      <div className='h-full w-full bg-blue-800 p-4 flex flex-col justify-between'>

         <div>
            <Message role={"user"} message={"Heloo"} />
            <Message role={"user"} message={"Heloo"} />
            <Message role={"user"} message={"Heloo"} />
            <Message role={"user"} message={"Heloo"} />
         </div>
         <div className=''>
            <ChatbotSearch />
         </div>
      </div>
   )
}

const Message = ({ role, message, className }) => {

   return (
      <div className={`flex items-center gap-4 ${className}`}>
         <span className='bg-red-300 p-2 rounded-full'>{role === "user" ? <FaRegUser /> : <LuBot />}</span>
         <span className='bg-red-300 p-2 rounded-lg'>{message}</span>
      </div>
   )
}

export default Chatbot