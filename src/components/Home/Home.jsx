import React from 'react'
import Chatbot from '../Chatbot'
import Search from '../Search'
import Header from '../Header'
import RepoGrid from '../RepoGrid'

function Home() {
   const [showUI, setShowUI] = React.useState(false)

   return (
      <div className='h-full flex w-full'>

         <div className='font-vietnam flex flex-col w-full'>
            <Search setShowUI={setShowUI} />
            {showUI ? <Header /> : ''}
            {showUI ? <RepoGrid /> : ''}
         </div>

         {/* <Chatbot /> */}
      </div>
   )
}

export default Home