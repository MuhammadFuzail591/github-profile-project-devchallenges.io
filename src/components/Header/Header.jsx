import React from 'react'
import { GitHubContext } from '../../context/GitHubUserContext'

function Header() {


  const { userData } = React.useContext(GitHubContext)

  if (!userData) return


  return (
    <div className='flex items-end relative gap-12 -mt-16 mx-auto w-10/12 xl:w-8/12'>
      <div className='w-[120px] absolute -top-0 lg:static h-[120px] p-2 pb-0 rounded-2xl bg-[#20293A] '>
        <img src={userData?.avatar_url} alt="" className='object-cover w-full h-full rounded-lg' />
      </div>
      <div className='flex gap-4 flex-col mt-35 lg:mt-20 lg:flex-row'>
        <HeaderCard text={"Followers"} text2={userData?.followers || 0} />
        <HeaderCard text={"Following"} text2={userData?.following || 0} />
        <HeaderCard text={"Location"} text2={userData?.location || "Not Known"} />
      </div>
    </div>

  )
}

const HeaderCard = ({ text, text2 }) => {
  return (
    <div className='flex bg-[#111729] gap-4 p-4 w-fit rounded-lg'>
      <p>{text}</p>
      <div className=' border-l'></div>
      <p>{text2}</p>
    </div>
  )
}

const Skeleton = () => {
  return (
    <>
      <div className='w-[120px] h-[120px] rounded-2xl bg-[#20293A] animate-pulse'></div>
      <div className='flex gap-4 flex-col mt-35 lg:mt-20 lg:flex-row'>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </>
  )
}

const SkeletonCard = () => {
  <div className='flex bg-[#111729] gap-4 p-4 w-[160px] h-[60px] rounded-lg animate-pulse'>
    <div className='w-[60%] h-[14px] bg-[#2C3A4F] rounded'></div>
    <div className='w-[30%] h-[14px] bg-[#2C3A4F] rounded'></div>
  </div>
}
export default Header