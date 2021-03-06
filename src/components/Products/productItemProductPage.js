import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'




//-------styled------------
const Img = styled.img`
    max-width: 150px;
    width: 100%;
`
const BlockCartItem = styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    margin: 10px 0;
    div{
        text-align:center;
        margin: 0 15px;
        padding: 15px;
    button{
            background-color: #17949b;
            border: none;
            padding: 7px;
            border-radius: 0.5rem;
            margin-top: 20px;
            color: white;
            :hover{
            background-color: #42D0D8;
            }
        }
    }
    @media all and (max-width: 500px){
        justify-content:center;
    }
    
`
const Div = styled.div`
    margin: 40px 0;
        a{
            text-decoration: none;
            color: black;
            :hover{
            color:#17949b;
        }

    }
`
//---------endStyled-----------

const ProductItemProductPage = (props) => {
    const ShowProduct = () => {
        return(
            props.data.wordPress.productCategories.nodes.map(cat => {
                    if(cat.slug === "uncategorized"){
                        return ''
                    }else{
                        return(
                            <Div>
                                <Link to = {decodeURI('product/' + cat.slug)} key = {cat.id}> <h1>{cat.name}</h1> </Link>
                                <BlockCartItem>
                                        {cat.products.nodes.map(item=>{
                                            return(
                                                  <div>
                                                       <Link to = {decodeURI('product/' + cat.slug + '/' + item.slug)}>
                                                            <Img src={item.image.mediaItemUrl}  />
                                                            <div> {item.name} </div>
                                                            <div> {item.regularPrice} </div>
                                                            <button> รายละเอียดสินค้า </button>          
                                                        </Link>
                                                  </div>
                                            )
                                        })}
                                </BlockCartItem>
                            </Div>
                        )
                    }
            })
        )
    }
    return(
        <div> {ShowProduct()} </div>
    )
}

export default ProductItemProductPage