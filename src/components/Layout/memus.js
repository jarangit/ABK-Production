import React, {Component} from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import Logo from '../../images/logo/logo.png'
//Style

const LogoImg = styled.img`
    padding: 5px;
    width: 75px; 
    height: auto;
`
const MenusItem = styled.div`
display: flex; 
width: 100%;
padding: 0;
height: auto; 
justify-content: space-between; 
align-items: center; 
position:initial; 
background-color: #00181a;
`
const LinkDw = styled.li`
  padding:15px;
  list-style-type: none;
  text-align: left;
  background: #00181a;
  width: 200px;
  a{
    color: #ffff;
    text-decoration: none;
    margin: 10px;
    font-size: 16px;
    :hover{
      color: #20cbd4;
    }
  }
`
const LiDrop = styled.li`
    text-decoration:none;
    display: none;
    position: absolute;
    z-index: 1;
`
const Li = styled.li`
    padding-top: 16px;
    display:inline-block;
    position: relative;
    list-style-type: none;
     &:hover ${LiDrop} {
      display: block;
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

  
`
// const MenuLink = styled(Link)`
//   color: #ffff;
//   text-decoration: none;
//   margin: 10px;
//   font-size: 16px;
//   &:hover${MenuLink} {
//     color: #20cbd4;
//   }
// `

const LayoutWrapper = styled.div`
    width:1064px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 50% auto;
`

const Div2 = styled.div`
    text-align: right;
`
const Ul = styled.ul`
  padding:0;
`
 
class MainMenu extends Component {
  render(){
  return(
    <StaticQuery  query={ graphql`
    {
  wordPress {
    menu(id: "TWVudToy") {
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
  return(
    <MenusItem>
      <LayoutWrapper>
      <div>
        <Link to="/home">
            <LogoImg src={Logo} />
        </Link>    
            
    </div>
    <Div2>
      {/* <div> {this.props.test} </div> */}
        <ul>
            { props.wordPress.menu.menuItems.edges.map(item => {
              const wpUrl = `http://localhost/Project/ABK/www/`
              const onlyPath = decodeURI( item.node.url.replace(wpUrl,``))

             
               return(
                 <Li>
                <Link key= {item.id} to = {`/${onlyPath}/`}> {item.node.label} </Link>
                   <LiDrop>
                     
                    <Ul>
                        {item.node.childItems.edges && item.node.childItems.edges.map(subItem => {
                           const wpUrlCatPro = `http://localhost/Project/ABK/www/category/`
                           const onlyPathSub = decodeURI( subItem.node.url.replace(wpUrlCatPro,``))
                          
                          return(
                            <LinkDw> <Link key={ subItem.node.id } to = {onlyPath + '/' + onlyPathSub}> {subItem.node.label} </Link> </LinkDw>
                          )
                        })}
                    </Ul>
                   </LiDrop>
                </Li>
               )
              })} 
        </ul>
    </Div2>
      </LayoutWrapper>
    </MenusItem>
  )
}} />
)
  }
}

export default MainMenu;