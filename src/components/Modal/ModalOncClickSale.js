import React from 'react';
import styled from 'styled-components'

const Img = styled.img`
        margin: 5px 10px;
        width:50px;
        height : 50px;
`
const ModalSty = styled.div`
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  div{
    background-color: #fefefe;
    margin: auto;
    padding: 10px 50px;
    width: 40%;
    border-radius: 0.5rem;
    /* text-align:center; */
    h1{
        text-align:center;
    }

    span{
        color: #aaaaaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
        }
        ul{
            padding: 0;
            li{
                list-style:none;
                display:flex;
                /* display:inline-block; */
                a{
                    list-style:none;
                    display:flex;
                }
            }
        }
        textarea{
            width: 50%;
            height: 50px;
        }
    }
    @media all and  (max-width: 900px){
        div{
            width:85%;
            padding: 10px 20px;
        }
    }
    `
const ModalOnClickSale = (props) => {

    const ShowModal = () => {
        if (props.valueClick === true){
            return ''
        }else{
            return(
                <ModalSty>
                    <div >
                    <span onClick = {props.onClose}>x</span>
                        <h1>ติดต่อเรา</h1>
                        <p>หากต้องสอบถามเพิ่มเกี่ยวกับสินค้าของเราหรือต้องการสั้งซื้อสินค้ากรุณาติดต่อช่องทางต่อไปนี้</p>
                    <div>
                        <ul>
                            <li>
                                <a href = "https://line.me/R/ti/p/%40426ovedm" target="_blank" >
                                <Img src="https://api.abk-store.com/wp-content/uploads/2020/05/line.png" />
                                <p>abk_contactus</p>
                                </a>
                            </li>
                            <li>
                                <a href = "https://www.facebook.com/Jaranservice" target="_blank">
                                <Img src="https://api.abk-store.com/wp-content/uploads/2020/05/Facebook.png" />
                                <p>ABK เครื่องคั้นกะทิ</p>
                               </a>
                            </li>
                            <li>
                                <a href="mailto: abk.contactus@gmail.com" >
                                <Img src="https://api.abk-store.com/wp-content/uploads/2020/05/icon-mail.png" />
                                <p>abk.contactus@gmail.com</p>
                                </a>
                            </li>
                            <li>
                                <a href ="tel:0895937868" >
                                <Img src="https://api.abk-store.com/wp-content/uploads/2020/05/tel.png" />
                                <p>08-959-37868</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    </div>
                </ModalSty>
            )
        }
    }



    return ShowModal()


}

export default ModalOnClickSale