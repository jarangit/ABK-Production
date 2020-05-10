import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const Div = styled.div`
  max-width: 2500px;
  margin: 30px 0;
  display: flex;
`
const DivItem = styled.div`
  line-height:10px;
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



const NavPage = (props) =>{
  return(
    <Div> 

      <DivItem>
        <Link to = '/'> home </Link>
      </DivItem>
    
      <DivItem>
          <DivActive> {props.data.title}  </DivActive>
      </DivItem>

    </Div>
  )
}
export default NavPage