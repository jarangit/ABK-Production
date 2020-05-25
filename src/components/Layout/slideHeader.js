import React from 'react'
import { globalHistory } from "@reach/router"
import styled from 'styled-components'


const Container = styled.div`
    position: relative;
    text-align: center;
    color: white;
`
const TextCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h1{
    font-size: 5vw;
  }
`

//------------------------------------------------------------
const  SlideHeader =   (props) => {
    const pathName =  globalHistory.location.pathname
    const {dataImgToSlide, slugCatPage, dataProCatPage} =  props
    console.log(dataProCatPage)
     if ( dataImgToSlide != undefined){
       return  (
        <Container>
          <img src= {dataImgToSlide.featuredImage.mediaItemUrl} width = "100%" alt='หหห' />
          <TextCenter> <h1>{dataImgToSlide.title}</h1> </TextCenter>
        </Container>
      )
    }else if (dataProCatPage != undefined ){
      return(
        <Container>
          <img src= {dataProCatPage.image.mediaItemUrl} width = "100%" alt='หหห' />
          <TextCenter> <h1>{dataProCatPage.name}</h1> </TextCenter>
        </Container>
      )
    }else if(pathName === '/'){
      return(
        <div>
          <img src= "https://api.abk-store.com/wp-content/uploads/2020/05/welding-2178127.png" width = "100%" alt='banner'/>
        </div>
      )
    }else if(slugCatPage === 'custommer'){
      return(
        <Container>
          <img src= "https://api.abk-store.com/wp-content/uploads/2020/05/sparks-383037.png" width = "100%" alt='banner'/>
          <TextCenter></TextCenter>
        </Container>
      )
    }else{
      return(<div></div>)
    }
    
}
export default SlideHeader;