import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='flex flex-col p-4 border-r border-slate-500'>
        <SearchInput/>
        <div className='px-3 divider'></div>
        <Conversations/>
        <LogoutButton/>
    </div>
  )
}

export default Sidebar