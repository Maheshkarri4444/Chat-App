import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='min-h-[65vh] max-h-[65vh] sm:max-h-[100vh] w-[60vw] min-w-[380px] sm:w-full flex flex-col p-4 pb-10 border-r border-slate-500'>
        <SearchInput/>
        <div className='px-3 sm:divider'></div>
        <Conversations/>
        <LogoutButton/>
    </div>
  )
}

export default Sidebar
