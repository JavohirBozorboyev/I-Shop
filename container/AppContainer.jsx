import React from 'react'
import BottomNav from '../components/Navbar/BottomNav'
import Navbar from '../components/Navbar/Navbar'

function AppContainer({children}) {
  return (
    <>
    <Navbar />
    <BottomNav />
    {children}
    </>
  )
}

export default AppContainer