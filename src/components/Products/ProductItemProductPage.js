import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'




//-------styled------------
const Img = styled.img`
    max-width: 150px;
    width: 100%;
`

// const LinkCatName = styled(Link)`
//     text-decoration: none;
//     color: black;
//     ${LinkCatName}:hover&{
//         color:#17949b;
//     }

// `

const BlockCartItem = styled.div`
    display:flex;
    margin: 10px 0;
    div{
        text-align:center;
        margin: 0 15px;
        padding: 15px;
            /* border: 1px solid #D5D8DC ; */
        /* :hover {
        box-shadow: 0 10px 25px rgba(0,0,0,.2);
        margin-top:-10px;
    } */
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
    
`
// const BlockItem = styled.div`
//     /* border-radius: 10px; */
//     text-align:center;
//     margin: 0 15px;
//     padding: 15px;
//     border: 1px solid #D5D8DC ;
//     ${BlockItem}:hover&{
//         box-shadow: 0 10px 25px rgba(0,0,0,.2);
//         margin-top:-10px;
//     }
//         button{
//             background-color: #17949b;
//             border: none;
//             padding: 7px;
//             border-radius: 0.5rem;
//             margin-top: 20px;
//             color: white;
//             :hover{
//             background-color: #42D0D8;
//             }
//     }
// `
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