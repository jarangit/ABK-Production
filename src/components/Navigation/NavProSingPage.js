import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const Div = styled.div`
  max-width: 2500px;
  margin: 30px 0;
  display: flex;
 
`
const DivItem = styled.div`
  border-left: 1px solid;
  padding: 0 15px;
  a{
    text-decoration:none;
    color: #8f8f8f;
    :hover{
    color:#1B2B45;
  }
  }
` 
const DivActive = styled.div`
  color:#17949b;
  font-weight: bold;
`



const NavProSingPage = (props) =>{
  return(
    <Div> 
      <DivItem>
        <Link to = 'home'> home </Link>
      </DivItem>

      <DivItem>
        <Link to = 'product'> product </Link>
      </DivItem>

      <DivItem>
        {props.data.productCategories.nodes.map(catItem=>{
          return(
            <Link to = {decodeURI('product/'+catItem.slug)}> {catItem.name} </Link>
          )
        })}
      </DivItem>
      
      <DivItem>
          <DivActive> {props.data.name}  </DivActive>
      </DivItem>
    </Div>
  )
}
export default NavProSingPage