import React from 'react'
import fork from '../../assets/Nesting.svg'
import star from '../../assets/Star.svg'


const truncate = (text, maxLength = 60) =>
   text?.length > maxLength ? text.slice(0, maxLength) + '...' : text;


function RepoCard({ name, desc, forks, stars }) {
   return (

      <div className='bg-gradient-to-r flex flex-col gap-4 rounded-xl p-6 from-[#111729] to-[#1D1B48]'>
         <h3 className='text-2xl'>{name}</h3>
         <p className='text-xl text-[#97A3B6]'>{truncate(desc) || "No Description"}</p>
         <div className='flex gap-2 items-center'>
            <div className='flex items-center'>
               <img src={fork} alt="" className='h-8' />
               <span>{forks}</span>
            </div>
            <div className='flex items-center'>
               <img src={star} alt="" className='h-8' />
               <span>{stars}</span>
            </div>
         </div>
      </div>

   )
}


const ButtonCard = ({ type, value }) => {
   return (
      <div>
         <img src={type} alt="" />
         <span>{value}</span>
      </div>
   )
}


export default RepoCard