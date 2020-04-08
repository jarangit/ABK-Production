import React from 'react'
import slide1 from '../../images/slide-header/grinding.png'
import styled from 'styled-components'



//--------------Style
const Slide1 = styled.img`
  background-size: cover;
  width:100%;
  height: auto;
  position: relative;
`


//------------------------------------------------------------
const SlideHeader = (props) => {
  console.log(props.testProps)
    return(
      <div>
        {props.testProps}jaran
      </div>
    )
    
}

export default SlideHeader;