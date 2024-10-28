import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function RootLayout() {
  return (
    <div>
    <Header />
    <div className='mt-60'></div>
    <Outlet />
    </div>
  )
}

export default RootLayout
