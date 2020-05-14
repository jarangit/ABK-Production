import React from 'react';
import styled from 'styled-components'


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
    width: 50%;
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
                img{
                    margin: 5px 10px;
                    width:15%;
                }
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
                        <p>หากต้องสอบถามเพิ่มเกี่ยวกับสินค้าของเราหรือต้องการสั้งซื้อสินค้ากรูณาติดต่อช่องทาวต่อไปนี้คะ</p>
                    <div>
                        <ul>
                            <li>
                                <a href = "https://line.me/R/ti/p/%40426ovedm" target="_blank" >
                                <img src="https://api.abk-store.com/wp-content/uploads/2020/05/f7e8c32d420b6da05f807488ebf8a1e5.png" />
                                <p>Line</p>
                                </a>
                            </li>
                            <li>
                                <a href = "https://www.facebook.com/Jaranservice" target="_blank">
                                <img src="http://api.abk-store.com/wp-content/uploads/2020/05/Facebook_Logo_2019.png" />
                                <p>Facebook</p>
                               </a>
                            </li>
                            <li>
                                <a href="mailto: abk.contactus@gmail.com" >
                                <img src="https://api.abk-store.com/wp-content/uploads/2020/05/mail.png" />
                                <p>abk.contactus@gmail.com</p>
                                </a>
                            </li>
                            <li>
                                <a href ="tel:0895937868" >
                                <img src="https://api.abk-store.com/wp-content/uploads/2020/05/79dbd38bce56b49fdc7a04d3b01dee41.png" />
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