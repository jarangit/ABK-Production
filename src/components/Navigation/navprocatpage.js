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
// const LinkItem = styled(Link)`
//   text-decoration:none;
//   color: #8f8f8f;
//   ${LinkItem}:hover&{
//     color:#1B2B45;
//   }
// `
const DivActive = styled.div`
  color:#17949b;
  font-weight: bold;
`



const NavProCatPage = (props) =>{
  return(
    <Div> 
      <DivItem>
        <Link to = 'home'> home </Link>
      </DivItem>

      <DivItem>
        <Link to = 'product'> Product </Link>
      </DivItem>

      <DivItem>
          <DivActive> {props.data.name}  </DivActive>
      </DivItem>
      
    </Div>
  )
}
export default NavProCatPage