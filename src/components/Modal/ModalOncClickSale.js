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
    padding: 20px;
    width: 50%;
    border-radius: 0.5rem;
    /* text-align:center; */

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
                    margin: 5px;
                    width:15%;
                }
            }
        }
        textarea{
            width: 50%;
            height: 50px;
        }
    }
    @media all and  (max-width: 650px){
        div{
            width:85%;
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
                    <div>
                    <span onClick = {props.onClose}>x</span>
                        <h1>ติดต่อเรา</h1>
                        <p>หากต้องสอบถามเพิ่มเกี่ยวกับสินค้าของเราหรือต้องการสั้งซื้อสินค้ากรูณาติดต่อช่องทาวต่อไปนี้คะ</p>
                    <div>
                        <ul>
                            <li>
                                <img src="http://api.abk-store.com/wp-content/uploads/2020/05/f7e8c32d420b6da05f807488ebf8a1e5.png" />
                                <p>Line</p>
                            </li>
                            <li>
                                <img src="http://api.abk-store.com/wp-content/uploads/2020/05/Facebook_Logo_2019.png" />
                                <p>Facebook</p>
                            </li>
                            <li>
                                <img src="http://api.abk-store.com/wp-content/uploads/2020/05/mail.png" />
                                <p>Email</p>
                            </li>
                            <li>
                                <img src="http://api.abk-store.com/wp-content/uploads/2020/05/79dbd38bce56b49fdc7a04d3b01dee41.png" />
                                <p>Tel</p>
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