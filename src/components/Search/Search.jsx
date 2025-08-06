import React from 'react'
import { IoIosSearch } from "react-icons/io";
import SearchCard from './SearchCard';
import { ImSpinner2 } from "react-icons/im";
import { GitHubContext } from '../../context/GitHubUserContext';



function Search({ setShowUI }) {



   const {
      searchTerm,
      setSearchTerm,
      userData,
      isLoading,
      isError,
      handleSubmit,
      showSearchCard,
      setShowSearchCard
   } = React.useContext(GitHubContext);


   return (
      <div className="bg-[url('/images/bg-md.jpg')] bg-no-repeat bg-cover bg-center lg:bg-left w-full h-[25vh] flex justify-center ">
         <div className='flex flex-col w-mx-auto w-10/12 md:w-5/12 lg:w-4/12 gap-2'>
            <form onSubmit={handleSubmit} className=''>
               <div className='flex items-center bg-[#20293A] mt-6 text-white rounded-md p-3 gap-2'>
                  <IoIosSearch className='text-2xl' />
                  <input type='text' value={searchTerm} className=" rounded-md outline-none w-full" onChange={(e) => setSearchTerm(e.target.value)} placeholder='username' />
               </div>
            </form>
            {isLoading && <ImSpinner2 className='animate-spin mx-auto text-2xl' />}
            {isError && <p>An Error Occurred...</p>}
            {userData && showSearchCard && <SearchCard data={userData} setShowUI={setShowUI} onHide={() => setShowSearchCard(false)} />}
         </div>
      </div >
   )
}




export default Search