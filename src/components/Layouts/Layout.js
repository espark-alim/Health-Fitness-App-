import React, { Children } from 'react'
import Navbar from '../Navbar/Navbar'

const Layout = ({Children}) => {
  return (
    <>
    <Navbar />
    {Children}
    {/* <Footer /> */}
    </>
  )
}

export default Layout
