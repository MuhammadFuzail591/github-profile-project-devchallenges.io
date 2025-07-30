import React from 'react'
import Search from '../Search'
import Header from '../Header'
import RepoGrid from '../RepoGrid'
// import './App.css'

function App() {
  const [showUI, setShowUI] = React.useState(false)

  return (
    <div className='font-vietnam flex flex-col'>
      <Search setShowUI={setShowUI} />
      {showUI ? <Header /> : ''}
      {showUI ? <RepoGrid /> : ''}
    </div>
  )
}

export default App
