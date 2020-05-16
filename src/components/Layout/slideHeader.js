import React from 'react'
import { globalHistory } from "@reach/router"



//--------------Style
// const Slide1 = styled.img`
//   background-size: cover;
//   width:100%;
//   height: auto;
//   position: relative;
// `


//------------------------------------------------------------
const  SlideHeader =   (props) => {
    const pathName =  globalHistory.location.pathname
    console.log(pathName)
    const {dataImgToSlide} =  props

     if ( dataImgToSlide != undefined){
       return  (
        <div>
          <img src= {props.dataImgToSlide} width = "100%" alt='หหห' />
        </div>
      )
    }else if(pathName === '/'){
      return(
        <div>
          <img src= "https://api.abk-store.com/wp-content/uploads/2020/05/welding-2178127.png" width = "100%" alt='banner'/>
        </div>
      )
    }else if(props.slugCatPage === 'custommer'){
      return(
        <div>
          <img src= "https://api.abk-store.com/wp-content/uploads/2020/05/sparks-383037.png" width = "100%" alt='banner'/>
        </div>
      )
    }else{
      return ''
    }
    
}

export default SlideHeader;