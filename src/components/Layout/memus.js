import React, {Component, useState} from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
// import Logo from '../../images/logo/logo.png'


//--------Style--------
const LogoImg = styled.img`
    padding: auto 5px;
    width: 75px; 
    height: auto;
    @media all and (max-width: 900px){
      margin: 10px 5px 5px 5px;
      width: 50px;
    }
`
const MenusItem = styled.div`
    display: flex; 
    width: 100%;
    padding: 0;
    height: auto; 
    justify-content: space-between; 
    background-color: #00181a;
    
`
const LayoutWrapper = styled.div`
    width:1064px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 50% auto;
`

const UlMain = styled.ul`
  display:flex;
  flex-wrap:wrap;
  float:right;
  li{
    padding-top: 16px;
    list-style-type: none;
    :hover div{
      display:block;
    }
     div{
      text-decoration:none;
      display: none;
      position: absolute;
      z-index: 1;
      background:#00181a;
      a{
          display:block;
          padding: 12px 16px;
          text-decoration: none;
          text-align: left;
      }
     }
  }
  a{
      color: #ffff;
      text-decoration: none;
      margin: 10px;
      font-size: 16px;
      :hover{
        color: #20cbd4;
      }
    }
    
    @media all and (max-width: 900px) {
        .toggle{
          display:block;
        }  
        li:not(.toggle){
        display:none
        }     
        
       &.active{
              li:not(.toggle){
              display:block;
            }     
            display:block;

            li{
              div{
                display:block;
                position:relative;
                a{
                  padding: 0 16px;
                }
              }
            }
          }                    
    }

    @media all and  (min-width: 375px){
      
    }
`
 //--------EndStyle-------



class MainMenu extends Component {
  render(){
  return(
    <StaticQuery  query={ graphql`
    {
  wordPress {
    menu(id: "TWVudToxNg==") {
      name
      menuItems {
        edges {
          node {
            label
            url
            id
            childItems {
              edges {
                node {
                  url
                  label
                  id
                }
              }
            }
          }
        }
      }
    }
  }
}
` } render = { props => {
  const [ navOpen, setNavOpen ] = useState(false)
  return(
   <div>
      <MenusItem>
      <LayoutWrapper>
      <div>
        <Link to="/">
            <LogoImg src="https://api.abk-store.com/wp-content/uploads/2020/04/logo.png"/> 
        </Link>    
      </div>
      <div>
          <UlMain className = { navOpen ? 'active' : ''}>
                  <li  className="toggle" onClick = { () => { setNavOpen(!navOpen) } }>
                    <a to ="#" key="navOpen"><i className="fas fa-bars"></i></a>
                  </li>
              { props.wordPress.menu.menuItems.edges.map(item => {
                const wpUrl = `https://api.abk-store.com/`
                const onlyPath = decodeURI( item.node.url.replace(wpUrl,``))   
                return(
                  <li>
                      <Link key= {item.id} to = {`/${onlyPath}/`} > {item.node.label}</Link>
                            <div>
                                  {item.node.childItems.edges && item.node.childItems.edges.map(subItem => {
                                    const wpUrlCatPro = `http://api.abk-store.com/category/`
                                    const onlyPathSub = decodeURI( subItem.node.url.replace(wpUrlCatPro,``))
                                    if(subItem)
                                    return(
                                      <Link key={ subItem.node.id } to = {onlyPath + '/' + onlyPathSub}> {subItem.node.label} </Link>
                                    )
                                  })}
                            </div>
                  </li>
                )
                })} 
          </UlMain>
      </div>
      </LayoutWrapper>
    </MenusItem>
    <div>
    </div>
   </div>
  )
}} />
)
  }
}

export default MainMenu;
