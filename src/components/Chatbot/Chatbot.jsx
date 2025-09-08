import React from 'react'
import { LuBot } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import ChatbotSearch from './ChatbotSearch';
import { IoClose } from "react-icons/io5";


function Chatbot() {

   const [messages, setMessages] = React.useState([{
      role: "user",
      message: "Hello"
   }, {
      role: "bot",
      message: "Hi there, How Can I help you today..?"
   },
   {
      role: "user",
      message: "Hello"
   }, {
      role: "bot",
      message: "Hi there, How Can I help you today..?"
   },
   {
      role: "user",
      message: "Hello"
   }, {
      role: "bot",
      message: "Hi there, How Can I help you today..?"
   },
   {
      role: "user",
      message: "Hello"
   }, {
      role: "bot",
      message: "Hi there, How Can I help you today..?"
   },
   {
      role: "user",
      message: "Hello"
   }, {
      role: "bot",
      message: "Hi there, How Can I help you today..?"
   },
   {
      role: "user",
      message: "Hello"
   }, {
      role: "bot",
      message: "Hi there, How Can I help you today..?"
   },
   {
      role: "user",
      message: "Hello"
   }, {
      role: "bot",
      message: "Hi there, How Can I help you today..?"
   }
   ])

   return (
      <div className='h-screen w-full bg-[#08030D] p-4 pb-0 flex flex-col justify-between'>
         <div className='p-2 font-bold flex items-center justify-between'>
            <h4>Github Profile AI</h4>
            <IoClose className='text-2xl cursor-pointer' />
         </div>

         <div className='flex flex-1 flex-col p-2 overflow-y-scroll gap-2 my-scrollable-div'>
            {messages.map((msg) => <Message role={msg.role} message={msg.message} />)}
         </div>
         <div className=''>
            <ChatbotSearch />
         </div>
      </div>
   )
}

const Message = ({ role, message, className }) => {



   if (role === "user") return (
      <div className={`flex items-center gap-4 justify-end ${className}`}>
         <span className='bg-[#3F3F46] p-2 rounded-lg'>{message}</span>
         <span className='bg-[#3F3F46] p-2 rounded-full'><FaRegUser /></span>
      </div>
   )

   return (
      <div className={`flex items-center gap-4 s${className}`}>
         <span className='bg-[#27272A] p-2 rounded-full'><LuBot /></span>
         <span className='bg-[#27272A] p-2 rounded-lg'>{message}</span>
      </div>
   )
}

export default Chatbot