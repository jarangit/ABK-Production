import React from "react"
import MainMenu from './memus'
import Footer from './footer'
import '../../lib/css/Layout.css'

const Layout = ({ children }) => {
  return(
    <div>
      {/* <GlobalStyles/> */}
      <MainMenu/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout
