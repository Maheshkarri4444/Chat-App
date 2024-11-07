import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='h-[65vh] w-[60vw] min-w-[320px] sm:w-full flex flex-col p-4 pb-10 border-r border-slate-500'>
        <SearchInput/>
        <div className='px-3 divider'></div>
        <Conversations/>
        <LogoutButton/>
    </div>
  )
}

export default Sidebar