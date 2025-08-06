import React from 'react'

function Layout({ children }) {
   return (
      <div className='h-full w-full'>
         {children}
      </div>
   )
}

export default Layout