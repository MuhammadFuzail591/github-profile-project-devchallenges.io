import React from 'react'
import Chatbot from '../Chatbot'
import Search from '../Search'
import Header from '../Header'
import RepoGrid from '../RepoGrid'

function Home() {
   const [showUI, setShowUI] = React.useState(false)

   return (
      <div className='grid [grid-template-columns:1fr_1fr] h-full w-full'>

         <div className='font-vietnam flex flex-col'>
            <Search setShowUI={setShowUI} />
            {showUI ? <Header /> : ''}
            {showUI ? <RepoGrid /> : ''}
         </div>

         <Chatbot />
      </div>
   )
}

export default Home