import React from 'react'

import { GitHubContext } from '../../context/GitHubUserContext'
import RepoCard from './RepoCard'

function RepoGrid() {
   const { userRepos, userData } = React.useContext(GitHubContext)


   const [viewAll, setViewAll] = React.useState(false)

   if (!userRepos) return




   return (
      <div className='w-10/12 mx-auto mt-10'>
         <div className='flex flex-col gap-4'>
            <h2 className='text-4xl'>{userData.name}</h2>
            <p>{userData.bio}</p>
         </div>

         <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10'>

            {
               (viewAll ? userRepos : userRepos.slice(0, 4)).map((repo) => (
                  <RepoCard name={repo.name} key={repo.id} desc={repo.description} forks={repo.forks} stars={repo.stargazers_count} />
               ))
            }

            <button className='my-4' onClick={() => setViewAll(true)}>View All Repositories</button>
         </div>
      </div>
   )
}





export default RepoGrid