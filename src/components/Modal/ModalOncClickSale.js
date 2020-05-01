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
    text-align:center;

    span{
        color: #aaaaaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
        }
        ul{
            align-items:center;
            padding: 0;
            li{
                list-style:none;
                display:inline-block;
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
                        <h1>content</h1>
                    </div>
                </ModalSty>
            )
        }
    }



    return ShowModal()


}

export default ModalOnClickSale