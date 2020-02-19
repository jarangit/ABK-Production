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
// const Button = styled.button`
//     background-color: #17949b;
//     color: white;
//     border: none;
//     padding: 10px;
//     border-radius: 0.5rem;
//     margin-top: 20px;
//     font-weight: bold;
//     ${Button}:hover&{
//         background-color: #42D0D8;
//     }
// `
const Column = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    margin: 100px 0;
    box-shadow: 0 10px 25px rgba(0,0,0,.2);
    border-radius: 10px;
`
const Column1 = styled.div`
    grid-column: 1/5;
    padding: 100px 50px;
`
const Img = styled.img`
    width: 500px;
`



//--------endStyled----------------


const Promote = () => {
    return(
        <div>
            <Column>
                <div>
                        <Column1> 
                            <div>Copyleft is a play on the word copyright and describes the practice of using 
                                copyright law to remove restrictions on distributing copies and modified versions of a work.
                                [15] The aim of 
                            </div>
                                <LinkButt to ='product' key="#"> 
                                    <button> เยี่ยมชมสินค้า  </button>
                                </LinkButt>    
                        </Column1>
                </div>
                <div>
                    <Img src="http://localhost/Project/ABK/www/wp-content/uploads/2020/02/pinion-640484.jpg"/>
                </div>
            </Column>
        </div>
    )
}



export default Promote;
