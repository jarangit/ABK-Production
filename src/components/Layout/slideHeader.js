import React from 'react'



//--------------Style
// const Slide1 = styled.img`
//   background-size: cover;
//   width:100%;
//   height: auto;
//   position: relative;
// `


//------------------------------------------------------------
const SlideHeader = (props) => {
  // console.log(props.dataImg.testProps.mediaItemUrl)
    if(props.dataImgToSlide === false){
      return 'ไม่มีเว้ย'
    }else{
      return(
        <div>
          <img src= {props.dataImgToSlide} width = "100%" />
        </div>
      )
    }
    
}

export default SlideHeader;