import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'


//-------------styled-----------
const LinkButt = styled(Link)`
    text-decoration: none;
    color: white;
    font-weight:bold;
    /* padding: 20px; */
    button{
        background-color: #17949b;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 0.5rem;
    margin-top: 20px;
    font-weight: bold;
    :hover{
        background-color: #42D0D8;
    }
}
`
const Column = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: space-around;
    align-items:center;
    margin: 100px 0;
    box-shadow: 0 10px 25px rgba(0,0,0,.2);
    border-radius: 10px;

    
`
const Column1 = styled.div`
  margin: 10px;
  width:500px;
  font-size: 16px;
`
const Img = styled.img`
    width: 100%;
`



//--------endStyled----------------


const Promote = () => {
    return(
            <Column>
               
                <Column1>
                <div>
                    <Img src="https://api.abk-store.com/wp-content/uploads/2020/05/pinion-640484-scaled.jpg"/>
                </div>
                </Column1>
                <Column1>
                    <div>
                        บริษัทเป็นผู้ผลิตและส่งออกผลิตภัณฑ์สับปะรดบรรจุกระป๋อง ผลไม้รวมบรรจุกระป๋อง น้ำสับปะรดเข้มข้นบรรจุในถุงปลอดเชื้อ ผลไม้ตามฤดูกาล ภายใต้เครื่องหมายการค้าของลูกค้าที่สำคัญๆในต่างประเทศ และภายใต้เครื่องหมายการค้าของบริษัท “SIAM FOOD” ซึ่งเป็นที่รู้จักและเชื่อถือได้ของลูกค้ามากว่า 49 ปี บริษัทมีไร่และโรงงานสับปะรดอยู่ที่จังหวัดชลบุรี
                    </div>
                    <LinkButt to ='product' key="#"> 
                                    <button> เยี่ยมชมสินค้า  </button>
                                </LinkButt> 
                </Column1>           
            </Column>
    )
}



export default Promote;
