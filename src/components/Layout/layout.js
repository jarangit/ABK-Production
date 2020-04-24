import React from "react"
import MainMenu from './memus'
import Footer from './footer'
// import './Layout.css'
import '../../lib/fontawesome/css/all.css'
import {styled, createGlobalStyle} from 'styled-components'


const GlobalStyle = createGlobalStyle`
  body,html{
    padding: 0 ;
    margin: 0 ; 
    height: 100%; 
  }
  body{
    display: flex;
    flex-direction: column;
  }
@font-face {
  font-family: myFirstFont;
  src: url(../font/Kanit-Light.ttf);
}

* {
  font-family: myFirstFont;
}

h1 ,h2 ,h3 ,h4 ,h5 ,h6,p {
  padding: 0;
  margin: 15px 0;
}
a {
  text-decoration: none;
  color: #17949b;
}

.toggle {
  text-align: right;
  display:none;
} 
`

const LayoutWrapper = styled.div`
    max-width:1064px;
    margin: 0 auto;
    flex: 1 0 auto;
    @media all and (max-width: 1024px){
      padding: 0 5%;
    }
`

const Layout = ({ children }) => {
  return(
    <GlobalStyle>
      <MainMenu/>
        <LayoutWrapper>
            {children}
        </LayoutWrapper>
      <Footer/>
    </GlobalStyle>
  )
}

export default Layout
