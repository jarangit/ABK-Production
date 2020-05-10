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
const SlideHeader = (props) => {
   const pathName = globalHistory.location.pathname
    const {dataImgToSlide} = props
    console.log(dataImgToSlide)
    console.log(pathName)
    if(pathName === '/'){
      return(
        <div>
          <img src= "https://api.abk-store.com/wp-content/uploads/2020/05/welding-2178127.png" width = "100%" />
        </div>
      )
    }else if(dataImgToSlide === undefined){
      return 'no banner'
    }else{
      return(
        <div>
        <img src= {props.dataImgToSlide} width = "100%" />
      </div>
      )
    }
    
}

export default SlideHeader;