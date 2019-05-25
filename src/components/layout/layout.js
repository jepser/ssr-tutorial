import React from 'react'
import Header from '../header'

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default MainLayout
