import React from 'react'
import {Link} from 'gatsby'



//--------------Style
// const Slide1 = styled.img`
//   background-size: cover;
//   width:100%;
//   height: auto;
//   position: relative;
// `


//------------------------------------------------------------
const SlideHeader = (props) => {
    const {dataImgToSlide, pathname} = props
    if(dataImgToSlide === false){
      return 'ไม่มีเว้ย'
    }else if(pathname === '/'){
      return(
        <div>
          <img src= "https://api.abk-store.com/wp-content/uploads/2020/05/welding-2178127-scaled.jpg" width = "100%" />
        </div>
      )
    }else{
      return(
        <div>
        <img src= {props.dataImgToSlide} width = "100%" />
      </div>
      )
    }
    
}

export default SlideHeader;