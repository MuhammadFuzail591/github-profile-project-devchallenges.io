import React from 'react'

function SearchCard({ data, onHide, setShowUI }) {


   const runClick = () => {
      onHide();
      setShowUI(true)
   }

   return (
      <div onClick={runClick} className='flex items-center bg-[#111729] gap-2 rounded-md p-1.5 cursor-pointer'>
         <div className='w-[100px] h-[100px]'>
            <img src={data.avatar_url} alt={data.name} className='object-cover rounded-md w-full h-full' />
         </div>
         <div className=' flex flex-col justify-center gap-1.5'>
            <h3 className='font-medium'>{data.name || "No Name"}</h3>
            <p className='text-[12px] font-light text-[#97A3B6]'>{data.bio || "No Bio Found"}</p>
         </div>
      </div>
   )
}

export default SearchCard