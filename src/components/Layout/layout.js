import React from "react"
import MainMenu from './memus'
import Footer from './footer'
import '../../lib/css/Layout.css'
import '../../lib/fontawesome/css/all.css'
import styled from 'styled-components'
import SlideHeader from "./slideHeader"

const LayoutWrapper = styled.div`
    width:1064px;
    margin: 0 auto;
`

const Layout = ({ children }) => {
  return(
    <div>
      {/* <GlobalStyles/> */}
      <MainMenu/>
      {/* <SlideHeader/> */}
      <LayoutWrapper>
      {children}

      </LayoutWrapper>
      <Footer/>
    </div>
  )
}

export default Layout
