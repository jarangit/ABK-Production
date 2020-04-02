import React from "react"
import MainMenu from './memus'
import Footer from './footer'
import '../../lib/css/Layout.css'
import '../../lib/fontawesome/css/all.css'
import styled from 'styled-components'
import SlideHeader from "./slideHeader"

const LayoutWrapper = styled.div`
    max-width:1064px;
    margin: 0 auto;
    @media all and (max-width: 1024px){
      padding: 0 5%;
    }
`

const Layout = ({ children }, props) => {
  console.log(props.headerImg)
  return(
    <div>
      <MainMenu/>
        <LayoutWrapper>
            {children}
        </LayoutWrapper>
      <Footer/>
    </div>
  )
}

export default Layout
